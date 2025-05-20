// src/Components/FakeDatingSwiper.jsx
import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight, Flame } from 'lucide-react';

const fakeProfiles = [
  { name: "Luna", age: 26, caption: "Vibin' with Solana sunsets 🌅", image: "/images/luna-profile.png" },
  { name: "Leo", age: 28, caption: "Builder by day, degen by night 🔥", image: "/images/leo-profile.png" },
  { name: "Mia", age: 26, caption: "Solana maxi looking for someone to HODL 💛", image: "/images/mia-profile.png" },
  { name: "Daniel", age: 29, caption: "I cook, trade, and swipe right on $HOT ❤️‍🔥", image: "/images/daniel-profile.png" },
];

export default function FakeDatingSwiper() {
  const [index, setIndex] = useState(0);
  const profile = fakeProfiles[index];

  const handleSwipe = (dir) => {
    setIndex((prev) =>
      dir === 'left'
        ? prev > 0 ? prev - 1 : fakeProfiles.length - 1
        : prev < fakeProfiles.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <div className="flex flex-col items-center">
      <Card className="relative max-w-xs w-full overflow-hidden rounded-2xl border border-orange-300 shadow-xl bg-white/80 backdrop-blur">
        <img
          src={profile.image}
          alt={`${profile.name}, ${profile.age}`}
          className="w-full h-80 object-cover"
        />
        <div className="absolute bottom-0 w-full bg-black/50 text-white px-4 py-2">
          <h2 className="text-lg font-bold">{profile.name}, {profile.age}</h2>
          <p className="text-sm">{profile.caption}</p>
        </div>
      </Card>

      <div className="flex gap-6 mt-4">
        <Button variant="ghost" onClick={() => handleSwipe("left")}>
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </Button>
        <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
          <Flame className="w-6 h-6" />
        </Button>
        <Button variant="ghost" onClick={() => handleSwipe("right")}>
          <ArrowRight className="w-6 h-6 text-gray-700" />
        </Button>
      </div>
    </div>
  );
}
