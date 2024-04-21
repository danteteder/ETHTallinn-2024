import { FC, useState } from "react";
import { TextField, Button } from "@mui/material";

interface CreatePasswordProps {
  isDarkMode: boolean;
}

const CreatePassword: FC<CreatePasswordProps> = ({ isDarkMode }) => {
  const [questions, setQuestions] = useState(['']);
  const [answers, setAnswers] = useState(['']);
  const [minAnswers, setMinAnswers] = useState(1);

  const handleQuestionChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuestions = [...questions];
    newQuestions[index] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleMinAnswersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinAnswers(Number(event.target.value));
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, '']);
    setAnswers([...answers, '']);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(questions, answers, minAnswers);
  };

  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: isDarkMode ? "white" : "black",
      padding: "50px",
    },
    textField: {
      marginBottom: "20px",
      fontSize: '18px',
    },
    button: {
      width: "100%",
      marginBottom: "20px",
    },
    questionAnswer: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
  } as const;

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      {questions.map((question, index) => (
        <div style={styles.questionAnswer} key={index}>
          <TextField
            style={styles.textField}
            label={`Question ${index + 1}`}
            variant="outlined"
            value={question}
            onChange={handleQuestionChange(index)}
          />
          <TextField
            style={styles.textField}
            label={`Answer ${index + 1}`}
            variant="outlined"
            value={answers[index]}
            onChange={handleAnswerChange(index)}
          />
        </div>
      ))}
      <Button style={styles.button} variant="contained" onClick={handleAddQuestion}>
        Add Question
      </Button>
      <TextField
        style={styles.textField}
        label="Minimum Needed Answers"
        variant="outlined"
        type="number"
        value={minAnswers}
        onChange={handleMinAnswersChange}
      />
      <Button style={styles.button} variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default CreatePassword;