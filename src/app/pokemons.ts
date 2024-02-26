export interface Pokemon {
    name: string;
    type1: string;
    type2: string;
    stage: string;
  }
export interface Tipo {
name: string;
}
  export const pokemon = [
    {
        "name": "Bulbasaur",
        "primary_type": "Grass",
        "secondary_type": "Poison",
        "evolution_stage": "Basic"
    },
    {
        "name": "Ivysaur",
        "primary_type": "Grass",
        "secondary_type": "Poison",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Venusaur",
        "primary_type": "Grass",
        "secondary_type": "Poison",
        "evolution_stage": "Stage 2"
    },
    {
        "name": "Charmander",
        "primary_type": "Fire",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Charmeleon",
        "primary_type": "Fire",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Charizard",
        "primary_type": "Fire",
        "secondary_type": "Flying",
        "evolution_stage": "Stage 2"
    },
    {
        "name": "Squirtle",
        "primary_type": "Water",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Wartortle",
        "primary_type": "Water",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Blastoise",
        "primary_type": "Water",
        "secondary_type": null,
        "evolution_stage": "Stage 2"
    },
    {
        "name": "Caterpie",
        "primary_type": "Bug",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Metapod",
        "primary_type": "Bug",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Butterfree",
        "primary_type": "Bug",
        "secondary_type": "Flying",
        "evolution_stage": "Stage 2"
    },
    {
        "name": "Weedle",
        "primary_type": "Bug",
        "secondary_type": "Poison",
        "evolution_stage": "Basic"
    },
    {
        "name": "Kakuna",
        "primary_type": "Bug",
        "secondary_type": "Poison",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Beedrill",
        "primary_type": "Bug",
        "secondary_type": "Poison",
        "evolution_stage": "Stage 2"
    },
    {
        "name": "Pidgey",
        "primary_type": "Normal",
        "secondary_type": "Flying",
        "evolution_stage": "Basic"
    },
    {
        "name": "Pidgeotto",
        "primary_type": "Normal",
        "secondary_type": "Flying",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Pidgeot",
        "primary_type": "Normal",
        "secondary_type": "Flying",
        "evolution_stage": "Stage 2"
    },
    {
        "name": "Rattata",
        "primary_type": "Normal",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Raticate",
        "primary_type": "Normal",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Spearow",
        "primary_type": "Normal",
        "secondary_type": "Flying",
        "evolution_stage": "Basic"
    },
    {
        "name": "Fearow",
        "primary_type": "Normal",
        "secondary_type": "Flying",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Ekans",
        "primary_type": "Poison",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Arbok",
        "primary_type": "Poison",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Pikachu",
        "primary_type": "Electric",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Raichu",
        "primary_type": "Electric",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Sandshrew",
        "primary_type": "Ground",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Sandslash",
        "primary_type": "Ground",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Nidoran♀",
        "primary_type": "Poison",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Nidorina",
        "primary_type": "Poison",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Nidoqueen",
        "primary_type": "Poison",
        "secondary_type": "Ground",
        "evolution_stage": "Stage 2"
    },
    {
        "name": "Nidoran♂",
        "primary_type": "Poison",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Nidorino",
        "primary_type": "Poison",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Nidoking",
        "primary_type": "Poison",
        "secondary_type": "Ground",
        "evolution_stage": "Stage 2"
    },
    {
        "name": "Clefairy",
        "primary_type": "Fairy",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Clefable",
        "primary_type": "Fairy",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Vulpix",
        "primary_type": "Fire",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Ninetales",
        "primary_type": "Fire",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Jigglypuff",
        "primary_type": "Normal",
        "secondary_type": "Fairy",
        "evolution_stage": "Basic"
    },
    {
        "name": "Wigglytuff",
        "primary_type": "Normal",
        "secondary_type": "Fairy",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Zubat",
        "primary_type": "Poison",
        "secondary_type": "Flying",
        "evolution_stage": "Basic"
    },
    {
        "name": "Golbat",
        "primary_type": "Poison",
        "secondary_type": "Flying",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Oddish",
        "primary_type": "Grass",
        "secondary_type": "Poison",
        "evolution_stage": "Basic"
    },
    {
        "name": "Gloom",
        "primary_type": "Grass",
        "secondary_type": "Poison",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Vileplume",
        "primary_type": "Grass",
        "secondary_type": "Poison",
        "evolution_stage": "Stage 2"
    },
    {
        "name": "Paras",
        "primary_type": "Bug",
        "secondary_type": "Grass",
        "evolution_stage": "Basic"
    },
    {
        "name": "Parasect",
        "primary_type": "Bug",
        "secondary_type": "Grass",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Venonat",
        "primary_type": "Bug",
        "secondary_type": "Poison",
        "evolution_stage": "Basic"
    },
    {
        "name": "Venomoth",
        "primary_type": "Bug",
        "secondary_type": "Poison",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Diglett",
        "primary_type": "Ground",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Dugtrio",
        "primary_type": "Ground",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Meowth",
        "primary_type": "Normal",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Persian",
        "primary_type": "Normal",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Psyduck",
        "primary_type": "Water",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Golduck",
        "primary_type": "Water",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Mankey",
        "primary_type": "Fighting",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Primeape",
        "primary_type": "Fighting",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Growlithe",
        "primary_type": "Fire",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Arcanine",
        "primary_type": "Fire",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Poliwag",
        "primary_type": "Water",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Poliwhirl",
        "primary_type": "Water",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Poliwrath",
        "primary_type": "Water",
        "secondary_type": "Fighting",
        "evolution_stage": "Stage 2"
    },
    {
        "name": "Abra",
        "primary_type": "Psychic",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Kadabra",
        "primary_type": "Psychic",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Alakazam",
        "primary_type": "Psychic",
        "secondary_type": null,
        "evolution_stage": "Stage 2"
    },
    {
        "name": "Machop",
        "primary_type": "Fighting",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Machoke",
        "primary_type": "Fighting",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Machamp",
        "primary_type": "Fighting",
        "secondary_type": null,
        "evolution_stage": "Stage 2"
    },
    {
        "name": "Bellsprout",
        "primary_type": "Grass",
        "secondary_type": "Poison",
        "evolution_stage": "Basic"
    },
    {
        "name": "Weepinbell",
        "primary_type": "Grass",
        "secondary_type": "Poison",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Victreebel",
        "primary_type": "Grass",
        "secondary_type": "Poison",
        "evolution_stage": "Stage 2"
    },
    {
        "name": "Tentacool",
        "primary_type": "Water",
        "secondary_type": "Poison",
        "evolution_stage": "Basic"
    },
    {
        "name": "Tentacruel",
        "primary_type": "Water",
        "secondary_type": "Poison",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Geodude",
        "primary_type": "Rock",
        "secondary_type": "Ground",
        "evolution_stage": "Basic"
    },
    {
        "name": "Graveler",
        "primary_type": "Rock",
        "secondary_type": "Ground",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Golem",
        "primary_type": "Rock",
        "secondary_type": "Ground",
        "evolution_stage": "Stage 2"
    },
    {
        "name": "Ponyta",
        "primary_type": "Fire",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Rapidash",
        "primary_type": "Fire",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Slowpoke",
        "primary_type": "Water",
        "secondary_type": "Psychic",
        "evolution_stage": "Basic"
    },
    {
        "name": "Slowbro",
        "primary_type": "Water",
        "secondary_type": "Psychic",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Magnemite",
        "primary_type": "Electric",
        "secondary_type": "Steel",
        "evolution_stage": "Basic"
    },
    {
        "name": "Magneton",
        "primary_type": "Electric",
        "secondary_type": "Steel",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Farfetch'd",
        "primary_type": "Normal",
        "secondary_type": "Flying",
        "evolution_stage": "Basic"
    },
    {
        "name": "Doduo",
        "primary_type": "Normal",
        "secondary_type": "Flying",
        "evolution_stage": "Basic"
    },
    {
        "name": "Dodrio",
        "primary_type": "Normal",
        "secondary_type": "Flying",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Seel",
        "primary_type": "Water",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Dewgong",
        "primary_type": "Water",
        "secondary_type": "Ice",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Grimer",
        "primary_type": "Poison",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Muk",
        "primary_type": "Poison",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Shellder",
        "primary_type": "Water",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Cloyster",
        "primary_type": "Water",
        "secondary_type": "Ice",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Gastly",
        "primary_type": "Ghost",
        "secondary_type": "Poison",
        "evolution_stage": "Basic"
    },
    {
        "name": "Haunter",
        "primary_type": "Ghost",
        "secondary_type": "Poison",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Gengar",
        "primary_type": "Ghost",
        "secondary_type": "Poison",
        "evolution_stage": "Stage 2"
    },
    {
        "name": "Onix",
        "primary_type": "Rock",
        "secondary_type": "Ground",
        "evolution_stage": "Basic"
    },
    {
        "name": "Drowzee",
        "primary_type": "Psychic",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Hypno",
        "primary_type": "Psychic",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Krabby",
        "primary_type": "Water",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Kingler",
        "primary_type": "Water",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Voltorb",
        "primary_type": "Electric",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Electrode",
        "primary_type": "Electric",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Exeggcute",
        "primary_type": "Grass",
        "secondary_type": "Psychic",
        "evolution_stage": "Basic"
    },
    {
        "name": "Exeggutor",
        "primary_type": "Grass",
        "secondary_type": "Psychic",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Cubone",
        "primary_type": "Ground",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Marowak",
        "primary_type": "Ground",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Hitmonlee",
        "primary_type": "Fighting",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Hitmonchan",
        "primary_type": "Fighting",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Lickitung",
        "primary_type": "Normal",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Koffing",
        "primary_type": "Poison",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Weezing",
        "primary_type": "Poison",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Rhyhorn",
        "primary_type": "Ground",
        "secondary_type": "Rock",
        "evolution_stage": "Basic"
    },
    {
        "name": "Rhydon",
        "primary_type": "Ground",
        "secondary_type": "Rock",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Chansey",
        "primary_type": "Normal",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Tangela",
        "primary_type": "Grass",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Kangaskhan",
        "primary_type": "Normal",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Horsea",
        "primary_type": "Water",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Seadra",
        "primary_type": "Water",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Goldeen",
        "primary_type": "Water",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Seaking",
        "primary_type": "Water",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Staryu",
        "primary_type": "Water",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Starmie",
        "primary_type": "Water",
        "secondary_type": "Psychic",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Mr. Mime",
        "primary_type": "Psychic",
        "secondary_type": "Fairy",
        "evolution_stage": "Basic"
    },
    {
        "name": "Scyther",
        "primary_type": "Bug",
        "secondary_type": "Flying",
        "evolution_stage": "Basic"
    },
    {
        "name": "Jynx",
        "primary_type": "Ice",
        "secondary_type": "Psychic",
        "evolution_stage": "Basic"
    },
    {
        "name": "Electabuzz",
        "primary_type": "Electric",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Magmar",
        "primary_type": "Fire",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Pinsir",
        "primary_type": "Bug",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Tauros",
        "primary_type": "Normal",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Magikarp",
        "primary_type": "Water",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Gyarados",
        "primary_type": "Water",
        "secondary_type": "Flying",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Lapras",
        "primary_type": "Water",
        "secondary_type": "Ice",
        "evolution_stage": "Basic"
    },
    {
        "name": "Ditto",
        "primary_type": "Normal",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Eevee",
        "primary_type": "Normal",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Vaporeon",
        "primary_type": "Water",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Jolteon",
        "primary_type": "Electric",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Flareon",
        "primary_type": "Fire",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Porygon",
        "primary_type": "Normal",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Omanyte",
        "primary_type": "Rock",
        "secondary_type": "Water",
        "evolution_stage": "Basic"
    },
    {
        "name": "Omastar",
        "primary_type": "Rock",
        "secondary_type": "Water",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Kabuto",
        "primary_type": "Rock",
        "secondary_type": "Water",
        "evolution_stage": "Basic"
    },
    {
        "name": "Kabutops",
        "primary_type": "Rock",
        "secondary_type": "Water",
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Aerodactyl",
        "primary_type": "Rock",
        "secondary_type": "Flying",
        "evolution_stage": "Basic"
    },
    {
        "name": "Snorlax",
        "primary_type": "Normal",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Articuno",
        "primary_type": "Ice",
        "secondary_type": "Flying",
        "evolution_stage": "Legendary"
    },
    {
        "name": "Zapdos",
        "primary_type": "Electric",
        "secondary_type": "Flying",
        "evolution_stage": "Legendary"
    },
    {
        "name": "Moltres",
        "primary_type": "Fire",
        "secondary_type": "Flying",
        "evolution_stage": "Legendary"
    },
    {
        "name": "Dratini",
        "primary_type": "Dragon",
        "secondary_type": null,
        "evolution_stage": "Basic"
    },
    {
        "name": "Dragonair",
        "primary_type": "Dragon",
        "secondary_type": null,
        "evolution_stage": "Stage 1"
    },
    {
        "name": "Dragonite",
        "primary_type": "Dragon",
        "secondary_type": "Flying",
        "evolution_stage": "Stage 2"
    },
    {
        "name": "Mewtwo",
        "primary_type": "Psychic",
        "secondary_type": null,
        "evolution_stage": "Legendary"
    },
    {
        "name": "Mew",
        "primary_type": "Psychic",
        "secondary_type": null,
        "evolution_stage": "Mythical"
    }
];

export const tipos_pokemon =[
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Steel",
    "Fairy"
  ];
  

  
  
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */