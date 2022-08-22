import React from "react";
import "./registrationUser.css";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { register } from "../../Redux/Actions/Users";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const RegistrationUser = () => {


  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }; 
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log("hedhiiiii fil front",user)
    dispatch(register(user, history));
  };

  
  return (
    <div>
      {/* <Link to="/espaceIdentification">
        {" "}
        <span>&#8592; </span>
      </Link> */}

      <NavBar />
      <fieldset className="fieldsetformRegistration">
        <form className="inscrUser">
          <h1 className="TitleUser">Inscrivez-vous !</h1>

          <hr className="LineHr" />

          <table className="tableRegistration">
            <thead>
              <tr>
                <td className="RegistrationUserTd">Nom: </td>
                <td>
                  {" "}
                  <input
                    type="text"
                    name="Nom"
                    onChange={handleChange}
                    required
                    className="inputsUsersRegistration"
                  />{" "}
                  <br />
                </td>
              </tr>

              <tr>
                <td className="RegistrationUserTd">Prénom: </td>
                <td>
                  {" "}
                  <input
                    type="text"
                    name="Prenom"
                    onChange={handleChange}
                    required
                    className="inputsUsersRegistration"
                  />
                  <br />
                </td>
              </tr>

              {/* <tr>
                <td>
                    Sexe:  </td>
                   <td id="radiobtn" > Homme   <input type="radio" name="sexe" id="sexe" />Femme <input type="radio" name="sexe" /><br/>
                </td>
            
            </tr>  */}

              <tr>
                <td className="RegistrationUserTd">Date de naissance: </td>
                <td>
                  <input
                    type="date"
                    id="birthday"
                    name="Datedenaissance"
                    onChange={handleChange}
                    className="inputsUsersRegistration"
                    required
                  />{" "}
                  <br />
                </td>
              </tr>

              <tr>
                <td className="RegistrationUserTd">Adresse: </td>
                <td>
                  <input
                    type="text"
                    name="Adresse"
                    onChange={handleChange}
                    className="inputsUsersRegistration"
                    required
                  />
                  <br />
                </td>
              </tr>

              <tr>
                <td className="RegistrationUserTd">N° Téléphone: </td>
                <td>
                  <input
                    type="text"
                    name="NTelephone"
                    onChange={handleChange}
                    className="inputsUsersRegistration"
                    required
                  />
                  <br />
                </td>
              </tr>

              <tr>
                <td className="RegistrationUserTd">Email: </td>
                <td>
                  <input
                    type="email"
                    name="Email"
                    onChange={handleChange}
                    className="inputsUsersRegistration"
                    required
                  />
                  <br />
                </td>
              </tr>

              <tr>
                <td className="RegistrationUserTd">Mot de passe: </td>
                <td>
                  {" "}
                  <input
                    type="password"
                    name="Motdepasse"
                    onChange={handleChange}
                    className="inputsUsersRegistration"
                    required
                  />
                  <br />
                </td>
              </tr>

              {/* <tr>
                <td className="RegistrationUserTd">
                  Confirmer votre <br />
                  mot de passe:
                </td>
                <td>
                  <input
                    type="password"
                    name="Confirmervotremotdepasse"
                    onChange={handleChange}
                    className="inputsUsersRegistration"
                    required
                  />
                  <br />
                </td>
              </tr> */}

              <tr>
                <td colSpan="2">
                  <input
                    type="submit"
                    id="submitUserRegister"
                    onClick={handleRegister}
                  />

                  <Link to="/AuthentificationUser"></Link>
                </td>
              </tr>
            </thead>
          </table>
        </form>
      </fieldset>
      <hr />
      {/* <footer/> */}
      {/* <div className="footer">
        <p> &copy; 2022 Mon Docteur - Tous droits réservés</p>
      </div> */}
    </div>
  );
};
export default RegistrationUser;
