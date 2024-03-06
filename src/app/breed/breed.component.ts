import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BreedserviceService } from '../services/breedservice.service';
import { CommonModule } from '@angular/common';
import { PatronMovimientos} from '../pokemons';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-breed',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './breed.component.html',
  styleUrl: './breed.component.css'
})

export class BreedComponent implements OnInit{
  [x: string]: any;
  pokemons:any=this.breedservice.guarderia;
  randomoffset:Array<PatronMovimientos>=new Array<PatronMovimientos>(15);

  @ViewChild('zona0') zona0!: ElementRef;
  @ViewChild('zona1') zona1!: ElementRef;
  @ViewChild('zona2') zona2!: ElementRef;
  @ViewChild('zona3') zona3!: ElementRef;
  @ViewChild('zona4') zona4!: ElementRef;


  constructor(private breedservice: BreedserviceService, private renderer:Renderer2, private pokeapi:PokeapiService){
    
  }
  async ngOnInit(): Promise<void> {
    this.randomNumber()
    var last:Array<string>=new Array<string>;
    const gruposhuevo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14];
    for(let i=0; i<4; i++){
      const id=Math.floor(Math.random() * gruposhuevo.length)
      var data=await this.pokeapi.grupohuevo(gruposhuevo[id].toString());
      gruposhuevo.splice(id,1)
      data.pokemon_species.forEach((element: {
        url: string; }) => {
        element.url=element.url.split("/").slice(-2, -1)[0];
      });
      this.breedservice.addpokemons(data);
    }
    this.pokemons=this.breedservice.guarderia;

  }


  randomNumber(){ 
    const contenedor = document.getElementById('zona0');
    if(contenedor!=null){
      for(let i=0; i<=15; i++){
        this.randomoffset[i]={
            posx:Math.floor(Math.random() * (contenedor.getBoundingClientRect().width - 150)),
            posy:Math.floor(Math.random() * (contenedor.getBoundingClientRect().height - 150)),
            delay:Math.floor(Math.random() *3)+"s"
        }
      }
    }
  }

  //comprobar quienes estan en cada zona
  pasarLista(){
    this.breedservice.relist()
    for(let i=1; i<5; i++){
      if(this.breedservice.puedenCriar(this["zona"+i].nativeElement.children)){
        this.renderer.setStyle(this["zona"+i].nativeElement,'background-color','green')
      }
      else{
        this.renderer.setStyle(this["zona"+i].nativeElement,'background-color','red')
      }
      
    }

  }

  //movimiento
  clickPoke:any=''
  onMovePoke=false

  switch(move:any,id:any){
    this.onMovePoke=move
    this.clickPoke=id
    if(id!='')
      this.zoom(document.getElementById(this.clickPoke))
  }
  zoom(pokemon:any){
    pokemon.classList.toggle('zoom')
    pokemon.classList.toggle('move')
  }

  allowDrop(event: any) {
    event.preventDefault();
  }
  drag(event: any) {
    if(this.clickPoke==''){
      this.switch(false,event.target.id)
    }
    else{
      this.zoom(document.getElementById(this.clickPoke))
      this.switch(false,event.target.id)
    }
  }
  select(event:any){
    if(this.clickPoke==''){
      this.switch(false,event.target.id)
    }
  }
   move(event:any, zonaId:string){
    if(this.clickPoke!='' && this.onMovePoke){
      event.preventDefault();
      const pokemon = document.getElementById(this.clickPoke);
      if(pokemon!=null){
        this.renderer.appendChild(this[zonaId].nativeElement,pokemon)
        const offsetX = event.clientX - this[zonaId].nativeElement.offsetLeft - pokemon.clientWidth / 2;
        const offsetY = event.clientY - this[zonaId].nativeElement.offsetTop - pokemon.clientHeight / 2 ;
        pokemon.style.left = offsetX + 'px';
        pokemon.style.top = offsetY + 'px';
      }
      this.zoom(document.getElementById(this.clickPoke))
      this.switch(false,'')
    }
    else{
      this.onMovePoke=true
    }
  }


  drop(event: any, zonaId: string) {
    event.preventDefault();
    const draggableElement = document.getElementById(this.clickPoke);
    if(draggableElement!=null){
      this.renderer.appendChild(this[zonaId].nativeElement,draggableElement)
      const offsetX = event.clientX - this[zonaId].nativeElement.offsetLeft - draggableElement.clientWidth / 2;
      const offsetY = event.clientY - this[zonaId].nativeElement.offsetTop - draggableElement.clientHeight / 2 ;
      draggableElement.style.left = offsetX + 'px';
      draggableElement.style.top = offsetY + 'px';
      this.zoom(draggableElement)
      this.switch(false,'')
    }
  }
}
