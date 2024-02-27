import { Component } from '@angular/core';

@Component({
  selector: 'app-breed',
  standalone: true,
  imports: [],
  templateUrl: './breed.component.html',
  styleUrl: './breed.component.css'
})
export class BreedComponent {
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
