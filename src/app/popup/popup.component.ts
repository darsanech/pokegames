import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  inputdata:any;

  constructor(private ref:MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any){
  }
  async ngOnInit(): Promise<void> {
    this.inputdata=this.data;
  }
}
