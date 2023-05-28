import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [questions, setQuestions]: [any, any] = useState();

  useEffect(() => {
    fetch("/environment_questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  return (
    <div className="App">
      <h1>Teste tes connaissances</h1>
      <p>{JSON.stringify(questions)}</p>
    </div>
  );
}

export default App;
