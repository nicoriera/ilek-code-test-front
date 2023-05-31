import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnvironmentSurveyPage from "./pages/EnvironmentSurveyPage/EnvironmentSurveyPage";
import MitigationSurveyPage from "./pages/MitigationSurveyPage/MitigationSurveyPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EnvironmentSurveyPage />} />
        <Route path="/mitigation-survey" element={<MitigationSurveyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
