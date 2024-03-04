import { Injectable } from '@angular/core';
import { pokemon, tipos_pokemon, GridTipos } from '../pokemons';
import { PokeapiService } from './pokeapi.service';


@Injectable({
  providedIn: 'root'
})



export class CheckweaponService {
  tipos = [...tipos_pokemon];
  pokemons = [...pokemon];
  [key: string]: any;

  s:Array<string>=["","","","","",""];
  g:Array<GridTipos>=new Array<GridTipos>(9);
  
  creargrid(){
    var x=0;
    for(var i=0;i<3;i++){
      for(var j=3;j<6;j++){
        this.g[x]={
          nombre:"Click",
          condicion1:this.s[i],
          condicion2:this.s[j],
          correct:"false",
        }
        x++;
      }
    }
  }
  
  constructor() { 
    this.reroll();
  }
  reroll(){
    var aux=this.tipos[Math.floor(Math.random() * 17)];
    for(let i=0; i<6;i++){
      while(this.s.includes(aux)){
        aux=this.tipos[Math.floor(Math.random() * 17)];
      }
      this.s[i]=aux;
    }
    this.creargrid();
  }

  chechifcorrect(id:string, tipospokemon: Array<any>, slot:number){
    const con1 = this.g[slot].condicion1 
    const con2 = this.g[slot].condicion2
    if(tipospokemon.length<2){
      console.log("incorrecto")
    }
    else if ((tipospokemon[0].type.name === con1 || tipospokemon[0].type.name === con2) &&
    (tipospokemon[1].type.name === con1 || tipospokemon[1].type.name === con2)){
        console.log("correcto")
        this.g[slot].correct="true";
        this.g[slot].nombre=id;
    }
    else{
      console.log("suda")

    }
  }

  /*

  checkcorrect(idw: string, slot:number):any{
    console.log(idw);
    console.log(slot);
    var skills = "slot".split('');
    const found = this.pokemons.find((element) => element.name == idw)
    //lo del ninguno luego se quita
    if(idw=="Ninguno"){
      const notfound = this.pokemons.find(
        (element) => 
        (element.tipo1==this.g[slot].condicion1 && element.tipo2==this.g[slot].condicion2) ||
        (element.tipo1==this.g[slot].condicion2 && element.tipo2==this.g[slot].condicion1))
        if(notfound!=null){
          window.alert('MAL!');
          console.log(notfound);
          this.g[slot].nombre=notfound?.name;
          this.g[slot].correct="incorrrect";
        }
        else{
          this.g[slot].nombre=idw;
          this.g[slot].correct="correct";
        }
    }
    else if((found?.tipo1==this.g[slot].condicion1 || found?.tipo1==this.g[slot].condicion2) && 
    (found?.tipo2==this.g[slot].condicion2 ||found?.tipo2==this.g[slot].condicion1)){
      this.g[slot].nombre=idw;
      this.g[slot].correct="correct";

    }
    else{
      const notfound = this.pokemons.find(
        (element) => 
        (element.tipo1==this.g[slot].condicion1 && element.tipo2==this.g[slot].condicion2) ||
        (element.tipo1==this.g[slot].condicion2 && element.tipo2==this.g[slot].condicion1))
      if(notfound!=null){
        this.g[slot].nombre=notfound?.name;
      }
      else{
        this.g[slot].nombre="Ninguno";
      }
      window.alert('MAL!');
      this.g[slot].correct="incorrrect";
    }
  }
  */
}
