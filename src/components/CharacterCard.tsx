"use client";
import React from "react";
import Image from "next/image";
import { ICharacter } from "@/interfaces/ICharacter";
import { getStatusColor } from "@/utils/getStatusColor";

interface CharacterCardProps {
  character: ICharacter;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className="flex items-center justify-center flex-col relative p-4">
      <div className="flex items-center justify-center flex-col w-full p-6 hover:scale-95 transition-transform duration-200 rounded-xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20">
        <Image src={character.image} alt={character.name} width={130} height={130} className="rounded-full" />
        <p className="mt-4 text-lg font-semibold">{character.name}</p>
        <p className="text-sm">{character.gender}</p>
        <p className="text-sm">{character.species}</p>
        <div className="flex items-center space-x-2 mt-2">
          <span className={`inline-block w-3 h-3 rounded-full ${getStatusColor(character.status)}`}></span>
          <p className="text-sm">{character.status}</p>
        </div>
      </div>
    </div>
  );
}

