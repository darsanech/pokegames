import { Component, Inject, OnInit} from '@angular/core';
import { pokemon } from '../pokemons';
import { CommonModule } from '@angular/common'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CheckweaponService } from '../services/checkweapon.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from "../filter.pipe";
import { PokeapiService } from '../services/pokeapi.service';


@Component({
    selector: 'app-weaponslist',
    standalone: true,
    templateUrl: './weaponslist.component.html',
    styleUrl: './weaponslist.component.css',
    imports: [CommonModule, FormsModule, FilterPipe]
})
export class WeaponslistComponent implements OnInit{
  inputdata:any;
  filteredname:any;
  pokemons:any;
  imagenCache: { [key: string]: Promise<string> } = {};
  constructor(private ref:MatDialogRef<WeaponslistComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private checkweapon: CheckweaponService,
    private pokeapi:PokeapiService){


  }
  async ngOnInit(): Promise<void> {
    this.inputdata=this.data;
    this.pokemons = await this.pokeapi.detallesPokemon
  }


  closeselection(){
    this.ref.close();
  }
  selectweapon(id: any, slot:any){
    this.checkweapon.checkcorrect(id,slot)
    this.ref.close();
  }
}
