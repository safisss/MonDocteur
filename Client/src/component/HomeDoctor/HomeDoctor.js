
import React from "react";
import "./homeDocteur.css";
import bgVid from "../../Videos/vidDocc.mp4";
import DashboardDoctor from "../DashboardDoctor/DashboardDoctor";
const HomeDoctor = () => {
  return (
    <div>
      <DashboardDoctor />
      <div className="Vid">
        <video autoPlay loop muted>
          <source src={bgVid} type="video/mp4" />
        </video>
        <div className="textVid">
          <h1 className="texth1">Bienvenue sur votre espace</h1>
          <p className="textP">
            Hello Docteur .. Bienvenue sur votre espace personnel...
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeDoctor;