import { Injectable } from '@angular/core';
import { Pokemon, pokemon } from '../pokemons';

@Injectable({
  providedIn: 'root'
})
export class BreedserviceService {
  pokemons = [...pokemon];

  guarderia:Array<Pokemon>=new Array<Pokemon>;
  //1 -- 1008
  constructor() { 
    this.addpokemons();
  }
  
  addpokemons(){
    var aux=this.pokemons[Math.floor(Math.random() * 1008)];
    for(let i=0; i<6;i++){
      //esto para las imagenes
      while(Number(aux.dex)%1!=0 || this.guarderia.includes(aux)){
        aux=this.pokemons[Math.floor(Math.random() * 1008)];
      }
      this.guarderia.push(aux);
    }
  }
}

