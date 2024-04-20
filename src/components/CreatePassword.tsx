import { FC } from "react";
import CreatePasswordForm from "./CreatePasswordForm";

interface CreatePasswordProps {
  isDarkMode: boolean;
}

const CreatePassword: FC<CreatePasswordProps> = ({ isDarkMode }) => {
  return (
    <div>
      <h1>Create Your Password</h1>
      <CreatePasswordForm isDarkMode={isDarkMode} />
    </div>
  );
};

export default CreatePassword;