import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {map} from 'rxjs'
import { PokemonAPI,PokemonRes } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService implements OnInit{
  public detallesPokemon: PokemonRes[]=[];

  constructor(private http:HttpClient) { 
    this.ngOnInit()
  }


  
  async ngOnInit(): Promise<void> {
    this.fetchPokemons();
  }

  private fetchPokemons(){
    this.http
      .get<PokemonAPI>('https://pokeapi.co/api/v2/pokemon?limit=500')
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
    const url='https://pokeapi.co/api/v2/egg-group'
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    data.results.pop()
    return data.results
  }

  async grupohuevo(id:string): Promise<any>{
    const url='https://pokeapi.co/api/v2/egg-group/'+id
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    return data
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
