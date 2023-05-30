import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuestionComponent from "../../components/QuestionComponent/QuestionComponent";

type Question = {
  id: number;
  question: string;
  answers: Answer[];
};

type Answer = {
  id: number;
  answer: string;
};

const EnvironmentHelpSurveyPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState<number | null>(null); // null = pas de score
  const [answers, setAnswers] = useState<Answer[]>([]); // [] = pas de réponses

  useEffect(() => {
    fetch("/mitigation_questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetch("/mitigation_answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answers),
    })
      .then((response) => response.json())
      .then((data) => setScore(data.score))
      .catch((error) => console.error(error));
  };

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers((prevAnswars) => ({
      ...prevAnswars,
      [questionId]: answer,
    }));
  };

  return (
    <>
      <div className="App">
        <div>
          <h1>
            Teste tes connaissances sur les actions pour aider l'environnement
          </h1>
          <form onSubmit={handleSubmit}>
            <ol>
              {questions.map((question: Question) => (
                <QuestionComponent
                  key={question.id}
                  question={question}
                  onChange={(answer: string) =>
                    handleAnswerChange(`question-${question.id}`, answer)
                  }
                />
              ))}
            </ol>
            <button type="submit">Soumettre</button>
          </form>
          {score !== null && <p> Tu as obtenu {score} points</p>}
        </div>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Retour à l'accueil</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default EnvironmentHelpSurveyPage;
