export class PokemonRes{
    public url: string;
    public name: string;
    constructor(name: string, url:string){
        this.name=name;
        this.url=url;
    }
} 
export class PokemonAPI{
    public results: PokemonRes[];
    constructor(results: PokemonRes[]){
        this.results=results;
    }
} 