import React from "react";

type Question = {
  id: number;
  question: string;
  answers: Answer[];
};

type Answer = {
  id: number;
  answer: string;
};

type QuestionComponentProps = {
  question: Question;
  onChange: (answer: string) => void;
};

const QuestionComponent: React.FC<QuestionComponentProps> = ({
  question,
  onChange,
}) => {
  return (
    <li>
      <h2>{question.question}</h2>
      {question.answers.map((answer: Answer) => (
        <label key={answer.id}>
          <input
            type="radio"
            name={`question-${question.id}`}
            value={answer.id.toString()}
            onChange={() => onChange(answer.id.toString())}
          />
          {answer.answer}
        </label>
      ))}
    </li>
  );
};

export default QuestionComponent;
