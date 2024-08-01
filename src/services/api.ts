import axios from 'axios';
import { Character } from '@/types/ICharacter';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export interface CharacterAPI {
  getCharactersByName(name: string): Promise<Character[]>;
}

class RickAndMortyAPI implements CharacterAPI {
  getCharactersByName(name: string): Promise<Character[]> {
    return api.get(`/character/?name=${name}`).then((response) => {
      return response.data.results;
    }).catch((error) => {
      console.error("Error fetching characters: ", error);
      throw error;
    });
  }
}

export const characterAPI = new RickAndMortyAPI();
