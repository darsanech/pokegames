import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
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
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent {
  @ViewChild('todo') todo!: ElementRef;
  @ViewChildren('row1') row1!: QueryList<ElementRef>;
  @ViewChildren('row2') row2!: QueryList<ElementRef>;
  @ViewChildren('row3') row3!: QueryList<ElementRef>;
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
    console.log(id)
    const dialogRef =this.dialogRef.open(WeaponslistComponent,{
      width:'70%',
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'250ms',
      height:'70%',
      data:{
        title:'Habilidades!',
        space: id,
        tipo1: this.checkweapon.g[id].condicion1,
        tipo2: this.checkweapon.g[id].condicion2,
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result[0]=="true"){
        if(result[1]<3){
          const child=result[1];
          this.row1.get(child)?.nativeElement.classList.toggle('shadow-success')
          setTimeout(() =>{
            this.row1.get(child)?.nativeElement.classList.toggle('shadow-success')
          },500);
        }
        else if(result[1]<6){
          const child=result[1]-3;
          this.row2.get(child)?.nativeElement.classList.toggle('shadow-success')
          setTimeout(() =>{
            this.row2.get(child)?.nativeElement.classList.toggle('shadow-success')
          },500);
        }
        else if(result[1]<9){
          const child=result[1]-6;
          this.row3.get(child)?.nativeElement.classList.toggle('shadow-success')
          setTimeout(() =>{
            this.row3.get(child)?.nativeElement.classList.toggle('shadow-success')
          },500);
        }
      }
      else if(result[0]=="false"){
        if(result[1]<3){
          const child=result[1];
          this.row1.get(child)?.nativeElement.classList.toggle('shadow-error')
          this.row1.get(child)?.nativeElement.classList.toggle('rumble')
          setTimeout(() =>{
            this.row1.get(child)?.nativeElement.classList.toggle('shadow-error')
            this.row1.get(child)?.nativeElement.classList.toggle('rumble')
          },500);
        }
        else if(result[1]<6){
          const child=result[1]-3;
          this.row2.get(child)?.nativeElement.classList.toggle('shadow-error')
          this.row2.get(child)?.nativeElement.classList.toggle('rumble')
          setTimeout(() =>{
            this.row2.get(child)?.nativeElement.classList.toggle('shadow-error')
            this.row2.get(child)?.nativeElement.classList.toggle('rumble')
          },500);
        }
        else if(result[1]<9){
          const child=result[1]-6;
          this.row3.get(child)?.nativeElement.classList.toggle('shadow-error')
          this.row3.get(child)?.nativeElement.classList.toggle('rumble')
          setTimeout(() =>{
            this.row3.get(child)?.nativeElement.classList.toggle('shadow-error')
            this.row3.get(child)?.nativeElement.classList.toggle('rumble')
          },500);
        }
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
