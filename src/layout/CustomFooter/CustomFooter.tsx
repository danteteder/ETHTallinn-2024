import { FC } from "react";

import { Layout, Typography } from "antd";

const { Footer } = Layout;
const { Text } = Typography;

const styles = {
  footer: {
    position: "fixed",
    textAlign: "center",
    width: "100%",
    bottom: "0",
    backgroundColor: "transparent"
  }
} as const;

const CustomFooter: FC = () => {
  return (
    <Footer style={styles.footer}>
      <Typography>
        <Text>
          Checkout our           <a href="https://github.com/danteteder/ETHTallinn-2024" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{" "} for more information!


        </Text>
      </Typography>
    </Footer>
  );
};

export default CustomFooter;
