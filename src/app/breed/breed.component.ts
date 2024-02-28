import { Component, ElementRef, OnInit, ViewChild, viewChildren } from '@angular/core';
import { BreedserviceService } from '../services/breedservice.service';
import { CommonModule } from '@angular/common';
import { PatronMovimientos, Pokemon } from '../pokemons';

@Component({
  selector: 'app-breed',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './breed.component.html',
  styleUrl: './breed.component.css'
})

export class BreedComponent implements OnInit{
  [x: string]: any;
  pokemons:Array<Pokemon>;
  randomoffset:Array<PatronMovimientos>=new Array<PatronMovimientos>(10);
  @ViewChild('zona0') zona0!: ElementRef;
  @ViewChild('zona1') zona1!: ElementRef;
  @ViewChild('zona2') zona2!: ElementRef;
  @ViewChild('zona3') zona3!: ElementRef;
  @ViewChild('zona4') zona4!: ElementRef;

  constructor(private breedservice: BreedserviceService){
    this.pokemons=breedservice.guarderia;
  }
  ngOnInit(): void {
    this.randomNumber();

  }
  randomNumber(){ 
    const contenedor = document.getElementById('zona0');
    if(contenedor!=null){
      for(let i=0; i<=10; i++){
        this.randomoffset[i]={
            posx:Math.floor(Math.random() * (contenedor.getBoundingClientRect().width - 150)),
            posy:Math.floor(Math.random() * (contenedor.getBoundingClientRect().height - 150)),
            delay:i/4+"s"
        }
      }
    }
  }

  //comprobar quienes estan en cada zona
  pasarLista(){
    for(let j=0; j<this.zona0.nativeElement.children.length; j++){
      console.log(this.zona0.nativeElement.children[j].id)
    }

  }

  //movimiento
  allowDrop(event: any) {
    event.preventDefault();
  }
  drag(event: any) {
    event.dataTransfer.setData('text', event.target.id);
  }
  drop(event: any, zonaId: string) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(data);
    const contenedor = document.getElementById(zonaId);

    if(draggableElement!=null && contenedor!=null){
      contenedor.appendChild(draggableElement);
      const offsetX = event.clientX - contenedor.getBoundingClientRect().left - draggableElement.clientWidth / 2;
      const offsetY = event.clientY - contenedor.getBoundingClientRect().top - draggableElement.clientHeight / 2 ;
      draggableElement.style.left = offsetX + 'px';
      draggableElement.style.top = offsetY + 'px';
    }
  }
}
