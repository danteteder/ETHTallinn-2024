import { FC } from "react";

import { Layout } from "antd";

const { Footer } = Layout;

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
        <div>
          Checkout our <a href="https://github.com/danteteder/ETHTallinn-2024" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{" "} for more information!


        </div>
    </Footer>
  );
};

export default CustomFooter;
