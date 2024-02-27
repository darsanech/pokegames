import { Component } from '@angular/core';
import { BreedserviceService } from '../services/breedservice.service';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemons';

@Component({
  selector: 'app-breed',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './breed.component.html',
  styleUrl: './breed.component.css'
})
export class BreedComponent {
  pokemons:Array<Pokemon>;
  constructor(private breedservice: BreedserviceService){
    this.pokemons=breedservice.guarderia;
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
      const offsetY = event.clientY - contenedor.getBoundingClientRect().top - draggableElement.clientHeight / 2;
      draggableElement.style.left = offsetX + 'px';
      draggableElement.style.top = offsetY + 'px';
    }
  }
}
