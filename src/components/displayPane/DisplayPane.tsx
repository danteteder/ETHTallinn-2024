import { useWeb3React } from "@web3-react/core";
import { Divider } from "antd";
import { useWindowSize } from "hooks";
import { Infos, SignMessage, Status, TransferEth } from "./components";
import BiometricAuthButton from "./components/BiometricAuthButton";
import UserFormSignIn from "./components/UserForm";


const styles = {
  container: {
    width: "80%",
    minWidth: "330px",
    maxWidth: "900px",
    textAlign: "center",
    margin: "auto",
    padding: "20px 0",
    borderRadius: "10px",
    boxShadow: "0px 0px 30px 30px rgba(30, 136, 229, 0.2)"
  },
  content: {
    width: "85%",
    margin: "auto",
    fontSize: "17px"
  },
  action: {
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px"
  }
} as const;

type DisplayPaneProps = {
  isDarkMode: boolean;
};

const DisplayPane: React.FC<DisplayPaneProps> = ({ isDarkMode }) => {
  const currentURL = window.location.href
  const { chainId, isActivating, isActive } = useWeb3React();
  const { isTablet } = useWindowSize();
  
  return (
    <div
      style={{
        ...styles.container,
        border: isDarkMode ? "1px solid rgba(152, 161, 192, 0.24)" : "none",
        width: isTablet ? "90%" : "80%"
      }}
    >
      <div>Display Info</div>
      <div style={styles.content}>
        <Status isActivating={isActivating} isActive={isActive} />
        <Infos chainId={chainId} />

        <BiometricAuthButton currentURL={currentURL} />

        <UserFormSignIn />

        {isActive && (
          <>
            <Divider />
            <div style={styles.action}>
              <SignMessage />
              {!isTablet && <Divider type="vertical" style={{ fontSize: "120px !important" }} />}
              <TransferEth />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DisplayPane;
