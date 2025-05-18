import { Connection, PublicKey } from '@solana/web3.js';
import { getAssociatedTokenAddress, getAccount } from '@solana/spl-token';

const HOT_TOKEN_MINT = new PublicKey('3Ju63Z2fCnm3XEc3VWnZMcdiLgM45yJU1TTKRJkhpump');
const SOLANA_RPC = 'https://api.mainnet-beta.solana.com';

export async function getTokenBalance(walletPublicKey) {
  try {
    const connection = new Connection(SOLANA_RPC, 'confirmed');
    const ata = await getAssociatedTokenAddress(HOT_TOKEN_MINT, walletPublicKey);
    const accountInfo = await getAccount(connection, ata);
    const amount = Number(accountInfo.amount);
    return amount / 1e9; // HOT has 9 decimals
  } catch (err) {
    console.error('Error fetching HOT token balance:', err);
    return 0;
  }
}
