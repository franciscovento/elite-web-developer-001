import { ApiResponse, Character } from '../types';
import { rickAndMortyApi } from '../utils/index';

const getCharacters = (params?:string) => {
  return rickAndMortyApi.get<ApiResponse<Character>>( `/character?${params ? params : ""}`);
}

export { 
  getCharacters,
}