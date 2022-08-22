import React from "react";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../../Redux/Actions/Users";
import "./authentificationUser.css";

import NavBar from "../NavBar/NavBar";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const AuthentificationUser = () => {
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
    await dispatch(login(user, history));

    //console.log(res);
    // });
    // history.push(`/DashboardUser/${}`);
  };

  //  useEffect(async () => {
     //await axios.get("http://localhost:5000/Admin/UsersList").then((res) => {

  //  });


  return (
    <div>
      <body>
        <NavBar />
        <form id="login-form">
          <h1>Se connecter : Patient</h1>
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

          {/* <label>
        <input type="checkbox" name="remember"/> Remember me
      </label> */}
          {/* <button type="submit" className="LoginBtn" onClick=(){history.push("/dashboardUser");} > */}
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
