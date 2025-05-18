// HoldersPage.jsx – Protected Real Dating Swiper
import React from 'react';
import AccessGate from './AccessGate';
import RealDatingSwiper from './RealDatingSwiper';

export default function HoldersPage() {
  return (
    <AccessGate>
      <div className="min-h-screen bg-gradient-to-b from-orange-500 to-yellow-300 p-6 text-white">
        <h1 className="text-3xl font-bold text-center mb-8">🔥 Exclusive Access: Real Swipes</h1>
        <div className="flex justify-center">
          <RealDatingSwiper />
        </div>
      </div>
    </AccessGate>
  );
}
