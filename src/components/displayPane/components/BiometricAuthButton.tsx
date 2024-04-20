import { Button } from 'antd';

const BiometricAuthButton = () => {

    const userInfo = {
                id: new Uint8Array(16),
                name: 'username@example.com',
                displayName: 'John Doe', 
            };
            
    if(!window.PublicKeyCredential) {
        return null;
    }

    const handleClick = async () => {
        try {
            
            const newCredential = await navigator.credentials.create({
                publicKey: {
                    rp: { name: 'Your Website Name' },
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
            console.log('Biometric credential created successfully:', newCredential);
        } catch (error) {
            console.error('Biometric credential creation failed:', error);
        }
    }

    return (
        <Button onClick={handleClick}>Create Biometric Authenticator</Button>
    );
}

export default BiometricAuthButton;