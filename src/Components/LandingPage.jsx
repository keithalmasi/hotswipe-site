// src/Components/LandingPage.jsx
import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import DatingSwiper from './FakeDatingSwiper';
import '@solana/wallet-adapter-react-ui/styles.css';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-orange-400 to-yellow-300 text-white overflow-hidden">

      {/* ✅ Wallet Button: Top-Right on Desktop (with custom override class) */}
      <div className="wallet-top-right block">
        <WalletMultiButton /> <p className="text-sm mt-2 text-white/70">
  If stuck, click "Select Wallet" above to reconnect.
</p>

      </div>

      {/* ✅ Mobile Wallet Button (centered) */}
      <div className="md:hidden mt-6 mb-4 text-center">
  <WalletMultiButton />
</div>

      {/* ✅ Page Content */}
      <div className="flex flex-col items-center px-6 pt-8 pb-12 text-center max-w-5xl mx-auto">

        <div className="flex items-center space-x-4 mb-8">
  <img src="/logo.png" alt="HotSwipe Logo" className="w-16 h-16 drop-shadow-lg" />
  <h1 className="text-5xl font-extrabold drop-shadow-lg">HotSwipe</h1>
</div>


        {/* Access Notice */}
        <h2 className="text-xl font-bold mb-8 drop-shadow-md">
          1000 $HOT TO LINK!
        </h2>

        {/* Dating Preview */}
        <div className="w-full max-w-md mt-2 mb-12">
  <DatingSwiper />
        </div>
<a
  href="/holders"
  className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-md transition"
>
  🔐 Enter Holders' Lounge
</a>

        {/* Tokenomics */}
        <section className="bg-white bg-opacity-10 rounded-2xl p-6 w-full max-w-2xl mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">🔥 Tokenomics</h2>
          <ul className="text-lg space-y-2">
            <li>• 1 Billion Total Supply</li>
            <li>• 100% Liquidity Burned</li>
            <li>• Ownership Renounced</li>
            <li>• Fair Launch on Pump.fun</li>
          </ul>
        </section>

        {/* Contract Address */}
        <div className="mt-4 mb-6 text-sm text-white/70">
          CA: <span className="font-mono text-white">3Ju63Z2fCnm3XEc3VWnZMcdiLgM45yJU1TTKRJkhpump</span>
        </div>

        {/* Buy Button */}
        <a
          href="https://pump.fun"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-orange-500 font-bold py-3 px-6 rounded-full text-lg shadow-md hover:bg-orange-100 transition mb-8"
        >
          🚀 Buy $HOT
        </a>

        {/* Footer Links */}
        <footer className="flex space-x-6 text-xl">
          <a href="https://twitter.com/yourproject" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition">🐦 Twitter</a>
          <a href="https://t.me/yourproject" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition">📢 Telegram</a>
          <a href="mailto:team@hotswipe.com" className="hover:text-yellow-200 transition">✉️ Email</a>
        </footer>
      </div>
    </div>
  );
}
