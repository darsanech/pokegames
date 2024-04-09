import { Injectable } from '@angular/core';
import { PokemonRes, PokemonType } from '../../models/pokemonapi.model';
import { GridTipos, tipos_pokemon } from '../models/checkweapon.model';

@Injectable({
  providedIn: 'root'
})

export class CheckweaponService {
  tipos = [...tipos_pokemon];

  condicionTipos:Array<string>=["","","","","",""];
  gridPokemons:Array<GridTipos>=new Array<GridTipos>(9);
  public detallesPokemon: PokemonRes[]=[];
  
  creargrid(){
    var x=0;
    for(var i=0;i<3;i++){
      for(var j=3;j<6;j++){
        this.gridPokemons[x]={
          nombre:-1,
          condicion1:this.condicionTipos[i],
          condicion2:this.condicionTipos[j],
        }
        x++;
      }
    }
  }
  
  constructor() { 
    this.reroll();
  }
  reroll(){
    this.tipos = [...tipos_pokemon];
    for(let i=0; i<6;i++){
      const aux=Math.floor(Math.random() * (18-i))
      this.condicionTipos[i]=this.tipos[aux];
      this.tipos.splice(aux,1)
    }
    this.creargrid();
  }

  chechifcorrect(id:number, tipospokemon: Array<PokemonType>, slot:number){
    const con1 = this.gridPokemons[slot].condicion1 
    const con2 = this.gridPokemons[slot].condicion2
    if(tipospokemon.length<2){
      if(con1=="monotype" && con2==tipospokemon[0].type.name){
        this.gridPokemons[slot].nombre=id;
        return "true";
      }
      else if(con2=="monotype" && con1==tipospokemon[0].type.name){
        this.gridPokemons[slot].nombre=id;
        return "true";
      }
    }
    else if ((tipospokemon[0].type.name === con1 || tipospokemon[0].type.name === con2) &&
    (tipospokemon[1].type.name === con1 || tipospokemon[1].type.name === con2)){
        this.gridPokemons[slot].nombre=id;
        return "true";
    }
    return "false"
  }


}
