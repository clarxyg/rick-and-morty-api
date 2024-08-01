"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Character } from '@/types/ICharacter';
import { CharacterAPI } from '@/services/api';

interface CharacterContextProps {
  characters: Character[];
  isLoading: boolean;
  searchCharacters: (name: string) => Promise<void>;
}

const CharacterContext = createContext<CharacterContextProps | undefined>(undefined);

export function CharacterProvider({ children, api }: { children: ReactNode, api: CharacterAPI }) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function searchCharacters(name: string) {
    setIsLoading(true);
    try {
      const results = await api.getCharactersByName(name);
      setCharacters(results);
    } catch (error) {
      console.error("Error fetching characters: ", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CharacterContext.Provider value={{ characters, isLoading, searchCharacters }}>
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacterContext() {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error('useCharacterContext must be used within a CharacterProvider');
  }
  return context;
}
