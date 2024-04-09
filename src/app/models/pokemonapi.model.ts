export class PokemonRes{
    public url: string;
    public name: string;
    constructor(name: string, url:string){
        this.name=name;
        this.url=url;
    }
} 

export class GrupoHuevo{
    public id: number;
    public name: string;
    public pokemon_species: PokemonRes[];
    constructor(id:number, name:string, pokemon_species: PokemonRes[]){
        this.id=id;
        this.name=name;
        this.pokemon_species=pokemon_species;
    }
}
export class PokemonType{
    public slot:number;
    public type:PokemonRes;
    constructor(slot:number, type:PokemonRes){
        this.slot=slot;
        this.type=type;
    }
}
export class PokemonData{
    public id: string;
    public name: string;
    public types: PokemonType[];
    public species: PokemonRes;
    constructor(id:string, name:string, types:PokemonType[], species:PokemonRes){
        this.id=id;
        this.name=name;
        this.types=types;
        this.species=species;
    }
}
export class PokemonAPI{
    public results: PokemonRes[];
    constructor(results: PokemonRes[]){
        this.results=results;
    }
} 