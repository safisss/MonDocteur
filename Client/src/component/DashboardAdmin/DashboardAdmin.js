import React from "react";
import "./DashboardAdmins.css";
import { Link } from "react-router-dom";
//import HomeAdmin from './HomeAdmin';
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
 
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const DashboardAdmin = () => {
  const history = useHistory();
  const [logout, setLogout] = useState(false);

  const logoutHandler = async (e) => {
    e.preventDefault();
    // await localStorage.removeItem("auth");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("isAdmin");
    // console.log(localStorage.getItem("token"));
    history.push("/");
  };

  // const history = useHistory();
  // const [logout, setLogout] = useState(false);

  // useEffect(() => {
  //   if (!localStorage.getItem("auth")) history.push("/Login");
  // }, [logout]);

  // const logoutHandler = (e) => {
  //   e.preventDefault();
  //   localStorage.removeItem("auth");
  //   setLogout(true);
  // };

  return (
    <div>
      <body className="backColor">
        <input type="checkbox" id="menuAd" />
        <div className="DashAdmin">
          <div className="dashboardcontainer">
            <div className="ContainerDashAdmin">
              <h3 className="EspaceAd">
                {/* <span className="EspaceAd"></span> */}
                Espace Admin...
              </h3>
            </div>
            <div className="wrapperAdmin">
              <div>
                <img
                  src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"
                  alt="Test"
                  className="ImgPng"
                />
              </div>
              <div>
                <div className="AdminT">
                  <h3 className="infoAdmin">Admin Admin</h3>
                  <small className="codeAdmin">1111-7777-222</small>
                </div>
                <span className="DownSide"></span>
              </div>
            </div>
            <div className="DashboardMenuAdmin">
              <ul>
                <li>
                  <Link to="/dashboardAdmin" style={{ textDecoration: "none" }}>
                    <span>
                      <i class="fa-solid fa-house-user"></i>
                    </span>
                    <span className="TitleDashAdmin">AcceuilAdmin</span>
                  </Link>
                </li>

                <li>
                  <Link to="/homeAdmin" style={{ textDecoration: "none" }}>
                    <span>
                      <i className="fas fa-home"></i>
                    </span>
                    <span className="TitleDashAdmin">Home</span>
                  </Link>
                </li>

                <li>
                  <Link to="/comptesDoctors" style={{ textDecoration: "none" }}>
                    <span>
                      <i class="fa-solid fa-users"></i>
                    </span>
                    <span className="TitleDashAdmin">List Doctors</span>
                  </Link>
                </li>

                <li>
                
                  <Link to="/listUsers" style={{ textDecoration: "none" }}>
                    <span>
                      <i class="fa-solid fa-list-ul"></i>
                    </span>
                    <span className="TitleDashAdmin">List Users</span>{" "}
                  </Link>
                </li>

                <li>
                  <Link to="/messagesAdmin" style={{ textDecoration: "none" }}>
                    <span>
                      <i class="fa-solid fa-message"></i>
                    </span>
                    <span className="TitleDashAdmin"> MessagesAdmin</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/informationsAdmins"
                    style={{ textDecoration: "none" }}
                  >
                    <span>
                      <i class="fa-solid fa-info"></i>
                    </span>
                    <span className="TitleDashAdmin"> Informations</span>
                  </Link>
                </li>

              </ul>
              <div>
                <span className="TitleDashAdmin">
                  <button id="BtnAdmin" onClick={logoutHandler}>
                    Se Deconnecter
                  </button>


                </span>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default DashboardAdmin;
