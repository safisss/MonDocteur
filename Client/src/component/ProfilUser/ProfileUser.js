import React from "react";
import DashboardUser from "../DashboardUser/DashboardUser";
import "./EditAccountuser.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editProfile } from "../../Redux/Actions/Users";
import axios from "axios";


const ProfileUser = () => {

  const [updatedProfile, setUpdatedPrtofile] = useState({});
  const [profile, setProfile] = useState({});
  const [show, setShow] = useState(true);
  let token = localStorage.getItem("token");
  const handleChange = (e) => {
    setUpdatedPrtofile({ ...updatedProfile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  
    await axios
      .put("/Users/UpdateUser", updatedProfile, {
        headers: {
          jwt: token,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.dir(err));
    setShow(true);
  };
  useEffect(() => {
    axios
      .get("/Users/myprofile", {
        headers: {
          jwt: token,
        },
      })
      .then((res) => setProfile(res.data.profile))
      .catch((err) => console.log(err));
  }, [profile, show]);

  return (
    <div>
      <DashboardUser />
      {show ? (
        <div className="ContactUserLine">
          <p className="Renseignements">Vos renseignements </p>
          <p className="modifprofileUser"> Nom : {profile.Nom} </p>
          <p className="modifprofileUser"> Prenom : {profile.Prenom}</p>
          <p className="modifprofileUser">
            Datedenaissance : {profile.Datedenaissance}
          </p>
          <p className="modifprofileUser"> Adresse : {profile.Adresse}</p>
          <p className="modifprofileUser">
            {" "}
            Numéro de téléphone : {profile.NTelephone}
          </p>
          <p className="modifprofileUser"> Email : {profile.Email}</p>
          {/* <h2> {profile.Motdepasse}</h2> */}
          <button
            className="btnEditUser"
            onClick={() => {
              setShow(false);
            }}
          >
            Modifier profile
          </button>
        </div>
      ) : (
        <div className="FormEdit">
          <div className="formContainer" />
          <form
            className="ContactformUser"
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <h2 className="Renseignements">Vos renseignements </h2>
            <input
              type="text"
              name="Nom"
              placeholder="Nom"
              className="inputsform"
            />
            <input
              type="text"
              name="Prenom"
              placeholder="Prènom"
              className="inputsform"
            />

            <input
              type="date"
              id="birthday"
              name="Datedenaissance"
              className="inputsform"
            />

            <input
              type="text"
              placeholder="Adresse"
              name="Adresse"
              className="inputsform"
            />
            <input
              type="number"
              placeholder="Numèro de telephone"
              name="NTelephone"
              className="inputsform"
            />
            <input
              type="email"
              placeholder="Entrer Email"
              name="Email"
              className="inputsform"
            />
            <input
              type="password"
              placeholder="Entrer password"
              name="Motdepasse"
              className="inputsform"
            />
            <input
              type="submit"
              className="SubmitB"
              value="Submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            />
          </form>
        </div>
      )}
    </div>
  );

};

export default ProfileUser;
