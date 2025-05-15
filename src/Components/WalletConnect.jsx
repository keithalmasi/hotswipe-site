import React from 'react'

export default function WalletConnect({ onConnect }) {
  async function connectPhantom() {
    try {
      const resp = await window.solana.connect()
      onConnect(resp.publicKey.toString())
    } catch (err) {
      alert('Failed to connect Phantom wallet')
    }
  }

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <button onClick={connectPhantom} style={{ padding: '10px 20px', fontSize: 16 }}>
        Connect Phantom Wallet
      </button>
    </div>
  )
}
