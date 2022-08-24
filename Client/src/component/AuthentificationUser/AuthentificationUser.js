import React from "react";
import Alert from "react-bootstrap/Alert";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./authentificationUser.css";
import NavBar from "../NavBar/NavBar";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
const AuthentificationUser = () => {
  const [user, setUser] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const [userLogin, setUserLogin] = useState();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // await dispatch(login(user, history));
    axios
      .post("/Users/Login", user)
      .then((result) => {
        console.log(result);
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("isUser", result.data.isUser);
        localStorage.setItem("userId", result.data.userId);
        swal("Welcome", "", "success").then(() => {
          history.push(`/DashboardUtilisateur`);
        });
      })
      .catch((error) => {
        setErrorMsg(error.response.data.message);
        // console.dir(error.response.data.mesage);
      });
  };

  return (
    <div>
      <body>
        <NavBar />
        <form id="login-form">
          <h1>Se connecter : Patient</h1>
          {errorMsg && (
            <Alert key="danger" variant="danger">
              {errorMsg}
            </Alert>
          )}
          <div className="inputAuth">
            <input
              type="text"
              placeholder="Adresse Email"
              name="Email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="inputAuth">
            <input
              type="password"
              placeholder="Mot de passe"
              name="Motdepasse"
              required
              onChange={handleChange}
            />
          </div>

          <button className="LoginBtn" onClick={handleLogin}>
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

export default AuthentificationUser;
