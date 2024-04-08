import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {map} from 'rxjs'
import { GrupoHuevo, PokemonAPI,PokemonRes } from '../models/pokemon.model';
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
    this.fetchPokemons();
  }

  private fetchPokemons(){
    this.http
      .get<PokemonAPI>('https://pokeapi.co/api/v2/pokemon?limit=5')
      .pipe(map(responseData=>{
        const pChange:PokemonRes[] =[]
        responseData.results.forEach(function (value){
          pChange.push({name: value.name.replace(/-/g, " "), url: value.url.split("/").slice(-2, -1)[0]})
        })
        return pChange;
      }))
      .subscribe(pokemons=>{
        this.detallesPokemon=pokemons;
      }
    );
  }
  
  async buscarDetalles(data:any):Promise<any>{
    const detallesPromesas = await data.map((pokemon: any) => {
      return this.detalles(pokemon.url);
    });
    return await Promise.all(detallesPromesas)
  }


  async gruposhuevo(): Promise<any>{
    this.http
    .get<PokemonAPI>('https://pokeapi.co/api/v2/egg-group')
    .pipe(map(responseData=>{
      const pChange:PokemonRes[] =[]
        responseData.results.forEach(function (value){
          pChange.push({name: value.name, url: value.url.split("/").slice(-2, -1)[0]})
        })
        pChange.pop();
        return pChange;
    }))
    .subscribe(gruposHuevos=>{
      this.detallesGrupoHuevo=gruposHuevos;
    });

  }

  grupohuevo(id:string){
    return this.http
    .get<GrupoHuevo>('https://pokeapi.co/api/v2/egg-group/'+id)
  }


  async detalles(id: string): Promise<any> {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/"+id);
    const datos = await respuesta.json();
    return {
        id: datos.id,
        name: datos.name,
        stats: datos.stats,
        tipo: datos.types,
        hab: datos.abilities,
        species: datos.species
    };
  }
  async detallesSpecies(url: string): Promise<any> {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return {
        id: datos.id,
        name: datos.name
    };
  }


}
