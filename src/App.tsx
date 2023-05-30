import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import EnvironmentSurveyPage from "./pages/EnvironmentSurveyPage/EnvironmentSurveyPage";
import EnvironmentActionSurveyPage from "./pages/EnvironmentActionSurveyPage/EnvironmentActionSurveyPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/environment-survey" element={<EnvironmentSurveyPage />} />
        <Route
          path="/environment-action-survey"
          element={<EnvironmentActionSurveyPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
