import React from 'react';
import { ConnectButton } from '@solana/wallet-adapter-react-ui';

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 space-y-8">
      <header className="text-center space-y-4">
        <img src="/hotswipe-logo.png" alt="HotSwipe Logo" className="w-24 mx-auto" />
        <h1 className="text-5xl font-bold">Welcome to HotSwipe 🔥🔥</h1>
        <p className="text-lg max-w-xl mx-auto">
          The hottest Solana-based crypto dating experience.
        </p>
      </header>

      <section className="flex flex-col items-center space-y-6">
        <ConnectButton />
        <p className="text-sm max-w-xs text-center">
          Connect your Phantom Wallet holding at least 1000 Hotcoin tokens to access full features.
        </p>
      </section>

      <footer className="mt-auto pt-12 border-t border-white/20 w-full text-center space-y-4">
        <p>Follow us on <a href="https://x.com/hotcoinsol" target="_blank" rel="noreferrer" className="underline">X.com @hotcoinsol</a></p>
        <div className="space-x-4">
          <a href="https://twitter.com/intent/tweet?text=Check%20out%20HotSwipe%20-%20the%20hottest%20Solana%20crypto%20dating%20site!%20https://hotswipe.com" target="_blank" rel="noreferrer" className="underline">Share on Twitter</a>
          {/* Add more social links as needed */}
        </div>
      </footer>
    </main>
  );
}
