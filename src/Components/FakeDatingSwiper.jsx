// FakeDatingSwiper.jsx – Used on Landing Page
import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight, Flame } from 'lucide-react';

const fakeProfiles = [
  { name: "Luna", age: 26, caption: "Vibin' with Solana sunsets 🌅", image: "/public/images/profile-luna.png" },
  { name: "Leo", age: 28, caption: "Builder by day, degen by night 🔥", image: "/public/images/leo-profile.png" },
  { name: "Mia", age: 26, caption: "Solana maxi looking for someone to HODL 💛", image: "/public/images/mia-profile.png" },
  { name: "Daniel", age: 29, caption: "I cook, trade, and swipe right on $HOT ❤️‍🔥", image: "/public/images/daniel-profile.png" },
];

export default function FakeDatingSwiper() {
  const [index, setIndex] = useState(0);
  const profile = fakeProfiles[index];

  const handleSwipe = (dir) => {
    setIndex((prev) => (dir === 'left'
      ? (prev > 0 ? prev - 1 : fakeProfiles.length - 1)
      : (prev < fakeProfiles.length - 1 ? prev + 1 : 0)
    ));
  };

  return (
    <div className="flex flex-col items-center">
      <Card className="max-w-xs w-full overflow-hidden shadow-xl">
        <img src={profile.image} alt={profile.name} className="w-full h-78 object-cover" />
      </Card>
      <div className="flex gap-4 mt-4">
        <Button variant="ghost" onClick={() => handleSwipe("left")}><ArrowLeft /></Button>
        <Button variant="default"><Flame /></Button>
        <Button variant="ghost" onClick={() => handleSwipe("right")}><ArrowRight /></Button>
      </div>
    </div>
  );
}
