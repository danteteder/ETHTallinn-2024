import { Button, Divider } from 'antd';

type BiometricAuthButtonProps = {
 currentURL: string   
}

const BiometricAuthButton = ({ currentURL }: BiometricAuthButtonProps) => {
    const userInfo = {
                id: new Uint8Array(16),
                name: 'username@example.com',
                displayName: 'John Doe', 
            };

    if(!window.PublicKeyCredential) {
        return null;
    }

     const handleSignIn = async () => {
        const storedCredential = localStorage.getItem('biometricCredential');

        try {
            if (storedCredential) {
                const credentialArray = JSON.parse(storedCredential);
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                const binaryCredential = new Uint8Array(credentialArray);
                const assertion = await navigator.credentials.get({
                 publicKey: {
                     rpId: currentURL.includes('localhost') ? 'localhost' : 'ethtallinn-forgetful',
                     challenge: new Uint8Array(16),
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
        try {
            
            const newCredential = await navigator.credentials.create({
                publicKey: {
                    rp: { name: 'ethTallinn' },
                    user: userInfo,
                    challenge: new Uint8Array(16),
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
        <>
        <Button onClick={handleSignUp}>Create Biometric Authenticator</Button>
        <Divider />
        <Button onClick={handleSignIn}>Sign in with Biometrics</Button>
        </>
    );
}

export default BiometricAuthButton;