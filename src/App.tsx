import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import EnvironmentSurveyPage from "./pages/EnvironmentSurveyPage/EnvironmentSurveyPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/environment-survey" element={<EnvironmentSurveyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
