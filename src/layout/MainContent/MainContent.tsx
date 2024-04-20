import { FC } from "react";
import { Button, Divider } from "@mui/material";
import forgetful_grandma from 'assets/images/forgetful_grandma.png';
import { Link } from 'react-router-dom';


interface MainContentProps {
  isDarkMode: boolean;
}

const MainContent: FC<MainContentProps> = ({ isDarkMode }) => {
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
          <div>Text underneath Title 1</div>
          <div style={{ width: '70%' }}>
            <Divider sx={{ height: '2px', backgroundColor: isDarkMode ? 'white' : 'black' }} />
          </div>
          <h1>Title 2</h1>
          <div>Text underneath Title 2</div>
          <div style={{ width: '70%' }}>
            <Divider sx={{ height: '2px', backgroundColor: isDarkMode ? 'white' : 'black' }} />
          </div>
        </div>
        <div style={styles.half}>
        <Link to="/create-password">
          <Button variant="contained" size="large" sx={{ fontFamily: "'IBM Plex Mono', monospace", margin: '20px', fontSize: '20px', fontWeight: 'bold', backgroundColor: '#0A9396' }}>
            Create Your Password
          </Button>
        </Link>
          <div style={{ width: '25%' }}>
            <Divider sx={{ height: '2px', backgroundColor: isDarkMode ? 'white' : 'black' }} />
          </div>
          <Button variant="contained" size="large" sx={{ fontFamily: "'IBM Plex Mono', monospace", margin: '20px', fontSize: '20px', fontWeight: 'bold',               backgroundColor: '#0A9396',
 }}>
            Retrieve Your Password
          </Button>
        </div>
      </div>
    </>
  );
};

export default MainContent;