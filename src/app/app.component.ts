import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { WeaponslistComponent } from './weaponslist/weaponslist.component';
import { CheckweaponService } from './checkweapon.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'gridmk2';
  weaponservice:any;
  constructor(private dialogRef : MatDialog, private checkweapon:CheckweaponService){}

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

      height:'60%',
      data:{
        title:'Habilidades!',
        space: value,
        tipo1: this.checkweapon.s[Number(value.charAt(0))],
        tipo2: this.checkweapon.s[Number(value.charAt(1))],
      }
  });
  };
}
