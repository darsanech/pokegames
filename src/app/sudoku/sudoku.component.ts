import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { WeaponslistComponent } from '../weaponslist/weaponslist.component';
import { CheckweaponService } from '../services/checkweapon.service';

@Component({
  selector: 'app-sudoku',
  standalone: true,
  imports: [],
  templateUrl: './sudoku.component.html',
  styleUrl: './sudoku.component.css'
})
export class SudokuComponent {
  constructor(private dialogRef : MatDialog, private checkweapon:CheckweaponService){}
  weaponservice:any;
  ngOnInit(): void {
    this.weaponservice=this.checkweapon;
  }
  reroll(){
    this.weaponservice.reroll();
  }
  selectweapon(event: any){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    this.dialogRef.open(WeaponslistComponent,{
      width:'60%',
      
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'250ms',

      height:'80%',
      data:{
        title:'Habilidades!',
        space: value,
        tipo1: this.checkweapon.g[value].tipo1,
        tipo2: this.checkweapon.g[value].tipo2,
      }
  });
  };

}
