import { FC } from "react";
import { Button } from "@mui/material";

const styles = {
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch", 
    height: "100vh",
    overflow: "auto"
  },
  half: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", 
    padding: "50px"
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  
  }
} as const;

const MainContent: FC = () => {
  return (
    <>
      <div style={styles.center}><h1>Forgetful</h1></div>
      <div style={styles.content}>
        <div style={styles.half}>
          <h1>Title 1</h1>
          <div>Text underneath Title 1</div>
          <h1>Title 2</h1>
          <div>Text underneath Title 2</div>
        </div>
        <div style={styles.half}>
          <Button variant="contained" size="large">
            Create
          </Button>
          <Button variant="contained" size="large">
            Retrieve
          </Button>
        </div>
      </div>
    </>
  );
};

export default MainContent;