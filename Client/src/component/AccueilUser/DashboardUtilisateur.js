import React from "react";
import DashboardUser from "../DashboardUser/DashboardUser";
import imm from "../../images/Doctorr.jpeg"
import "./WelcomeUser.css";
const DashboardUtilisateur = () => {
  return (
    <div>
      <DashboardUser />
      <img src={imm} alt="test1" className="ImmDoctor" />
      <h1 className="texthomeUsrBienvenue">Bienvenue!</h1>
      <h1 className="texthomeUsr">On est là pour vous !</h1>
      <br />
      <h1 className="texthomeUtilisateurs">
        Votre santé est
        <br />
        notre priorité.
      </h1>

    </div>
  );
};

export default DashboardUtilisateur;
