import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WeaponslistComponent } from '../weaponslist/weaponslist.component';

@Component({  
  selector: 'app-grid',
  standalone: true,
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  constructor(private dialogRef : MatDialog){}

  selectweapon(){
    this.dialogRef.open(WeaponslistComponent);
  };

}
