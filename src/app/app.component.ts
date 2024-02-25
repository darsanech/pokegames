import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { WeaponslistComponent } from './weaponslist/weaponslist.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gridmk2';
  constructor(private dialogRef : MatDialog){}

  selectweapon(){
    this.dialogRef.open(WeaponslistComponent,{
      width:'60%',
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'250ms',

      height:'60%',
      data:{
        title:'Habilidades!'
      }
  });
  };
}
