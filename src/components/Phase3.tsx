import { FC, useState, useCallback } from "react";
import { Button, TextField, IconButton, Box, Divider } from "@mui/material";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ConnectButton from "./Account/ConnectButton";
import metamask_Logo from 'assets/svg/metamask_Logo.svg';
import { metaMask, hooks as metaMaskhooks } from "connectors/metaMask";
import { getName } from "connectors/getConnectorName";
import { generateSeedPhrase } from "../blockchain";

interface Phase3Props {
  isDarkMode: boolean;
}

const { useIsActivating: useMMIsActivating } = metaMaskhooks;

const Phase3: FC<Phase3Props> = ({ isDarkMode }) => {
  const [password, setPassword] = useState({ name: '', value: '' });
  const [seedPhrase, setSeedPhrase] = useState('');
  const [showConnectButton, setShowConnectButton] = useState(false);
  const isMMActivating = useMMIsActivating();

  const handleCreatePassword = () => {
    setPassword({ name: '', value: '' });
  };

const handleCreateSeedPhrase = () => {
  const mnemonic = generateSeedPhrase();
  setSeedPhrase(mnemonic);
  setShowConnectButton(true);
};

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(seedPhrase);
  };

  const handleConnect = useCallback(async () => {
    try {
      await metaMask.activate();
      window.localStorage.setItem("connectorId", getName(metaMask));
    } catch (error) {
      console.error("Failed to connect wallet. Please try again.");
    }
  }, []);


  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' style={{ color: isDarkMode ? "white" : "black", padding: "80px" }}>
      {seedPhrase && (
        <div>
          <div style={{ color: isDarkMode ? "white" : "black", fontSize: '24px', textAlign: "center" }}>Seed Phrase</div>
          <TextField
            variant="outlined"
            value={seedPhrase}
            InputProps={{
              readOnly: true,
            }}
            sx={{ 
              '& .MuiOutlinedInput-root': { 
                '& fieldset': { borderColor: isDarkMode ? 'white' : 'black' }, 
                color: isDarkMode ? 'white' : 'black' 
              }, 
              '& .MuiOutlinedInput-inputMultiline': {
                minHeight: '100px',
              },
              width: '80%',
              padding: '20px' 
            }}
            multiline
          />
          <IconButton onClick={handleCopyToClipboard}>
            <FileCopyIcon color={isDarkMode ? 'inherit' : 'action'} />
          </IconButton>
{showConnectButton && (
  <ConnectButton
    label="Connect with MetaMask"
    image={metamask_Logo}
    onClick={handleConnect}
    loading={isMMActivating}
    isDarkMode={isDarkMode}
  />
)}

        </div>
      )}
      <Button variant="contained" size="large" onClick={handleCreateSeedPhrase} sx={{ fontFamily: "'IBM Plex Mono', monospace", margin: '20px', fontSize: '24px', fontWeight: 'bold', backgroundColor: '#0A9396' }}>
        Create New Seed Phrase
      </Button>
      <Divider sx={{ height: '2px', backgroundColor: isDarkMode ? 'white' : 'black', width: '25%', margin: '20px' }} />
      {password && (
        <div style={{ marginTop: '50px' }}>
          <div style={{ color: isDarkMode ? "white" : "black", fontSize: '14px', textAlign: "center" }}>Name of Password</div>
          <TextField
            variant="outlined"
            value={password.name}
            onChange={(e) => setPassword({ ...password, name: e.target.value })}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: isDarkMode ? 'white' : 'black' }, color: isDarkMode ? 'white' : 'black' }, padding: '10px' }}
          />
          <div style={{ color: isDarkMode ? "white" : "black", fontSize: '14px', textAlign: "center" }}>Password</div>
          <TextField
            variant="outlined"
            value={password.value}
            onChange={(e) => setPassword({ ...password, value: e.target.value })}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: isDarkMode ? 'white' : 'black' }, color: isDarkMode ? 'white' : 'black' }, padding: '10px' }}
          />
        </div>
      )}
      <Button variant="contained" size="large" onClick={handleCreatePassword} sx={{ fontFamily: "'IBM Plex Mono', monospace", margin: '20px', fontSize: '20px', fontWeight: 'bold', backgroundColor: '#0A9396' }}>
        Create Password
      </Button>
    </Box>
  );
};

export default Phase3;