import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
// import { getTokenBalance } from '../utils/tokenUtils'; // Disabled for override

// DEV WALLET BYPASS (still available if we revert)
const DEV_WALLET = '5V9V7Hrg1TjJQFgwHvvxCJq2vJyzevtfAps4DiS83bKT';
const MIN_HOT_REQUIRED = 1000;

export default function AccessGate({ children }) {
  const { publicKey, connected } = useWallet();
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ TEMP DEV OVERRIDE: Skip wallet/token logic entirely
    console.warn("🚧 Dev override active — skipping wallet/token check");
    setHasAccess(true);
    setLoading(false);
  }, []);

  if (loading) return <p className="text-center text-white">Checking access...</p>;

  return hasAccess ? (
    <>
      <div className="bg-yellow-400 text-black font-bold text-center py-2 mb-4">
        🚧 Dev Mode Enabled – Token check bypassed
      </div>
      {children}
    </>
  ) : (
    <div className="text-center text-white p-12">
      <h2 className="text-2xl font-bold mb-4">🚫 Access Denied</h2>
      <p>You need at least 1000 $HOT to enter the members-only lounge.</p>
    </div>
  );
}
