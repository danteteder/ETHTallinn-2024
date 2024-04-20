import { Buffer } from "buffer";
import { useState } from "react";
import { Layout, ConfigProvider, theme } from "antd";
import { CustomHeader, MainContent, CustomFooter } from "layout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "styles/App.css";
import RetrievePassword from './components/RetrievePassword';
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
            <Route path="/create-password" element={<MainContent isDarkMode={isDarkMode} />} />
            <Route path="/retrieve-password" element={<RetrievePassword isDarkMode={isDarkMode} />} />
          </Routes>
        </Router>
        <CustomFooter />
      </Layout>
    </ConfigProvider>
  );
}

export default App;