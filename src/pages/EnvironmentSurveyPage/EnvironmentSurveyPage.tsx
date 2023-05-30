import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type Question = {
  id: number;
  question: string;
  answers: Answer[];
};

type Answer = {
  id: number;
  answer: string;
};

const EnvironmentSurveyPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState<number | null>(null); // null = pas de score
  const [answers, setAnswers] = useState<Answer[]>([]); // [] = pas de réponses

  useEffect(() => {
    fetch("/environment_questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
    console.log(questions);
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetch("/environment_answers", {
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
          <h1>Teste tes connaissances sur l'environnement</h1>
          <form onSubmit={handleSubmit}>
            <ol>
              {questions.map((question: Question) => (
                <li key={question.id}>
                  <h2>{question.question}</h2>
                  <label>
                    <input
                      type="radio"
                      name="q1"
                      value="1"
                      onChange={() => handleAnswerChange("q1", "1")}
                    />
                    {question.answers[0].answer}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q2"
                      value="2"
                      onChange={() => handleAnswerChange("q2", "2")}
                    />
                    {question.answers[1].answer}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q3"
                      value="3"
                      onChange={() => handleAnswerChange("q3", "3")}
                    />
                    {question.answers[2].answer}
                  </label>
                </li>
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
          <li>
            <Link to="/environment-action-survey">
              Teste tes connaissances sur les gestes éco-responsables
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default EnvironmentSurveyPage;
