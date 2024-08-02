"use-client";
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useCharacterContext } from '@/context/CharacterContext';

export function CharacterSearch() {
  const [name, setName] = useState<string>('');
  const { searchCharacters } = useCharacterContext();

  function handleSearch() {
    searchCharacters(name);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="border p-2 rounded-l"
        placeholder="Search characters"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-r">
        Search
      </button>
    </div>
  );
}
