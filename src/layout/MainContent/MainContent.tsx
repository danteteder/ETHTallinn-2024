import { FC } from "react";
// import { useWindowSize } from "hooks";
import { Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

const styles = {
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: "100px",
    padding: "50px",
    overflow: "auto"
  },
  leftHalf: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // align to the left
    justifyContent: "center"
  },
  rightHalf: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end", // align to the right
    justifyContent: "center"
  }
} as const;

const MainContent: FC = () => {

  return (
    <div>
      <div style={styles.leftHalf}>
        <Title level={2}>Title 1</Title>
        <Paragraph>Text underneath Title 1</Paragraph>
        <Title level={2}>Title 2</Title>
        <Paragraph>Text underneath Title 2</Paragraph>
      </div>
      <div style={styles.rightHalf}>
        <Button type="primary" size="large">Create</Button>
        <Button type="primary" size="large">Retrieve</Button>
      </div>
    </div>
  );
};

export default MainContent;