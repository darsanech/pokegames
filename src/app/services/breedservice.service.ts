import { Injectable, ɵgetAsyncClassMetadataFn } from '@angular/core';
import { Element } from '@angular/compiler';
import { PokeapiService } from './pokeapi.service';
import { PokemonRes } from '../models/pokemon.model';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BreedserviceService {


  gruposhuevoava = [0, 1, 2, 3]
  guarderia:PokemonRes[]=[];
  datagrupos:Array<string>=new Array<string>();

  constructor(private pokeapi:PokeapiService) {
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

  async crearLista(){
    const gruposhuevo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14];
    for(let i=0; i<4; i++){
      const id=Math.floor(Math.random() * gruposhuevo.length)
      this.pokeapi.grupohuevo(gruposhuevo[id].toString()).subscribe(data=>{
        gruposhuevo.splice(id,1)
        data.pokemon_species.forEach((element: {
          url: string; }) => {
          element.url=element.url.split("/").slice(-2, -1)[0];
        });
        this.addpokemons(data);
      })
    }
    this.guarderia.sort(() => Math.random() - 0.5);
  }

  addpokemons(data:any){
    this.datagrupos.push(data.pokemon_species.map((pokemon: { url: any; }) => pokemon.url))
    const mida=data.pokemon_species.length
      for(let i=0; i<4;i++){
        const aux=Math.floor(Math.random() * (mida-i))
        var nuevopokemon=data.pokemon_species[aux]
        data.pokemon_species.splice(aux,1)
        this.guarderia.push(nuevopokemon);
      }

  }

}

