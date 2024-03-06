import { Injectable, ɵgetAsyncClassMetadataFn } from '@angular/core';
import { Element } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class BreedserviceService {


  gruposhuevoava = [0, 1, 2, 3]
  guarderia:Array<any>=new Array<any>;
  datagrupos:Array<any>=new Array<any>();
  correctos:Array<any>=new Array<any>();

  constructor() {
  }

  relist(){
    this.gruposhuevoava = [0, 1, 2, 3]
  }
  puedenCriar(lista:any){
    const ids = [];
    if(lista.length==0){
      return true
    }
    for(let i=0;i<lista.length;i++){
      ids.push(lista[i].id)
    }
    for(let i=0;i<this.gruposhuevoava.length;i++){
      if(ids.every(id => this.datagrupos[this.gruposhuevoava[i]].includes(id))){
        this.gruposhuevoava.splice(i,1)
        return true
      }
    }
    return false;
  }

  addpokemons(data:any){
    this.datagrupos.push(data.pokemon_species.map((pokemon: { url: any; }) => pokemon.url))
    const mida=data.pokemon_species.length
      for(let i=0; i<Math.floor(Math.random()*3)+2;i++){
        const aux=Math.floor(Math.random() * (mida-i))
        var nuevopokemon=data.pokemon_species[aux]
        data.pokemon_species.splice(aux,1)
        this.guarderia.push(nuevopokemon);
      }

  }

}

