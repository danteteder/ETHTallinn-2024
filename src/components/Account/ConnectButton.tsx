import { FC } from "react";
import { Button } from "antd";

const styles = {
  connectButton: (isDarkMode) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    paddingBlock: "20px",
    marginBottom: "12px",
    boxShadow: "0 4px 4px rgba(0,0,0,.25),0 0 5px rgba(0,0,0,.25),inset 0 0 10px #fff",
    border: "none",
    borderRadius: "10px",
    color: isDarkMode ? "white" : "black",
    backgroundColor: isDarkMode ? "black" : "white",
    fontFamily: "'IBM Plex Mono', monospace"
  }),
  connectButtonText: {
    fontWeight: "600",
    paddingLeft: "30px"
  }
};

interface ConnectButtonProps {
  label: string;
  image: string;
  onClick: () => void;
  loading: boolean;
  isDarkMode: boolean;
}

const ConnectButton: FC<ConnectButtonProps> = ({ label, image, onClick, loading, isDarkMode }) => {
  return (
    <Button
      ghost
      className="connector-button"
      style={styles.connectButton(isDarkMode)}
      key={label}
      onClick={onClick}
      loading={loading}
    >
      <div style={styles.connectButtonText}>{label}</div>
      <img src={image} width={32} height={32} alt="web3-wallet" />
    </Button>
  );
};

export default ConnectButton;