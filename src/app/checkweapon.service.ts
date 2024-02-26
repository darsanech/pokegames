import { Injectable } from '@angular/core';
import { pokemon, tipos_pokemon, Grid } from './pokemons';


@Injectable({
  providedIn: 'root'
})



export class CheckweaponService {
  tipos = [...tipos_pokemon];
  pokemons = [...pokemon];
  [key: string]: any;

  s:Array<string>=["","","","","",""];
  g:Array<Grid>=new Array<Grid>(9);
  
  creargrid(){
    var x=0;
    for(var i=0;i<3;i++){
      for(var j=3;j<6;j++){
        this.g[x]={
          nombre:"Click",
          tipo1:this.s[i],
          tipo2:this.s[j],
          correct:"wfguess",
        }
        x++;
      }
    }
  }
  
  constructor() { 
    this.reroll();
  }
  reroll(){
    for(let i=0; i<6;i++){
      this.s[i]=this.tipos[Math.floor(Math.random() * 17)];
    }
    this.creargrid();
  }


  checkcorrect(idw: string, slot:number):any{
    console.log(idw);
    console.log(slot);
    var skills = "slot".split('');
    const found = this.pokemons.find((element) => element.name == idw)
    //lo del ninguno luego se quita
    if(idw=="Ninguno"){
      const notfound = this.pokemons.find(
        (element) => 
        (element.tipo1==this.g[slot].tipo1 && element.tipo2==this.g[slot].tipo2) ||
        (element.tipo1==this.g[slot].tipo2 && element.tipo2==this.g[slot].tipo1))
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
    else if((found?.tipo1==this.g[slot].tipo1 || found?.tipo1==this.g[slot].tipo2) && 
    (found?.tipo2==this.g[slot].tipo2 ||found?.tipo2==this.g[slot].tipo2)){
      this.g[slot].nombre=idw;
      this.g[slot].correct="correct";

    }
    else{
      console.log(found?.name);
      console.log(slot);
      console.log(this.g[slot].tipo1);
      console.log(this.g[slot].tipo2);

      window.alert('MAL!');
      this.g[slot].correct="incorrrect";
      this.g[slot].nombre="Fallaste";
    }
  }
}
