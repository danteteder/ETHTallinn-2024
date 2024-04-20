import { FC } from "react";
import { TextField } from "@mui/material";

interface CreatePasswordFormProps {
  isDarkMode: boolean;
}

const CreatePasswordForm: FC<CreatePasswordFormProps> = ({ isDarkMode }) => {
  const styles = {
    form: {
      color: isDarkMode ? "white" : "black"
    }
  };

  return (
    <div style={styles.form}>
      <TextField label="Email" variant="outlined" />
      {/* Add more form fields as needed */}
    </div>
  );
};

export default CreatePasswordForm;