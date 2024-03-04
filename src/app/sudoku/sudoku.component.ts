import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { WeaponslistComponent } from '../weaponslist/weaponslist.component';
import { CheckweaponService } from '../services/checkweapon.service';
import { PokeapiService } from '../services/pokeapi.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sudoku',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './sudoku.component.html',
  styleUrl: './sudoku.component.css'  
})
export class SudokuComponent {
  constructor(private dialogRef : MatDialog, private checkweapon:CheckweaponService,  private pokeapi:PokeapiService){}
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

    this.dialogRef.open(WeaponslistComponent,{
      width:'60%',
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'250ms',
      height:'80%',
      data:{
        title:'Habilidades!',
        space: id,
        tipo1: this.checkweapon.g[id].condicion1,
        tipo2: this.checkweapon.g[id].condicion2,
      }
  });
  };

}
