import { Character, Gender, Species, Status } from "../types";

export interface Filter {
  filter(characters: Character[]): Character[];
}

export class NoFilter implements Filter {
  constructor(){}
  filter(characters:Character[]):Character[]{
    return characters;
  }
}


export class GenderFilter implements Filter {
  constructor(public gender:Gender){}
  filter(characters:Character[]):Character[]{
    return characters.filter((char) => char.gender === this.gender )
  }
}

export class StatusFilter implements Filter {
  constructor(public status:Status){}
  filter(characters: Character[]): Character[] {
    return characters.filter((char) => char.status === this.status)
  }
}

export class SpeciesFilter implements Filter {
  constructor(public species: Species){}
  filter(characters: Character[]): Character[]{
    return characters.filter((char) => char.species === this.species)
  }
}

