import React from "react";
import Alert from "react-bootstrap/Alert";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../../Redux/Actions/Doctors";
import "./authentificationDoctor.css";

import NavBar from "../NavBar/NavBar";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Popup from "react-popup";
const AuthentificationDoctor = () => {
  const [doctor, setDoctor] = useState({});
  const [errorVerified, setErrorVerified] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  // const [doctorLogin, setDoctorLogin] = useState();
  //VERIFY ACCOUNT DOCTOR
  const [isLoggedIn, setIsLoggedIn] = useState("true");

  // const VerifyLogin = async (id) => {
  //   const res = await axios.get(`/Admin/VerifyLoginDoctor/${id}` ,{

  //     VerifyAccount: "active",
  //   });
  //  if (res.data.isLoggedIn && isLoggedIn === "true") {
  //     setIsLoggedIn("LOGGED_IN");
  //     setDoctor(res.data.doctor)
  //   } else if (!res.data.isLoggedIn && isLoggedIn === "En Attente" || "false")
  //   {
  //     setIsLoggedIn("NOT_LOGGED_IN");
  //     setDoctor({})
  //   }
  // }

  const handleChangeDr = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleLoginDr = async (e) => {
    e.preventDefault();
    console.log("ok");
    await axios
      .post("/Doctors/Login", doctor)
      .then((res) => {
        console.log(res);
        localStorage.setItem("docToken", res.data.token);
        localStorage.setItem("isDoctor", res.data.isDoctor);
        localStorage.setItem("isActivated", res.data.verify);
        localStorage.setItem("doctorId", res.data.doctorId);
        history.push("/homeDoctor");
      })
      .catch((err) => {
        console.dir(err);
        if (err.response.data.notVerified) {
          setErrorVerified(err.response.data.message);
        }
        setErrorVerified(err.response.data.message);
      });
  };

  // if (userRedirect === true) {
  //       if (user && user.role === 1) {
  //         return <Redirect to='/DashboardUser' />;
  //       } else {
  //         return <Redirect to='/DashboardDoctor' />;
  //       }
  //   };

  return (
    <div>
      <body>
        <NavBar />
        <form
          id="login-form"
          onChange={(e) => {
            handleChangeDr(e);
          }}
        >
          <h1>Se connecter : Docteur</h1>
          {errorVerified && (
            <Alert key="danger" variant="danger">
              {errorVerified}
            </Alert>
          )}

          <div className="inputAuth">
            <input
              type="text"
              placeholder="Adresse Email"
              name="Email"
              required
            />
          </div>
          <div className="inputAuth">
            <input
              type="password"
              placeholder="Mot de passe"
              name="Motdepasse"
              required
            />
          </div>
          {/* <label>
        <input type="checkbox" name="remember"/> Remember me
      </label> */}
          {/* <button type="submit" className="LoginBtn" onClick=(){history.push("/dashboardUser");} > */}
          <button
            className="LoginBtn"
            onClick={(e) => {
              handleLoginDr(e);
            }}
          >
            Connexion
          </button>
          <div className="bottomLinks">
            <p>
              Vous n'avez pas de compte?{" "}
              <Link to="/espaceIdentification">S'identifier</Link>
            </p>
          </div>
        </form>
      </body>
    </div>
  );
};

export default AuthentificationDoctor;
