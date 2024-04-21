/* eslint-disable @typescript-eslint/no-unsafe-return */

import { Box, Button, Container, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import BiometricAuthButton from "components/displayPane/components/BiometricAuthButton";
import { useEffect, useState } from "react";

/* eslint-disable @typescript-eslint/no-unsafe-call */
interface CreateAccountPageProps {
  isDarkMode: boolean;
  numberOfQuestions?: number;
}


const CreateAccountPage = ({ isDarkMode }: CreateAccountPageProps) => {
  const currentURL = window.location.href
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [numberOfQuestions, setNumberOfQuestions] = useState<number | null>(null);
  const storedCredential = localStorage.getItem('biometricCredential');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleGenerateQuestions = () => {
    const minAnswers = parseInt(formData['minAnswers'], 10);
    if (!isNaN(minAnswers)) {
      setNumberOfQuestions(minAnswers);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
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
        Min. Answers Needed
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
          <Typography variant="h6" sx={{ fontFamily: "'IBM Plex Mono', monospace", margin: '20px', fontSize: '20px', fontWeight: 'bold', backgroundColor: '#0A9396' }}>
            Question {index + 1}
          </Typography>
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