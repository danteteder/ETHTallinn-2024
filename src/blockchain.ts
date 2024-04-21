import bip39 from 'bip39';

export const generateSeedPhrase = () => {
    const mnemonic = bip39.generateMnemonic(); // Generates a 128-bit entropy mnemonic (12 words)
    return mnemonic;
}
