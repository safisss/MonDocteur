import React from "react";
import "./DashboardUser.css";

// import imm from "../../images/Doctorr.jpeg";
import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
// import Accueil from "../AccueilUser/Accueil";
//import {IonIcon} from '@ionic/react';
//import {star} from 'ionicons/icons';

const DashboardUser = () => {
  // const history = useHistory();
  // const [logout, setLogout] = useState(false);

  const history = useHistory();
  const [logout, setLogout] = useState("");

  //  useEffect(() => {
  //     if (!localStorage.getItem("auth")) history.push("/DashboardUser");
  //   }, [logout]);

  const logoutHandler = async (e) => {
    e.preventDefault();
    // await localStorage.removeItem("auth");
    localStorage.removeItem("token");
    localStorage.removeItem("isUser");
    // console.log(localStorage.getItem("token"));
    history.push("/");
  };

  return (
    <div>
      <div className="ContainerDashUser">
        <div className="NavigationUser">
          <ul>
            <li>
              <span className="titleDashEspace">
                {/* <ion-icon name="home-outline"></ion-icon> */}
                <i class="fa-solid fa-address-card"></i>
              </span>
              <span className="titleDash" style={{ color: "white" }}>
                Espace Utilisateur
              </span>
            </li>

            <li>
              <span>
                <i class="fas fa-home"></i>
              </span>
              <span className="titleDash"></span>
              <Link
                to="/DashboardUtilisateur"
                style={{ textDecoration: "none" }}
              >
                Dashboard
              </Link>
            </li>

            <li>
              <span>
                <i class="fa-solid fa-house-chimney-user"></i>
              </span>
              <span className="titleDash"></span>
              <Link to="/homeUser" style={{ textDecoration: "none" }}>
                HomeUser
              </Link>
            </li>

            <li>
              <span>
                <i class="fa-solid fa-user-pen"></i>
              </span>
              <span className="titleDash"></span>
              <Link to="/profileUtilisateur" style={{ textDecoration: "none" }}>
                Profile
              </Link>
            </li>

            {/* <li>
              <span>
                <i class="fas fa-calendar"></i>
              </span>
              <span className="title"></span>
              <Link to="/calendrierUser">Calendrier</Link>
            </li> */}

            <li>
              <span>
                <i class="fas fa-cog"></i>
              </span>
              <span className="titleDash"></span>
              <Link to="/calendrierUser" style={{ textDecoration: "none" }}>
                Calendrier
              </Link>
            </li>

            <li>
              <span>
                <i class="fa-solid fa-message"></i>
              </span>
              <span className="titleDash"></span>
              <Link to="/messageUs" style={{ textDecoration: "none" }}>
                Message
              </Link>
            </li>

            <li></li>

            <li>
              <span>
                <i class="fas fa-sign-out"></i>
              </span>
              <span className="titleDash"></span>
              <Link
                to="/signOutUser"
                style={{ textDecoration: "none" }}
                onClick={logoutHandler}
              >
                Sign Out
              </Link>
            </li>
          </ul>
          <div>
            <span></span>
            <span>
              <button onClick={logoutHandler} className="ButtonDashUser">
                Se Deconnecter
              </button>
            </span>
           
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default DashboardUser;
