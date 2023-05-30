import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/environment-survey">
        Teste tes connaissances sur l'environnement
      </Link>
    </div>
  );
};

export default HomePage;
