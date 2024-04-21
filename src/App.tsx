import { Buffer } from "buffer";
import { useState } from "react";
import { Layout, ConfigProvider, theme } from "antd";
import { CustomHeader, MainContent, CustomFooter } from "layout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Phase3 from './components/Phase3';
import CreatePassword from "./components/CreatePassword";
import RetrievePassword from './components/RetrievePassword';
import ListOfQuestions from "./components/ListOfQuestions";
import CreateAccountPage from "layout/CreateAccount";

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
            <Route path="/retrieve-password" element={<RetrievePassword isDarkMode={isDarkMode} />} />
            <Route path="/create" element={<CreateAccountPage isDarkMode={isDarkMode} />} />
          </Routes>
        </Router>
        <CustomFooter />
      </Layout>
    </ConfigProvider>
  );
}

export default App;