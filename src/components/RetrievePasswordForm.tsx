import { FC } from "react";
import { TextField } from "@mui/material";

interface RetrievePasswordFormProps {
  isDarkMode: boolean;
}

const RetrievePasswordForm: FC<RetrievePasswordFormProps> = ({ isDarkMode }) => {
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

export default RetrievePasswordForm;