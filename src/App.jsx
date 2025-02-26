import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";
// Import other page components (e.g., Home, About) if needed

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Dynamic route that captures the category slug */}
          <Route path="/category/:slug" element={<Resources />} />
          {/* Additional routes can be added here */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
