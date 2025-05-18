// ProfileCard.jsx – Overlay gamer-style text on image
import React from 'react';

export default function ProfileCard({ image, name, age, bio, username, onSwipeLeft, onSwipeRight }) {
  return (
    <div className="relative max-w-xs w-full rounded-2xl overflow-hidden shadow-2xl border border-orange-400">
      <img src={image} alt={`${name}, ${age}`} className="w-full h-96 object-cover" />
      <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-3 font-mono text-sm leading-tight">
        <div className="text-lg font-bold">{name}, {age}</div>
        <div className="italic opacity-80">{bio}</div>
        <div className="text-xs mt-1">@{username}</div>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button onClick={onSwipeLeft} className="bg-gray-700 text-white px-4 py-2 rounded-full text-xs">Not ❌</button>
        <button onClick={onSwipeRight} className="bg-orange-500 text-white px-4 py-2 rounded-full text-xs">Hot 🔥</button>
      </div>
    </div>
  );
}
