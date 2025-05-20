// src/Components/LandingPage.jsx
import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import DatingSwiper from './FakeDatingSwiper';
import '@solana/wallet-adapter-react-ui/styles.css';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-orange-400 to-yellow-300 text-white overflow-hidden">

      {/* ✅ Wallet Button: Top-Right on Desktop */}
      <div className="hidden md:block fixed top-6 right-6 z-50">
        <WalletMultiButton className="!m-0" />
        <p className="text-xs text-white/70 mt-1">Click "Select Wallet" if stuck.</p>
      </div>

      {/* ✅ Mobile Wallet Button (centered) */}
      <div className="block md:hidden mt-6 text-center">
        <WalletMultiButton />
      </div>

      {/* ✅ Page Content */}
      <div className="flex flex-col items-center px-6 pt-8 pb-16 text-center max-w-5xl mx-auto">

        {/* Logo + Title */}
        <div className="flex items-center space-x-4 mb-8">
          <img src="/logo.png" alt="HotSwipe Logo" className="w-16 h-16 drop-shadow-lg" />
          <h1 className="text-5xl font-extrabold drop-shadow-lg">HotSwipe</h1>
        </div>

        {/* Access Notice */}
        <h2 className="text-xl font-bold mb-6 drop-shadow-md">
          1000 $HOT TO LINK!
        </h2>

        {/* Swiper Preview */}
        <div className="w-full max-w-md mb-10">
          <DatingSwiper />
        </div>

        {/* Holders Lounge CTA */}
        <a
          href="/holders"
          className="mb-10 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-md transition"
        >
          🔐 Enter Holders' Lounge
        </a>

        {/* Tokenomics */}
        <section className="bg-white bg-opacity-10 rounded-2xl p-6 w-full max-w-2xl mb-10 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">🔥 Tokenomics</h2>
          <ul className="text-lg space-y-2">
            <li>• 1 Billion Total Supply</li>
            <li>• 100% Liquidity Burned</li>
            <li>• Ownership Renounced</li>
            <li>• Fair Launch on Pump.fun</li>
          </ul>
        </section>

        {/* Contract Address */}
        <div className="mt-2 mb-6 text-sm text-white/80">
          CA: <span className="font-mono text-white">3Ju63Z2fCnm3XEc3VWnZMcdiLgM45yJU1TTKRJkhpump</span>
        </div>

        {/* Buy Button */}
        <a
          href="https://pump.fun/coin/3Ju63Z2fCnm3XEc3VWnZMcdiLgM45yJU1TTKRJkhpump"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-orange-500 font-bold py-3 px-6 rounded-full text-lg shadow-md hover:bg-orange-100 transition mb-12"
        >
          🚀 Buy $HOT
        </a>

        {/* Footer Links */}
        <footer className="flex flex-wrap justify-center gap-6 text-xl">
          <a href="https://twitter.com/hotcoinsol" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition">🐦 Twitter</a>
          <a href="https://t.me/hotcoincabal" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition">📢 Telegram</a>
          <a href="mailto:team@hotswipe.com" className="hover:text-yellow-200 transition">✉️ Email</a>
        </footer>
      </div>
    </div>
  );
}
