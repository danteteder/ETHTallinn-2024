import { Buffer } from "buffer";
import { useState } from "react";
import { Layout, ConfigProvider, theme } from "antd";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "styles/App.css";
import CreateAccountPage from "./layout/sign-up";
import MainContent from "./layout/MainContent/MainContent";
import { CustomFooter, CustomHeader } from "./layout";

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
        <CustomHeader isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Router>
          <Routes>
            <Route path="/" element={<MainContent isDarkMode={isDarkMode} />} />
            <Route path="/create-password" element={<MainContent isDarkMode={isDarkMode} />} />
            <Route path="/sign-up" element={<CreateAccountPage isDarkMode={isDarkMode} />} />
          </Routes>
        </Router>
        <CustomFooter />
      </Layout>
    </ConfigProvider>
  );
}

export default App;