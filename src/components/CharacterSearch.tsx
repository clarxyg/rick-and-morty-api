'use client'
import React, { useState } from 'react';
import { useCharacterContext } from '@/context/CharacterContext';

function CharacterSearch() {
  const [name, setName] = useState('');
  const { searchCharacters } = useCharacterContext();

  function handleSearch() {
    searchCharacters(name);
  }

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded-l"
        placeholder="Search characters"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-r">
        Search
      </button>
    </div>
  );
}

export default CharacterSearch;
