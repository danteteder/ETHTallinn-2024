import { Box, Divider, Button } from '@mui/material';
import { Link } from 'react-router-dom';

type BiometricAuthButtonProps = {
 currentURL: string,
 styles: {
    buttonHalf: any
 },
isDarkMode: any
}

const BiometricAuthButton = ({ currentURL, styles, isDarkMode }: BiometricAuthButtonProps) => {
    const userInfo = {
                id: new Uint8Array(16),
                name: 'ethTallinn@example.com',
                displayName: 'Big Black Wolf', 
            };

    if(!window.PublicKeyCredential) {
        return null;
    }

     const handleSignIn = async () => {
        const storedCredential = localStorage.getItem('biometricCredential');
        const domain = new URL(currentURL).hostname;

        const signInChallenge = new Uint8Array(16);
        window.crypto.getRandomValues(signInChallenge);

        try {
            if (storedCredential) {
                const credentialArray = JSON.parse(storedCredential);
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                const binaryCredential = new Uint8Array(credentialArray);
                const assertion = await navigator.credentials.get({
                 publicKey: {
                     rpId: currentURL.includes('localhost') ? 'localhost' : domain,
                     challenge: signInChallenge,
                     allowCredentials: [
                         {
                             type: 'public-key',
                             // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                             id: binaryCredential,
                             transports: ['internal'],
                         },
                     ],
                     timeout: 60000,
                     userVerification: 'required',
                 },
             });
             console.log('Biometric authentication successful:', assertion);
            }
         } catch (error) {
             console.error('Biometric authentication failed:', error);
         }
    };

    const handleSignUp = async () => {
        const signUpChallenge = new Uint8Array(16);
        window.crypto.getRandomValues(signUpChallenge);

        try {
            const newCredential = await navigator.credentials.create({
                publicKey: {
                    rp: { name: 'ethTallinn' },
                    user: userInfo,
                    challenge: signUpChallenge,
                    pubKeyCredParams: [
                        { type: 'public-key', alg: -7 },
                    ],
                    timeout: 60000,
                    authenticatorSelection: {
                        authenticatorAttachment: 'platform',
                        userVerification: 'required',
                    },
                    attestation: 'direct',
                }
            });

            if (newCredential) {
                // @ts-ignore
                // eslint-disable-next-line
                const credentialArray = Array.from(new Uint8Array(newCredential.rawId));

                localStorage.setItem('biometricCredential', JSON.stringify(credentialArray));
            }

            console.log('Biometric credential created successfully:', newCredential);
        } catch (error) {
            console.error('Biometric credential creation failed:', error);
        }
    }

    return (
        <Box display='flex' justifyContent='center'>
            <div style={styles.buttonHalf}>
                <Link to="/create-password">
                    <Button variant="contained" size="large" onClick={handleSignUp} sx={{ fontFamily: "'IBM Plex Mono', monospace", margin: '20px', fontSize: '20px', fontWeight: 'bold', backgroundColor: '#0A9396' }}>
                      Create Your Password
                    </Button>
                </Link>
                    <div style={{ width: '25%' }}>
                      <Divider sx={{ height: '2px', backgroundColor: isDarkMode ? 'white' : 'black' }} />
                    </div>
                    <Link to="/retrieve-password">
                <Button variant="contained" size="large" onClick={handleSignIn} sx={{ fontFamily: "'IBM Plex Mono', monospace", margin: '20px', fontSize: '20px', fontWeight: 'bold', backgroundColor: '#0A9396'}}>
                  Retrieve Your Password
                </Button>
                </Link>
            </div>
        </Box>
    );
}

export default BiometricAuthButton;