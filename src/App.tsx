import { Buffer } from "buffer";
import { useState } from "react";
import { Layout, ConfigProvider, theme } from "antd";
import { CustomHeader, MainContent } from "layout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Phase3 from './components/Phase3';
import CreatePassword from "./components/CreatePassword";
import ListOfQuestions from "./components/ListOfQuestions";
import CreateAccountPage from "layout/CreateAccount";
import SuccessPage from "layout/Success";
import GetAccount from "layout/GetAccount";

const styles = {
  layout: {
    width: "100vw",
    height: "100vh",
    overflow: "auto",
    fontFamily: "IBM Plex Mono, monospace"
  }
} as const;

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(true);
  const currentURL = window.location.href;

  if (!window.Buffer) window.Buffer = Buffer;
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm
      }}
    >
      <Layout style={styles.layout}>
        <Router>
          <CustomHeader isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Routes>
            <Route path="/" element={<MainContent isDarkMode={isDarkMode} />} />
            <Route path="/list-of-questions" element={<ListOfQuestions isDarkMode={isDarkMode} />} />
            <Route path="/phase3" element={<Phase3 isDarkMode={isDarkMode} />} />
            <Route path="/create-password" element={<CreatePassword isDarkMode={isDarkMode} />} />
            <Route path="/retrieve-password" element={<GetAccount isDarkMode={isDarkMode} currentURL={currentURL} />} />
            <Route path="/create" element={<CreateAccountPage isDarkMode={isDarkMode} currentURL={currentURL} />} />
            <Route path="/success" element={<SuccessPage isDarkMode={isDarkMode} />} />
            <Route path="/verified" element={<SuccessPage isDarkMode={isDarkMode} />} />
          </Routes>
        </Router>
      </Layout>
    </ConfigProvider>
  );
}

export default App;