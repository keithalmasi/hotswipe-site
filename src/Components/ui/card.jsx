// src/Components/ui/card.jsx
import React from 'react';

export function Card({ children }) {
  return (
    <div className="bg-orange-100/10 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden max-w-xs w-full mx-auto border border-orange-300">
      {children}
    </div>
  );
}

export function CardContent({ image, name, age, onSwipeLeft, onSwipeRight }) {
  return (
    <div className="flex flex-col">
      <img
        src={image}
        alt={`${name}, ${age}`}
        className="w-full h-80 object-cover"
      />
      <div className="flex justify-between p-4">
        <button
          onClick={onSwipeLeft}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-full"
        >
          ❌ Not
        </button>
        <button
          onClick={onSwipeRight}
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full"
        >
          🔥 Hot
        </button>
      </div>
    </div>
  );
}
