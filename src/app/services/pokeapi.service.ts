import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {map} from 'rxjs'
import { GrupoHuevo, PokemonAPI,PokemonData,PokemonRes } from '../models/pokemon.model';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService implements OnInit{
  public detallesPokemon: PokemonRes[]=[];
  public detallesGrupoHuevo: PokemonRes[]=[];

  constructor(private http:HttpClient) { 
    this.ngOnInit()
  }


  
  async ngOnInit(): Promise<void> {
  }

  fetchPokemons(){
    return this.http
      .get<PokemonAPI>('https://pokeapi.co/api/v2/pokemon?limit=500')
      .pipe(map(responseData=>{
        const pChange:PokemonRes[] =[]
        responseData.results.forEach(function (value){
          pChange.push({name: value.name.replace(/-/g, " "), url: value.url.split("/").slice(-2, -1)[0]})
        })
        return pChange;
      }))
      ;
  }

  grupohuevo(id:string){
    return this.http
    .get<GrupoHuevo>('https://pokeapi.co/api/v2/egg-group/'+id)
  }


  detalles(id: string){
    return this.http
    .get<PokemonData>('https://pokeapi.co/api/v2/pokemon/'+id)
    .pipe(map(responseData=>{
      return {id: responseData.id, name: responseData.name, types: responseData.types, species: responseData.species}
    }))
 
  }



}
