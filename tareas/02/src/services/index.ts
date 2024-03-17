import axios from "axios";
import { CharacterResponse } from "../interfaces/characters.interfaces";

const getCharacters = async (url:string) => {
  const response = await axios.get<CharacterResponse>(url);
  return response.data;
}


export { 
  getCharacters,
}