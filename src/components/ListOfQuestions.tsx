import { FC, useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";

interface ListOfQuestionsProps {
  isDarkMode: boolean;
}

const ListOfQuestions: FC<ListOfQuestionsProps> = ({ isDarkMode }) => {
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    // Replace this with the actual function to generate questions from the hash
    const generateQuestionsFromHash = () => {
      return ["Question 1", "Question 2", "Question 3"];
    };

    const questions = generateQuestionsFromHash();
    setQuestions(questions);
    setAnswers(new Array(questions.length).fill(""));
  }, []);

  const handleAnswerChange = (index: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    // Replace this with the actual function to check the answers
    const checkAnswers = (answers: string[]) => {
      console.log("Checking answers", answers);
    };

    checkAnswers(answers);
  };

  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' style={{ color: isDarkMode ? "white" : "black", padding: "80px" }}>
      <h1>List of Questions</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <div>{question}</div>
          <TextField
            variant="outlined"
            value={answers[index]}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
            style={{ margin: "10px 0" }}
          />
        </div>
      ))}
      <Button variant="contained" size="large" onClick={handleSubmit} style={{ backgroundColor: '#0A9396', fontFamily: "'IBM Plex Mono', monospace", fontSize: '20px', fontWeight: 'bold' }}>
        Get My Password
      </Button>
    </Box>
  );
};

export default ListOfQuestions;