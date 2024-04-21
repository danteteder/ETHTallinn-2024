import { FC, useState } from "react";
import { Button, TextField, IconButton, Box, Divider } from "@mui/material";
import FileCopyIcon from '@mui/icons-material/FileCopy';

interface Phase3Props {
  isDarkMode: boolean;
}

const Phase3: FC<Phase3Props> = ({ isDarkMode }) => {
  const [password, setPassword] = useState({ name: '', value: '' });
  const [seedPhrase, setSeedPhrase] = useState('');

  const handleCreatePassword = () => {
    setPassword({ name: '', value: '' });
  };

  const handleCreateSeedPhrase = () => {
    const words = ['word1', 'word2', 'word3', 'word4', 'word5', 'word6', 'word7', 'word8', 'word9', 'word10', 'word11', 'word12']; // Replace with actual random words
    setSeedPhrase(words.join(' '));
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(seedPhrase);
  };

  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' style={{ color: isDarkMode ? "white" : "black", padding: "80px" }}>
      {seedPhrase && (
        <div>
          <div style={{ color: isDarkMode ? "white" : "black", fontSize: '18px', textAlign: "center" }}>Seed Phrase</div>
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
        </div>
      )}
      <Button variant="contained" size="large" onClick={handleCreateSeedPhrase} sx={{ fontFamily: "'IBM Plex Mono', monospace", margin: '20px', fontSize: '20px', fontWeight: 'bold', backgroundColor: '#0A9396' }}>
        Create New Seed Phrase
      </Button>
      <Divider sx={{ height: '2px', backgroundColor: isDarkMode ? 'white' : 'black', width: '25%', margin: '20px' }} />
      {password && (
        <div>
          <div style={{ color: isDarkMode ? "white" : "black", fontSize: '18px', textAlign: "center" }}>Name of Password</div>
          <TextField
            variant="outlined"
            value={password.name}
            onChange={(e) => setPassword({ ...password, name: e.target.value })}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: isDarkMode ? 'white' : 'black' }, color: isDarkMode ? 'white' : 'black' }, padding: '20px' }}
          />
          <div style={{ color: isDarkMode ? "white" : "black", fontSize: '18px', textAlign: "center" }}>Password</div>
          <TextField
            variant="outlined"
            value={password.value}
            onChange={(e) => setPassword({ ...password, value: e.target.value })}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: isDarkMode ? 'white' : 'black' }, color: isDarkMode ? 'white' : 'black' }, padding: '20px' }}
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