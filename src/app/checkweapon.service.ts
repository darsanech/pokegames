import { Injectable } from '@angular/core';
import { pokemon, tipos_pokemon } from './pokemons';


@Injectable({
  providedIn: 'root'
})
export class CheckweaponService {
  tipos = [...tipos_pokemon];
  pokemons = [...pokemon];
  [key: string]: any;

  s:Array<string>=["","","","","",""];


  w03:string="1";
  w04:string="2";
  w05:string="3";
  w13:string="4";
  w14:string="5";
  w15:string="6";
  w23:string="7";
  w24:string="8";
  w25:string="9";

  constructor() { 
    this.reroll();
  }
  reroll(){
    for(let i=0; i<6;i++){
      console.log(this.tipos[1]);
      this.s[i]=this.tipos[Math.floor(Math.random() * 17)];
    }
    this.clear();
  }
  clear(){
    this.w03="1";
    this.w04="2";
    this.w05="3";
    this. w13="4";
    this.w14="5";
    this.w15="6";
    this.w23="7";
    this.w24="8";
    this.w25="9";
  }


  checkcorrect(idw: string, slot:string):any{
    console.log(idw);
    console.log(slot);
    var skills = "slot".split('');
    const found = this.pokemons.find((element) => element.name == idw)
    if((found?.primary_type==this.s[Number(slot.charAt(0))] || found?.secondary_type==this.s[Number(slot.charAt(0))]) && 
    (found?.primary_type==this.s[Number(slot.charAt(1))] ||found?.secondary_type==this.s[Number(slot.charAt(1))])){
      this["w"+slot]=idw;
    }
    else{
      window.alert('MAL!');
    }
  }
}
