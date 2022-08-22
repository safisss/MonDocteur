import React from 'react'
 import imageHomeAdmin from "../../images/Back.jpg";
import "./homeAdmin.css";
import DashboardAdmin from '../DashboardAdmin/DashboardAdmin';


const HomeAdmin = () => {
  return (
    <div>
      
        <div className="homeadmin">
          <img
            src={imageHomeAdmin}
            alt="Testimg"
            className="ImageTestHomeAdmin"
          />
        </div>
        <div id="fly-in">
          <div>
            <span>Hello</span> Admin
          </div>
          <div>
            <span>Bienvenue</span> sur votre dashboard
          </div>
          <div>
            <span>Projet</span> Mon Docteur
          </div>
          <div>
            <span>Site</span> de Prise de Rendez-vous
          </div>
          <div>
            <span>avec</span> les professionnelles de santé
          </div>
          <div>
            <span>Rapidité</span> Sans déplacement
          </div>
          <div>
            <span>Gain </span>  de temps
          </div>
          <div>
            <span>Mon</span> Docteur
          </div>
        </div>
        <DashboardAdmin />
     
    </div>
  );
}

export default HomeAdmin;