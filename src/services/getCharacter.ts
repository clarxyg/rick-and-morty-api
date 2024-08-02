import axios from 'axios';
import { ICharacter } from '@/types/ICharacter';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export interface CharacterAPI {
  getCharactersByName(name: string): Promise<ICharacter[]>;
}

class RickAndMortyAPI implements CharacterAPI {
  getCharactersByName(name: string): Promise<ICharacter[]> {
    return api.get(`/character/?name=${name}`).then((response) => {
      return response.data.results;
    }).catch((error) => {
      console.error("Error fetching characters: ", error);
      throw error;
    });
  }
}

export const characterAPI = new RickAndMortyAPI();
