import { Component } from '@angular/core';
import { weapons } from '../weapons';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-weaponslist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weaponslist.component.html',
  styleUrl: './weaponslist.component.css'
})
export class WeaponslistComponent {
  weapons = [...weapons];
}
