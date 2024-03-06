import { Injectable } from '@angular/core';
import { tipos_pokemon, GridTipos } from '../pokemons';


@Injectable({
  providedIn: 'root'
})



export class CheckweaponService {
  tipos = [...tipos_pokemon];
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
    this.tipos = [...tipos_pokemon];
    for(let i=0; i<6;i++){
      const aux=Math.floor(Math.random() * (18-i))
      this.s[i]=this.tipos[aux];
      console.log(this.s[i])
      this.tipos.splice(aux,1)
    }
    this.creargrid();
  }

  chechifcorrect(id:string, tipospokemon: Array<any>, slot:number){
    const con1 = this.g[slot].condicion1 
    const con2 = this.g[slot].condicion2
    if((con1=="monotype" || con2=="monotype") && tipospokemon.length<2){
      console.log("Correcto Monotype")
    }
    else if ((tipospokemon[0].type.name === con1 || tipospokemon[0].type.name === con2) &&
    (tipospokemon[1].type.name === con1 || tipospokemon[1].type.name === con2)){
        console.log("correcto")
        this.g[slot].correct="true";
        this.g[slot].nombre=id;
    }
    else{
      console.log("Incorrecto")

    }
  }


}
