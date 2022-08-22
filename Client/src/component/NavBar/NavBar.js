import React, { useState } from "react";

import "./NavStyle.css"

import { Link } from "react-router-dom";


 const NavBar = () => {


    return (
      <div className="navBar">
        <div className="containerNav" id="NavB">
          <div className="logoNav">
            <Link
              path
              to="#"
              style={{
                color: "white",
                textDecoration: "none",
                webkitTextStroke: "1px #1475d0",
              }}
            > Mon <span style={{ color: "#1688ce" }}> Docteur</span>
              
            </Link>
    
          </div>

          <ul className="ulListNav">
            <li className="listItemNav">
              <Link to="/">Home</Link>
            </li>

            <li className="listItemNav">
              <Link to="/contact">Contact</Link>
            </li>

            <Link to="/EspaceIdentification">
              <button
                className="BtnNavBar"
                // onClick={() => {
                //   setisConect(false);
                // }}
              >
                Créer un compte
              </button>
            </Link>

            <li className="listItemNavLoginBtn">
              <button
                className="BtnNavBar"
       
              >
                Se connecter
              </button>

              <ul className="listItemNavBarLogin" style={{ top: "50px" }}>
                <Link
                  to="/AuthentificationUser"
                  style={{
                    textDecoration: "none",

                    top: "10px",
                  }}
                >
                  <li className="listItemNavLogin" id="logUsr">
                    Patient
                  </li>
                </Link>

                <Link
                  to="/AuthentificationDoctor"
                  style={{ textDecoration: "none" }}
                >
                  <li className="listItemNavLogin" id="logDr">
                    Docteur
                  </li>
                </Link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default NavBar;
