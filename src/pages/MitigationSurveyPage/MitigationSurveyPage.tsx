import SurveyPageComponent from "../../components/SurveyPageComponent/SurveyPageComponent";

const MitigationSurveyPage = () => {
  return (
    <SurveyPageComponent
      questionsEndpoint="/mitigation_questions"
      answersEndpoint="/mitigation_answers"
      pageTitle="Test tes conaissances pour aider à protéger l'environement"
      link="/"
      textLink="Retour au quiz sur l'environnement"
    />
  );
};

export default MitigationSurveyPage;
