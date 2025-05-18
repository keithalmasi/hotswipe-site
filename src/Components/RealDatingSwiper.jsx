// RealDatingSwiper.jsx – For verified $HOT holders
import React, { useState, useEffect } from 'react';
import ProfileCard from './ui/ProfileCard';

const RealDatingSwiper = () => {
  const [profiles, setProfiles] = useState([]);
  const [index, setIndex] = useState(0);

  // Mocked for now; replace with Supabase/Firebase fetch later
  useEffect(() => {
    setProfiles([
      {
        id: 1,
        username: 'cryptoqueen',
        name: 'Eva',
        age: 27,
        bio: 'Web3 artist & gamer girl 🎮',
        image: '/public/images/profile-luna.png',
      },
      {
        id: 2,
        username: 'tokentitan',
        name: 'Jay',
        age: 30,
        bio: 'Let’s beat you at chess, then split an NFT 🍷',
        image: '/public/images/leo-profile.png',
      },
    ]);
  }, []);

  const profile = profiles[index];

  const handleSwipe = (dir) => {
    setIndex((prev) =>
      dir === 'left'
        ? (prev > 0 ? prev - 1 : profiles.length - 1)
        : (prev < profiles.length - 1 ? prev + 1 : 0)
    );
  };

  return profile ? (
    <ProfileCard
      image={profile.image}
      name={profile.name}
      age={profile.age}
      bio={profile.bio}
      username={profile.username}
      onSwipeLeft={() => handleSwipe("left")}
      onSwipeRight={() => handleSwipe("right")}
    />
  ) : <p>Loading...</p>;
};

export default RealDatingSwiper;
