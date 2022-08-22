import React from "react";
// import imi from "../../images/Captureee.PNG";
import imi from "../../images/medecin.jpg";
// import imi from "../../images/ab.png";
import "./authAdmin.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../../Redux/Actions/Admin";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const AuthentificationAdmin = () => {
  const [admin, setAdmin] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const [adminLogin, setAdminLogin] = useState();

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
      .post("/Admin/Login", admin)
      .then((res) => {
        console.log(res);
        localStorage.setItem("adminToken", res.data.token);
        localStorage.setItem("isAdmin", res.data.data.Role);
        history.push("/homeAdmin");
      })
      .catch((err) => console.dir(err));
  };

  return (
    <div>
      <div className="Loggcontainer">
        <div className="MyformLogg">
          <form
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <h2 className="AdmLogg">ADMIN LOGIN</h2>
            <input
              type="Email"
              placeholder="Admin Email"
              name="Email"
              className="InLogg"
            />
            <input
              type="password"
              placeholder="Password"
              name="Motdepasse"
              className="InLogg"
            />
            <button
              type="submit"
              className="buttonLogg"
              onClick={(e) => {
                handleLogin(e);
              }}
            >
              LOGIN
            </button>
          </form>
        </div>
        <div className="imagii">
          <img src={imi} alt="" className="iii" />
        </div>
      </div>
    </div>
  );
};

export default AuthentificationAdmin;
