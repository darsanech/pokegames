import { Component, Inject, OnInit } from '@angular/core';
import { pokemon } from '../pokemons';
import { CommonModule } from '@angular/common'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CheckweaponService } from '../checkweapon.service';


@Component({
  selector: 'app-weaponslist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weaponslist.component.html',  
  styleUrl: './weaponslist.component.css'
})
export class WeaponslistComponent implements OnInit{
  inputdata:any;
  constructor(private ref:MatDialogRef<WeaponslistComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:any,
    private checkweapon: CheckweaponService){

  }
  ngOnInit(): void {
    this.inputdata=this.data;
  }
  pokemons = [...pokemon];
  closeselection(){
    this.ref.close();
  }
  selectweapon(id: any, slot:any){
    this.checkweapon.checkcorrect(id,slot)
    this.ref.close();
  }
}
