import { FC } from "react";
import { Divider} from "@mui/material";
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
    },
        h1: {
      textAlign: "center",
    },
    div: {
      textAlign: "center",
    },
  } as const;

  return (
    <>
      <div style={styles.center}><h1>Forgetful<img src={forgetful_grandma} alt="Logo" width="120" height="102" /></h1></div>
      <div style={styles.content}>
        <div style={styles.half}>
          <div style={{...styles.div, marginBottom: '60px'}}>
            <h1 style={styles.h1} >Don't Worry, We All Forget</h1>
            <div style={styles.div}>Tired of forgetting passwords and seed phrases? <br/> It's like trying to find a Bitcoin in a haystack! <br/>But fear not, we've got the blockchain magic to fix that.</div>
          </div>
          <div style={{...styles.div, width: '70%' }}>
            <Divider sx={{ height: '2px', backgroundColor: isDarkMode ? 'white' : 'black' }} />
          </div>
          <h1 style={styles.h1}>What We Solve</h1>
          <div style={{...styles.div,width: '70%' }}>
            <Divider sx={{ height: '2px', backgroundColor: isDarkMode ? 'white' : 'black' }} />
          </div>
          <div style={{...styles.div, marginTop: '30px'}}>You know yourself, you will forget your password, but you'll never forget core things about yourself. We help you think ahead and forge a way to secure a password even if you've forgotten about it.
            
             </div>

          <h1 style={styles.h1}>How We Solve It</h1>
              <div style={{ width: '70%' }}>
            <Divider sx={{ height: '2px', backgroundColor: isDarkMode ? 'white' : 'black' }} />
          </div>
          <div style={{...styles.div, marginTop: '30px'}}>By combining biometric identification, self-assigned security questions (If you're feeling uncreative, AI will help), and blockchain encryptions</div>

          <h1 style={styles.h1}>Potential Usecase Flow</h1>
                    <div style={{ width: '70%' }}>
            <Divider sx={{ height: '2px', backgroundColor: isDarkMode ? 'white' : 'black' }} />
          </div>
          <div>INSERT POTENTIAL FLOW DIAGRAM</div>

        </div>
        <div style={styles.half}>
          <BiometricAuthButton currentURL={currentURL} styles={styles} isDarkMode={isDarkMode}/>
        </div>
      </div>
    </>
  );
};

export default MainContent;