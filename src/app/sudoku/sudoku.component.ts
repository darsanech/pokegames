import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { WeaponslistComponent } from '../weaponslist/weaponslist.component';
import { CheckweaponService } from '../services/checkweapon.service';
import { PokeapiService } from '../services/pokeapi.service';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-sudoku',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './sudoku.component.html',
  styleUrl: './sudoku.component.css'  
})
export class SudokuComponent {
  @ViewChild('todo') todo!: ElementRef;
  constructor(private dialogRef : MatDialog, private checkweapon:CheckweaponService, private renderer:Renderer2, private pokeapi:PokeapiService){}
  weaponservice:any;
  ngOnInit(): void {
    this.weaponservice=this.checkweapon;
  }
  reroll(){
    this.weaponservice.reroll();
  }
  
  donini(id:any){
    return this.weaponservice.g[id].correct=="true"
  }

  selectweapon(id: any){

    const dialogRef =this.dialogRef.open(WeaponslistComponent,{
      width:'60%',
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'250ms',
      height:'60%',
      data:{
        title:'Habilidades!',
        space: id,
        tipo1: this.checkweapon.g[id].condicion1,
        tipo2: this.checkweapon.g[id].condicion2,
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result=="true"){
        //this.renderer.setStyle(this.todo.nativeElement,'background','radial-gradient(red 0%,transparent 70%)')
        this.todo.nativeElement.classList.toggle('correcto');
        setTimeout(() =>{
          this.todo.nativeElement.classList.toggle('correcto');
        },1000);
      }
      else if(result=="false"){
        this.todo.nativeElement.classList.toggle('incorrecto');
        setTimeout(() =>{
          this.todo.nativeElement.classList.toggle('incorrecto');
        },1000);
      }
      
    })
    }
    help(){
      const comm="En esta cuadricula de 3x3 formada por pokeballs tienes que adivinar que pokemon contiene los tipos pedidos. \nPara seleccionar un pokemon, haz click en la pokeball y usa la barra de búsqueda para encontrarlo. \nEn caso de ser correcto, el pokemon quedará guardado y la pantalla se iluminara en verde. \nEn caso contrario se iluminará de rojo."
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
  

}
