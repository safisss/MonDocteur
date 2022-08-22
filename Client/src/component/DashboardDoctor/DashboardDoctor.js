import React from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import "./dashboardDoctor.css";

import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const DashboardDoctor = () => {
  const history = useHistory();
  const [logout, setLogout] = useState(false);

  const logoutHandler = async (e) => {
    e.preventDefault();
    // await localStorage.removeItem("auth");
    localStorage.removeItem("docToken");
    localStorage.removeItem("isDoctor");
    localStorage.removeItem("isActivated");
    // console.log(localStorage.getItem("token"));
    history.push("/");
  };



  return (
    <div>
      <div className="ContainerDoctor">
        <div className="NavigationDoctor">
          <ul>
            <li>
              <span className="titleDoctorEspace">
                <i class="fa-solid fa-user-doctor"></i>
                {/* <i class="fa-solid fa-stethoscope"></i> */}
              </span>
              <Link to="#" style={{ textDecoration: "none" }}>
                {" "}
                <span className="titleDoctor">Espace docteur</span>
              </Link>
            </li>

            <li>
              <span>
                {" "}
                <i className="fas fa-home"></i>
              </span>
              <span className="titleDoctor"></span>{" "}
              <Link to="/homeDoctor" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>

            <li>
              <span>
                <i class="fa-solid fa-address-card"></i>
              </span>
              <span className="titleDoctor"></span>
              <Link to="/profileDoc" style={{ textDecoration: "none" }}>
                Profile
              </Link>
            </li>

            <li>
              <span>
                <i class="far fa-calendar"></i>
              </span>
              <span className="titleDoctor"></span>
              <Link to="/rdvDoctors" style={{ textDecoration: "none" }}>
                Mes Rendez-vous
              </Link>
            </li>

            <li>
              <span>
                <i class="fa-solid fa-stethoscope"></i>
              </span>
              <span className="titleDoctor"></span>
              <Link to="/calendrierDoc" style={{ textDecoration: "none" }}>
                Calendrier Doctor
              </Link>
            </li>

            <li>
              <span>
                <i class="fa-solid fa-message"></i>
              </span>
              <span className="titleDoctor"></span>
              <Link to="/contactAdmin" style={{ textDecoration: "none" }}>
                Message
              </Link>
            </li>

            <li>
              <span>
                <i className="fas fa-sign-out"></i>
              </span>
              <span className="titleDoctor"></span>
              <Link
                to="/" 
                style={{ textDecoration: "none" }}
                onClick={logoutHandler}
              >
                Sign Out
              </Link>
            </li>
          </ul>
          <div>
            <span>
              <button className="BtnDashDoctor" onClick={logoutHandler}>
                Deconnecter
              </button>
            </span>
            {/* <Link to="/deconnecter"></Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardDoctor;
