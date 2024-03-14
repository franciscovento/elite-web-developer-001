import axios from "axios";
import { CharacterResponse } from "../interfaces/characters.interfaces";

const getCharacters = async () => {
  const response = await axios.get<CharacterResponse>("https://rickandmortyapi.com/api/character");
  return response.data;
}


export { 
  getCharacters,
}