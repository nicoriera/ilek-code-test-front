import SurveyPageComponent from "../../components/SurveyPageComponent/SurveyPageComponent";

const EnvironmentSurveyPage = () => {
  return (
    <SurveyPageComponent
      questionsEndpoint="/environment_questions"
      answersEndpoint="/environment_answers"
      pageTitle="Test tes conaissances sur l'environement"
      link="/mitigation-survey"
      textLink="Passer un autre quiz pour découvrir comment tu peux aider à protéger l'environnement"
    />
  );
};

export default EnvironmentSurveyPage;
