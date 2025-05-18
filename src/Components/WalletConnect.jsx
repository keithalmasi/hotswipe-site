import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const WalletConnect = () => {
  return (
    <div className="flex justify-center mt-6">
      <WalletMultiButton />
    </div>
  );
};

export default WalletConnect;

