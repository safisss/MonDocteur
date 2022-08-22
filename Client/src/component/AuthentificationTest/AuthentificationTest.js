import React from "react";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../../Redux/Actions/Users";
import "../AuthentificationUserDoctor/authentificationUser.css";

import NavBar from "../NavBar/NavBar";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const AuthentificationTest = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const [userLogin, setUserLogin] = useState();

  
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // await axios
    //   .post("http://localhost:5000/Users/Login", { user })
    //   .then((response) => {
    // setUserLogin(response.user);
    // dispatch(login(user, history));

    //console.log(res);
    // });
    // history.push(`/DashboardUser/${}`);
  };

  //  useEffect(async () => {
     //await axios.get("http://localhost:5000/Admin/UsersList").then((res) => {

  //  });

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
        <form id="login-form">
          <h1>Se connecter</h1>
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

export default AuthentificationTest;
