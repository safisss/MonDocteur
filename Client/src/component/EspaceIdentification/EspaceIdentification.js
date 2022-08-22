import React from "react";
import "./EspaceIdentification.css";
 import NavBar from "../NavBar/NavBar";
// import Footer from "../Footer/Footer";
import "../RegistrationUser/RegistrationUser";

import "../RegistrationDoctor/Inscription";
import { Link } from "react-router-dom";
const EspaceIdentification = () => {
  return (
    <>
       <NavBar /> 
      <div className="works">
        <div className="container-page">
          <div className="part">
            <Link to="/RegistrationUser">
              
              <img
                src="https://allodocteur.fr/media/img/illustration-notification.png?h=19e266344dadb6c622f3973b4e0628c1"
                height={230}
                width={250}
                alt="RegistrationUser"
              />
              <hr className="line" />
              <p className="part-desc">Je suis particulier</p>
            </Link>
          </div>

          <div className="part">
            <Link to="/Inscription">
              <img
                src="https://allodocteur.fr/media/img/illustration-doctor.png?h=b7ddbd16e5dc2cd545fd3a16916175a9"
                height={230}
                width={250}
                alt="test"
              
              />
              <hr className="line" />
              <p className="part-desc">Je suis Professionnel</p>
            </Link>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default EspaceIdentification;
