/* eslint-disable @typescript-eslint/no-unsafe-return */

import { Box, Button, Container, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import BiometricAuthButton from "components/displayPane/components/BiometricAuthButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-unsafe-call */
interface CreateAccountPageProps {
  isDarkMode: boolean;
  currentURL: string;
  numberOfQuestions?: number;
}

const CreateAccountPage = ({ isDarkMode, currentURL }: CreateAccountPageProps) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [numberOfQuestions, setNumberOfQuestions] = useState<number | null>(null);
  const [minAnswers, setMinAnswers] = useState<number | null>(null);
  const storedCredential = localStorage.getItem('biometricCredential');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
    if (id === 'minAnswers') {
      setMinAnswers(parseInt(value, 10));
    }
  };

  const handleGenerateQuestions = () => {
    const amountOfQuestions = parseInt(formData['amountOfQuestions'], 10);
    if (!isNaN(amountOfQuestions)) {
      setNumberOfQuestions(amountOfQuestions);
    }
  };

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (minAnswers !== null && Object.values(formData).length >= minAnswers) {
    console.log(formData);
    navigate('/phase3')
  } else {
    console.log('Not enough answers provided');
  }
};
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  useEffect(() => {
    if (storedCredential?.length) {
      setFormData(prevData => ({
        ...prevData,
        storedCredential: storedCredential
      }));
    }
  }, [storedCredential]);

  const generateQuestionsContent = (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h6" sx={{ fontFamily: "'IBM Plex Mono', monospace", margin: '20px', fontSize: '20px', fontWeight: 'bold', backgroundColor: '#0A9396' }}>
        Amount of Questions to Generate
      </Typography>
      <TextField
        fullWidth
        id="amountOfQuestions"
        variant="outlined"
        onChange={handleChange}
        value={formData['amountOfQuestions'] || ''}
      />
      <Typography variant="h6" sx={{ fontFamily: "'IBM Plex Mono', monospace", margin: '20px', fontSize: '20px', fontWeight: 'bold', backgroundColor: '#0A9396' }}>
        Min. Answers Needed to Get Access to Passphrase
      </Typography>
      <TextField
        fullWidth
        id="minAnswers"
        variant="outlined"
        onChange={handleChange}
        value={formData['minAnswers'] || ''}
      />
      <Button variant="contained" color="primary" onClick={handleGenerateQuestions} sx={{ fontFamily: "'IBM Plex Mono', monospace", margin: '20px', fontSize: '20px', fontWeight: 'bold', backgroundColor: '#0A9396' }}>
        Generate Questions
      </Button>
    </Box>
  );

  
  const formContent = (
    <form onSubmit={handleSubmit}>
        <BiometricAuthButton currentURL={currentURL} method='signUp' />
      {[...Array(numberOfQuestions || 0)].map((_, index) => (
          <Box key={index} mb={2} display='flex' flexDirection='column' alignItems='center'>
          <TextField
            fullWidth
            id={`questionTitle_${index}`}
            variant="outlined"
            onChange={handleChange}
            value={formData[`questionTitle_${index}`] || `Question ${index + 1}`}
          />
          <TextField
            fullWidth
            id={`question_${index}`}
            variant="outlined"
            onChange={handleChange}
            value={formData[`question_${index}`] || ''}
          />
        </Box>
      ))}
      {storedCredential ? 
        <Button variant="contained" size="large" type="submit" sx={{ fontFamily: "'IBM Plex Mono', monospace", margin: '20px', fontSize: '20px', fontWeight: 'bold', backgroundColor: '#0A9396' }}>
          Submit
        </Button>
        : null
      }
    </form>
  );

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {numberOfQuestions === null ? generateQuestionsContent : formContent}
      </Container>
    </ThemeProvider>
  );
};

export default CreateAccountPage;