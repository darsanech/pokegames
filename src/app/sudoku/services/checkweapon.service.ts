import { PokemonRes, PokemonType } from '../../models/pokemonapi.model';
import { GridTipos, tipos_pokemon } from '../models/checkweapon.model';


export class CheckweaponService {
  tipos = [...tipos_pokemon];

  s:Array<string>=["","","","","",""];
  g:Array<GridTipos>=new Array<GridTipos>(9);
  public detallesPokemon: PokemonRes[]=[];
  
  creargrid(){
    var x=0;
    for(var i=0;i<3;i++){
      for(var j=3;j<6;j++){
        this.g[x]={
          nombre:"Click",
          condicion1:this.s[i],
          condicion2:this.s[j],
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
      this.tipos.splice(aux,1)
    }
    this.creargrid();
  }

  chechifcorrect(id:string, tipospokemon: Array<PokemonType>, slot:number){
    console.log(tipospokemon)
    const con1 = this.g[slot].condicion1 
    const con2 = this.g[slot].condicion2
    if(tipospokemon.length<2){
      if(con1=="monotype" && con2==tipospokemon[0].type.name){
        this.g[slot].nombre=id;
        return "true";
      }
      else if(con2=="monotype" && con1==tipospokemon[0].type.name){
        this.g[slot].nombre=id;
        return "true";
      }
    }
    else if ((tipospokemon[0].type.name === con1 || tipospokemon[0].type.name === con2) &&
    (tipospokemon[1].type.name === con1 || tipospokemon[1].type.name === con2)){
        this.g[slot].nombre=id;
        return "true";
    }
    return "false"
  }


}
