import React from "react";
import Landing from './pages/DesktopOne/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TermsAndConditions from "./pages/termsAndConditions/termsAndConditions";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route path="/terms" element={<TermsAndConditions/>} />
      </Routes>
    </Router>
  );
}

export default App;