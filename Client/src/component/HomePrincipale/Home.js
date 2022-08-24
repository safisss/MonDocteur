import React from "react";

import "./homePrincipale.css"
import { Link } from "react-router-dom";

const Home = () => {
 
  return (
    <div className="homePrincipaleHome">
      <div className="ContainerHomeP">
        <div className="InfHome">
          <h2 className="homeHello">BienVenue!</h2>

          <h4 className="homeinfor">Mon Docteur</h4>
          <p className="homeDescrip">
            Le site de prise de
            <span>Rendez-vous</span> avec Les
            profesionnels de santé.
          </p>
         
          <button className="HomeBtn"> VOIR LA VIDEO</button>
 
        </div>
      </div>
    </div>
  );
};

export default Home;
