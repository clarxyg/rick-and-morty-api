"use client";

import React, { useEffect, useState } from "react";
import CharacterCard from "@/components/CharacterCard";
import { useCharacterContext } from "@/context/CharacterContext";
import CharacterLoader from "./CharacterLoader";

function CharacterList() {
  const { characters, isLoading } = useCharacterContext();
  const [showLoader, setShowLoader] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLoading) {
      setShowLoader(true);
      timer = setTimeout(() => {
        setShowLoader(true);
      }, 1000);
    } else {
      timer = setTimeout(() => {
        setShowLoader(false);
      }, 300);
    }

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <div className="mt-10">
    {showLoader ? (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <CharacterLoader key={index} />
        ))}
      </div>
    ) : (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    )}
  </div>
  );
}

export default CharacterList;
