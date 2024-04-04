import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BreedserviceService } from '../services/breedservice.service';
import { CommonModule } from '@angular/common';
import { PatronMovimientos} from '../pokemons';
import { PokeapiService } from '../services/pokeapi.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { EOL } from 'os';
import { PokemonRes } from '../models/pokemon.model';

@Component({
  selector: 'app-breed',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './breed.component.html',
  styleUrl: './breed.component.css'
})

export class BreedComponent implements OnInit{
  [x: string]: any;
  pokemons:PokemonRes[]=this.breedservice.guarderia;
  randomoffset:Array<PatronMovimientos>=new Array<PatronMovimientos>(15);

  @ViewChild('zona1') zona1!: ElementRef;
  @ViewChild('zona2') zona2!: ElementRef;
  @ViewChild('zona3') zona3!: ElementRef;
  @ViewChild('zona4') zona4!: ElementRef;


  constructor(private dialogRef : MatDialog, private breedservice: BreedserviceService, private renderer:Renderer2, private pokeapi:PokeapiService){
    
  }
  async ngOnInit(): Promise<void> {
    this.randomNumber()
    await this.breedservice.crearLista()
    this.pokemons=this.breedservice.guarderia;

  }


  randomNumber(){ 
    const contenedor = document.getElementById('zona1');
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
        this.renderer.setStyle(this["zona"+i].nativeElement,'background-color','#B2FFB2')
      }
      else{
        this.renderer.setStyle(this["zona"+i].nativeElement,'background-color','#FFB2B2')
      }
    }
  }
  help(){
    const comm="Mueve los pokemons a los recuadros de abajo. \nPuedes arrastrarlos o clicarlos para seleccionarlos y luego clicar en que recuadro quieres dejarlo. \nTienes que separarlos para que todos los Pokemons dentro de cada recuadro tengan el mismo grupo huevo. \n Una vez creas que están todos donde toca, dale al boton de Check, si todos los recuadros salen en verde, esta correcto. Si sale de color rojo, hay uno o más que no pertenecen al mismo grupo huevo."
    const dialogRef =this.dialogRef.open(PopupComponent,{
      width:'60%',
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'250ms',
      height:'80%',
      data:{
        title:'COMO JUGAR',
        desc: comm
      }
    })
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
