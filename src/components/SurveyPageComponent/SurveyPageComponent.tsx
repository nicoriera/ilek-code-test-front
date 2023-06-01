import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuestionComponent from "../../components/QuestionComponent/QuestionComponent";
import ButtonSubmitComponent from "../../components/ButtonSubmitComponent/ButtonSubmitComponent";

type Question = {
  id: number;
  question: string;
  answers: Answer[];
};

type Answer = {
  id: number;
  answer: string;
};

type SurveyPageProps = {
  questionsEndpoint: string;
  answersEndpoint: string;
  pageTitle: string;
  link: string;
  textLink: string;
};

const SurveyPageComponent = ({
  questionsEndpoint,
  answersEndpoint,
  pageTitle,
  link,
  textLink,
}: SurveyPageProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch(questionsEndpoint)
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error(error));
  }, [questionsEndpoint]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetch(answersEndpoint, {
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

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prevAnswers: Record<string, string>) => ({
      ...prevAnswers,
      [`question-${questionId}`]: answer,
    }));
  };

  return (
    <div className="container-test">
      <div>
        <div>
          <h1>{pageTitle}</h1>
          <form onSubmit={handleSubmit}>
            <ol>
              {questions.map((question: Question) => (
                <QuestionComponent
                  key={question.id}
                  question={question}
                  onChange={(answer: string) =>
                    handleAnswerChange(question.id, answer)
                  }
                />
              ))}
            </ol>
            <div className="button-show-score">
              <ButtonSubmitComponent />
              <div className="score">
                {score !== null && <p> Tu as obtenu {score} points</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <Link to={link}>{textLink}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SurveyPageComponent;
