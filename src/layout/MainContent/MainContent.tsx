import { FC } from "react";
import { Divider } from "@mui/material";
import forgetful_grandma from 'assets/images/forgetful_grandma.png';
import BiometricAuthButton from "../../components/displayPane/components/BiometricAuthButton";

interface MainContentProps {
  isDarkMode: boolean;
}

const MainContent: FC<MainContentProps> = ({ isDarkMode }) => {
  const currentURL = window.location.href

  const styles = {
    content: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "stretch", 
      height: "100vh",
      overflow: "auto",
      color: isDarkMode ? "white" : "black" 
    },
    half: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center", 
      padding: "50px",
      color: isDarkMode ? "white" : "black" 
    },
    center: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: isDarkMode ? "white" : "black" ,
      fontSize: '40px' 
    }
  } as const;

  return (
    <>
      <div style={styles.center}><h1>Forgetful<img src={forgetful_grandma} alt="Logo" width="120" height="102" /></h1></div>
      <div style={styles.content}>
        <div style={styles.half}>
          <h1>Title 0</h1>
          <div style={{ width: '70%' }}>
            <Divider sx={{ height: '2px', backgroundColor: isDarkMode ? 'white' : 'black' }} />
          </div>
          <h1>Title 1</h1>
                    <div style={{ width: '70%' }}>
            <Divider sx={{ height: '2px', backgroundColor: isDarkMode ? 'white' : 'black' }} />
          </div>
          <div>Text underneath Title 1</div>

          <h1>Title 2</h1>
                    <div style={{ width: '70%' }}>
            <Divider sx={{ height: '2px', backgroundColor: isDarkMode ? 'white' : 'black' }} />
          </div>
          <div>Text underneath Title 2</div>

        </div>
        <BiometricAuthButton currentURL={currentURL} styles={styles} isDarkMode={isDarkMode}/>
      </div>
    </>
  );
};

export default MainContent;