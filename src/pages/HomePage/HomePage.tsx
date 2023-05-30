import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/environment-survey">
        Teste tes connaissances sur l'environnement
      </Link>
      <br />
      <Link to="/environment-action-survey">
        Teste tes connaissances sur les gestes éco-responsables
      </Link>
    </div>
  );
};

export default HomePage;
