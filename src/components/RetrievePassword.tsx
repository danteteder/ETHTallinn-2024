import { FC } from "react";
import RetrievePasswordForm from "./RetrievePasswordForm";

interface RetrievePasswordProps {
  isDarkMode: boolean;
}

const RetrievePassword: FC<RetrievePasswordProps> = ({ isDarkMode }) => {
  return (
    <div>
      <h1>Retrieve Your Password</h1>
      <RetrievePasswordForm isDarkMode={isDarkMode} />
    </div>
  );
};

export default RetrievePassword;