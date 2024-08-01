"use client";

import React from 'react';
import CharacterCard from '@/components/CharacterCard';
import { useCharacterContext } from '@/context/CharacterContext';

function CharacterList() {
  const { characters } = useCharacterContext();

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-10'>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterList;
