import forgetful_grandma from 'assets/images/forgetful_grandma.png';
import BiometricAuthButton from 'components/displayPane/components/BiometricAuthButton';


interface SuccessPageProps {
    currentURL: string;
    isDarkMode: boolean;
}

const GetAccount = ({isDarkMode, currentURL}: SuccessPageProps) => {

  const styles = {
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch", 
    height: "100vh",
    overflow: "auto",
    color: isDarkMode ? "white" : "black" 
  },
  textHalf: {
    flex: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", 
    padding: "50px",
    color: isDarkMode ? "white" : "black" 
  },
  buttonHalf: {
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
      fontSize: '25px' 
    },
        h1: {
      textAlign: "center",
    },
    div: {
          fontSize: '16px',

      textAlign: "center",
    },
  } as const;

    return (
        <div style={{...styles.center}}>
          <h1>Forgetful<img src={forgetful_grandma} alt="Logo" width="120" height="102" /></h1>
            <h3>You have requested to see your pass phrase, before that please verify yourself.</h3>
            <BiometricAuthButton currentURL={currentURL} method={'signIn'} />
        </div>
    )
}

export default GetAccount;