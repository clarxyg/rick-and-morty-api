"use client"
import React from 'react';

export function CharacterLoader() {
  return (
    <div className="flex items-center justify-center flex-col p-4 w-full max-w-xs mx-auto animate-pulse">
    <div className="bg-gray-300 w-32 h-32 rounded-full mb-4"></div>
    <div className="bg-gray-300 w-3/4 h-4 rounded mb-2"></div>
    <div className="bg-gray-300 w-2/4 h-4 rounded mb-2"></div>
    <div className="bg-gray-300 w-2/4 h-4 rounded"></div>
  </div>
  );
}

