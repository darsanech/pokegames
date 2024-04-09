import { Component, Inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CheckweaponService } from '../services/checkweapon.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from "../../pipes/filter.pipe";
import { PokeapiService } from '../../services/pokeapi.service';


@Component({
    selector: 'app-weaponslist',
    standalone: true,
    providers:[CheckweaponService],
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
    this.pokeapi.fetchPokemons().subscribe(pokemons=>{
      this.pokemons=pokemons;
    }
  )
  }


  closeselection(){
    this.ref.close();
  }
  async selectweapon(id: string, slot:number){
    this.pokeapi.detalles(id).subscribe(pokemondata=>{
      let correcto=this.checkweapon.chechifcorrect(pokemondata.id,pokemondata.types,slot)
      this.ref.close([correcto, slot]);
    })
  }
}