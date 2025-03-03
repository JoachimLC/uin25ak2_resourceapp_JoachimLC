import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/html" element={<Resources category="html" />} />
          <Route path="/css" element={<Resources category="css" />} />
          <Route path="/javascript" element={<Resources category="javascript" />} />
          <Route path="/react" element={<Resources category="react" />} />
          <Route path="/headless-cms" element={<Resources category="headless-cms" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
