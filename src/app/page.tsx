"use client";
import React from "react";
import { CharacterProvider } from "@/context/CharacterContext";
import { characterAPI } from "@/services/getCharacter";
import { CharacterSearch } from "@/components/CharacterSearch";
import { CharacterList } from "@/components/CharacterList";

export default function Home() {
  return (
    <CharacterProvider api={characterAPI}>
      <div className="container mx-auto p-4 w-full">
        <h1 className="text-2xl font-bold mb-4">Rick and Morty Characters</h1>
        <CharacterSearch />
        <CharacterList />
      </div>
    </CharacterProvider>
  );
}
