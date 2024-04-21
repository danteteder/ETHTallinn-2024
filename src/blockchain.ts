import { generateMnemonic } from 'bip39';

export const generateSeedPhrase = (): string => {
    const mnemonic = generateMnemonic(); // Generates a 128-bit entropy mnemonic (12 words)
    return mnemonic || '';
}