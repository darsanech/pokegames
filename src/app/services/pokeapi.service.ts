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
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=1350';
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      console.log(data.results)
      data.results.forEach((element: { url: string; }) => {
        element.url=element.url.split("/").slice(-2, -1)[0];
      });
      this.detallesPokemon=data.results
      console.log(data.results)
      /*
      const detallesPromesas = data.results.map((pokemon: any) => {
        return this.detalles(pokemon.url);
      });
      
      this.detallesPokemon = await Promise.all(detallesPromesas)
      //this.detallesPokemon=data.results;
      console.log("Over")
      */
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


  async detalles(url: string): Promise<any> {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return {
        name: datos.name,
        id: datos.id
    };
  }

}
