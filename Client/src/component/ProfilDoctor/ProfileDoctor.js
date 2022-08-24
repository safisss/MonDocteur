import React from 'react';
import './profileDoctor.css';
import DashboardDoctor from '../DashboardDoctor/DashboardDoctor';
import { useState, useEffect } from "react";
import axios from "axios";



const ProfileDoctor = () => {
const [updatedProfile, setUpdatedPrtofile] = useState({});
const [profile, setProfile] = useState({});
const [show, setShow] = useState(true);
let token = localStorage.getItem("docToken");
const handleChange = (e) => {
  setUpdatedPrtofile({ ...updatedProfile, [e.target.name]: e.target.value });
};



const handleSubmit = async (e) => {
  e.preventDefault();
  await axios
    .put("/Doctors/UpdateDoctor", updatedProfile, {
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
     .get("/Doctors/myprofile", {
       headers: {
         jwt: token,
       },
     })
     .then((res) => setProfile(res.data.profile))
     .catch((err) => console.log(err));
 }, [profile, show, token]);
//  }, [profile, show]);
  return (
    <div>
      <DashboardDoctor />
      {show ? (
        <div className="formulaireDoctor">
          <h2 className="RenseignementsDoc">Vos renseignements </h2>
          <p className="modifprofileUser"> Nom : {profile.Nom} </p>
          <p className="modifprofileUser"> Prenom : {profile.Prenom}</p>
          <p className="modifprofileUser">
            Adresse Professionnelle : {profile.AdresseProfessionnelle}
          </p>
          <p className="modifprofileUser">
            Numero de téléphone : {profile.Numerodetelephone}
          </p>
          <p className="modifprofileUser">{profile.Sexe}</p>
          <p className="modifprofileUser">
            Date de naissance : {profile.Datedenaissance}
          </p>
          <p className="modifprofileUser"> Email : {profile.Email}</p>
          <p className="modifprofileUser">
            Gouvernorat : {profile.Gouvernorat}
          </p>
          <p className="modifprofileUser">
            Numero d'inscription à l'ordre des medecins :
            {profile.Numerodinscriptionalordredesmedecins}
          </p>
          <p className="modifprofileUser">
            Specialités : {profile.Specialites}
          </p>
          <p className="modifprofileUser">
            Nom du Cabinet : {profile.NomCabinet}
          </p>
          <p>Numéro fix du Cabinet : {profile.NfixduCabinet}</p>
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
        <div className="formulaireDoc">
          {/* <div className="barreDoc"></div> <br /> */}
          <form
            className="formDoc"
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <h2 className="ProDoc">Modifier vos informations</h2>
            <div className="form1Doc">
              <label for="nom" className="Labels">
                Nom<span className="stars">*</span>
              </label>
              <br />

              <input
                type="text"
                placeholder="Votre Nom"
                required
                className="inputDoc"
                id="nom"
                name="Nom"
              />
              <br />
              <br />

              <label for="prénom" className="Labels">
                Prénom<span className="stars">*</span>
              </label>
              <br />

              <input
                type="text"
                placeholder="Votre prénom"
                required
                className="inputDoc"
                id="prénom"
                name="Prenom"
              />
              <br />
              <br />

              <label for="adresse" className="Labels">
                Adresse<span className="stars">*</span>
              </label>
              <br />

              <input
                type="text"
                placeholder="Votre Adresse"
                required
                className="inputDoc"
                id="adresse"
                name="Adresse"
              />
              <br />
              <br />

              <label for="tel" className="Labels">
                N° de télephone<span className="stars">*</span>
              </label>
              <br />
              <br />

              <input
                type="number"
                placeholder="Votre Téléphone"
                required
                className="inputDoc"
                id="tel"
                name="Numerodetelephone"
              />
              <br />
              <br />
              <br />

              {/* <label for="sexe">Sexe<span class="star">*

Homme<input type="radio" required class="input" name="sexe" checked/>
Femme<input type="radio" required class="input" name="sexe"/>
</span>
</label> */}

              <label for="sexe" className="Labels">
                Sexe<span className="stars">*</span>
                <select value="Select" className="gender" required>
                  <option value="H">Homme</option>
                  <option value="F">Femme</option>
                </select>
              </label>
              <br />
              <br />
              <br />

              {/* <label for="sexe"> Sexe <input type="radio" name="sex" value="H" checked/> Homme <input type="radio" name="sex" value="F"/> Femme</label><br/><br/> */}

              <label for="date" className="Labels">
                Date de naissance<span className="stars">*</span>
              </label>
              <br />

              <input
                type="date"
                className="inputDoc"
                id="dateDoc"
                name="Datedenaissance"
                required
              />
              <br />
              <br />

              <label for="email" className="Labels">
                Email<span className="stars">*</span>
              </label>
              <br />

              <input
                type="email"
                placeholder="Dr@gmail.com"
                required
                className="inputDoc"
                id="email"
                name="Email"
              />
              <br />
              <br />
            </div>
            <div className="form2Doc">
              <label for="password" className="Labels">
                Mot de passe<span className="stars">*</span>
              </label>
              <br />
              <input
                type="password"
                placeholder="votre mot de passe"
                required
                className="inputDoc"
                id="password"
                name="Motdepasse"
              />
              <br />
              <br />

              <label for="gouvernorat" className="Labels">
                Gouvernorat<span className="stars">*</span>
              </label>
              <select
                id="Gouvernorat"
                className="inputDoc"
                name="Gouvernorat"
                required
              >
                <option>Ariana</option>
                <option>Beja</option>
                <option>Ben Arous</option>
                <option>Bizerte</option>
                <option>Gabes</option>
                <option>Gafsa</option>
                <option>Jendouba</option>
                <option>Kairouan</option>
                <option>kasserine</option>
                <option>kébili</option>
                <option>kef</option>
                <option>Mahdia</option>
                <option>Manouba</option>
                <option>Medenine</option>
                <option>Monastir</option>
                <option>Nabeul</option>
                <option>Sfax</option>
                <option>Sidi Bouzid</option>
                <option>Siliana</option>
                <option>Sousse</option>
                <option>Tataouine</option>
                <option>Tozeur</option>
                <option>Tunis</option>
                <option>Zaghouan</option>
              </select>
              <br />
              <br />

              <label for="numInscri" className="Labels">
                N° d'inscription à l'Ordre des médecins
                <span className="stars">*</span>
              </label>
              <br />
              <input
                type="text"
                placeholder="Votre N° d'inscri à d'ordre des médecins"
                required
                className="inputDoc"
                id="numInscri"
                name="Numerodinscriptionalordredesmedecins"
              />
              <br />
              <br />
              <br />
              <label for="specialités" className="Labels">
                Spécialités<span className="stars">*</span>
              </label>
              <select
                id="specialités"
                className="inputDoc"
                name="Specialites"
                required
              >
                <option>Médecine interne</option>
                <option>Maladies infectieuses</option>
                <option>Réanimation médicale</option>
                <option>Carcinologie médicale</option>
                <option>Nutrition et maladies nutritionnelles</option>
                <option>Hématologie clinique,Endocrinologie</option>
                <option>Cardiologie</option>
                <option>Néphrologie</option>
                <option>Neurologie</option>
                <option>Pneumologie</option>
                <option>Rhumatologie</option>
                <option>Gastro-entérologie</option>
                <option>
                  Médecine physique,rééducation et réadaptation fonctionnelle
                </option>
                <option>Dermatologie</option>
                <option>Pédiatrie</option>
                <option>Psychiatrie</option>
                <option>Pédopsychiatrie</option>
                <option>Imagerie médicale</option>
                <option>Radiothérapie carcinologique</option>
                <option>Médecine légale</option>
                <option>Médecine du travail</option>
                <option>Médecine préventive et communautaire</option>
                <option>Anesthésie - réanimation</option>
                <option>Anatomie et cytologie pathologique</option>
                <option>Médecine d'urgence</option>
              </select>
              <br />
              <br />
              <br />
              <label for="specialités" className="LabelsInsc">
                Importer image<span className="star"></span>
              </label>
              <br />

              <input
                type="file"
                className="form-control"
                id="specialités2"
                name="AjouterautreSpecialite"
              />

              {/* <br /> */}
              <br />
              <br />

              <label for="cabinet" className="Labels">
                Nom Cabinet<span className="stars">*</span>
              </label>
              <input
                type="text"
                placeholder="Votre cabinet"
                required
                className="inputDoc"
                id="cabinet"
                name="NomCabinet"
              />
              <br />
              <br />
              <label for="numero" className="Labels">
                N° fix du Cabinet<span className="stars"></span>
              </label>
              <br />
              <input
                type="number"
                placeholder="Votre Numero fix "
                required
                className="inputDoc"
                id="Num cabinet"
                name="NfixduCabinet"
              />
              <br />
              <br />

              {/* <label for="N°Cabinet">
              N° Cabinet<span></span>
            </label>
            <br />

            <input
              type="number"
              placeholder="Votre Num de cabinet"
              className="input"
              id="cabinet"
            /> */}
            </div>
            <div className="buttonDoc">
              <input
                type="submit"
                value="Enregistrer"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              />

              {/* <input type="text" id="name" placeholder="Prènom"/> 
{/* <!-- <label for="birthday">Birthday:</label> --> */}
              {/* <input type="checkbox" id="name"/>
<input type="date" id="birthday" name="birthday"/>
<input type="text" id="address" placeholder="Adresse"/> 
<input type="number" id="phone" placeholder="Numèro de telephone"/> 
<input type="email" id="email" placeholder="Enter you Email"/> 
<input type="password" id="password" placeholder="Enter your password"/>
<input type="submit" class="submit" value="Submit"/> */}
            </div>
          </form>
        </div>
      )}
      ;
    </div>
  );
}



export default ProfileDoctor;