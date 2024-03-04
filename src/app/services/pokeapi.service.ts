import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService implements OnInit{
  detallesPokemon: any;

  constructor() { 
    console.log("AWA")
    this.ngOnInit()
  }


  
  async ngOnInit(): Promise<void> {
      console.log("ONCE")
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      console.log(data.results)
      data.results.forEach((element: {
        name: any; url: string; }) => {
        element.url=element.url.split("/").slice(-2, -1)[0];
        element.name=element.name.replace(/-/g, " ");
      });
      this.detallesPokemon=data.results
      console.log(data.results)
  }
  
  async buscarDetalles(data:any):Promise<any>{
    console.log(data)
    const detallesPromesas = await data.map((pokemon: any) => {
      return this.detalles(pokemon.url);
    });
    console.log("salir")
    await console.log(detallesPromesas)
    return await Promise.all(detallesPromesas)
  }

  async pokemonConDetalles(id:string):Promise<any>{

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
