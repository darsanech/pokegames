import { Injectable, ɵgetAsyncClassMetadataFn } from '@angular/core';
import { Pokemon, grupo_huevo, pokemon } from '../pokemons';
import { Element } from '@angular/compiler';
import fs from 'fs';

@Injectable({
  providedIn: 'root'
})

export class BreedserviceService {
  
  pokemons = [...pokemon];
  grupos_huevo = [...grupo_huevo];

  guarderia:Array<any>=new Array<any>;
  //1 -- 1008
  constructor() { 
  }
  
  puedenCriar(lista:any){
    
    if(lista.length==0) return true;
    try{
      const p1 = this.pokemons.find((element) => element.name == lista[0].id)
      let tipo1:boolean=true, tipo2:boolean=p1?.grupohuevo2!=""
      if(p1==null){
        throw new Error("no existe")
      }
      for(let i=1; i<lista.length;i++){
        const p2 = this.pokemons.find((element) => element.name == lista[i].id)
        if(p2==null){
         throw new Error("no existe")
        }
        if(tipo1 && !this.mismoGrupoHuevo1(p1,p2)){
          tipo1=false;
        } 
        if(tipo2 && !this.mismoGrupoHuevo2(p1,p2)){
          tipo2=false;
        } 
      }
      console.log("BIEN" +tipo1+" "+ tipo2)
      return (tipo1 || tipo2)
    }
    catch(e){
      console.log(e)
      return false
    }
    
  }

  mismoGrupoHuevo1(p1:Pokemon, p2:Pokemon){
    return [p2.grupohuevo1,p2.grupohuevo2].includes(p1.grupohuevo1);
  }
  mismoGrupoHuevo2(p1:Pokemon, p2:Pokemon){
    return [p2.grupohuevo1,p2.grupohuevo2].includes(p1.grupohuevo2)
  }

  addpokemons(data:any){
    console.log(data)
    console.log(data.pokemon_species.length)
    const mida=data.pokemon_species.length
    for(let i=0; i<Math.floor(Math.random()*2)+2;i++){
      const aux=Math.floor(Math.random() * mida)
      var nuevopokemon=data.pokemon_species[aux]
      data.pokemon_species.splice(aux,1)
      nuevopokemon.url=nuevopokemon.url.split("/").slice(-2, -1)[0];
      this.guarderia.push(nuevopokemon);
      console.log(nuevopokemon)
    }

  }

  addpokemons1(){
    var last:Array<string>=new Array<string>;
    for(let i=0; i<4; i++){
      var aux=this.grupos_huevo[Math.floor(Math.random() * 14)];
      while(last.includes(aux)){
        aux=this.grupos_huevo[Math.floor(Math.random() * 14)];
      }
      last.push(aux);
      console.log(last)
      //const p2 = this.pokemons.find((element) => element.name == lista[i].id)
      var lista=this.pokemons.filter((element) => element.grupohuevo1 == aux || element.grupohuevo2 == aux)

      for(let j=0; j<Math.floor(Math.random() * 2)+2;j++){
        var nuevopokemon=lista[Math.floor(Math.random() * lista.length)]

        //no mostrarlo si no tiene imagen
        //let filePath="../../assets/sprites/"+nuevopokemon.name+".png"
        //console.log(this.fs.accessSync(filePath))
          
        //esto para las imagenes
        while(Number(nuevopokemon.dex)%1!=0 || this.guarderia.includes(nuevopokemon)){
          nuevopokemon=lista[Math.floor(Math.random() * lista.length)]
        }
        this.guarderia.push(nuevopokemon);
        console.log(nuevopokemon.name)
      }
    }
    
  }
}

