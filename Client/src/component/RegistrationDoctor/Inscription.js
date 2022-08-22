import React from "react";

import "./inscriptionDoctor.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { register } from "../../Redux/Actions/Doctors";

const Inscription = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [doctor, setDoctor] = useState();

  const [Nom, setNom] = useState("");
  const [Email, setEmail] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [AdresseProfessionnelle, setAdresseProfessionnelle] = useState("");
  const [Numerodetelephone, setNumerodetelephone] = useState("");
  const [Sexe, setSexe] = useState("");
  const [Gouvernorat, setGouvernorat] = useState("");
  const [Datedenaissance, setDatedenaissance] = useState("");
  const [Motdepasse, setMotdepasse] = useState("");
  const [
    Numerodinscriptionalordredesmedecins,
    setNumerodinscriptionalordredesmedecins,
  ] = useState("");
  const [Specialites, setSpecialites] = useState("");
  const [NomCabinet, setNomCabinet] = useState("");
  const [NfixduCabinet, setNfixduCabinet] = useState("");
  const [link, setLink] = useState("");

  // const handleChange = (e) => {
  //     setDoctor({ ...doctor, [e.target.name]: e.target.value });
  //     console.log(doctor);
  //   };

  const handleChange = (e) => {
    e.preventDefault();
    setLink(e.target.files[0]);
  };
  // console.log(doctor);

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //    console.log(doctor, "doctorrrrr");
  //   dispatch(register(doctor, history));
  // };

  const handleRegister = (e) => {
    e.preventDefault();
    const newAccount = new FormData();

    newAccount.append("Nom", Nom);
    newAccount.append("Email", Email);
    newAccount.append("Prenom", Prenom);
    newAccount.append("AdresseProfessionnelle", AdresseProfessionnelle);
    newAccount.append("Numerodetelephone", Numerodetelephone);
    newAccount.append("Sexe", Sexe);
    newAccount.append("Gouvernorat", Gouvernorat);
    newAccount.append("Datedenaissance", Datedenaissance);
    newAccount.append("Motdepasse", Motdepasse);
    newAccount.append(
      "Numerodinscriptionalordredesmedecins",
      Numerodinscriptionalordredesmedecins
    );
    newAccount.append("Specialites", Specialites);
    newAccount.append("NomCabinet", NomCabinet);
    newAccount.append("NfixduCabinet", NfixduCabinet);
    if (link) {
      newAccount.append("img", link);
    }

    dispatch(register(newAccount, history));
  };

  return (
    <div>
      {/* <Link to="/espaceIdentification">
        {" "}
        <span>&#8592; </span>
      </Link> */}

      <div className="formulaireInsc">
        {/* <div className="barre"></div> <br /> */}

        <form className="formInsc">
          <h2 className="Inscri">Inscrivez-vous</h2>
          <div className="form1Insc">
            <label for="nom">
              Nom<span className="star">*</span>
            </label>
            <br />

            <input
              type="text"
              placeholder="Votre Nom"
              className="inputInsc"
              id="nom"
              name="Nom"
              onChange={(e) => setNom(e.target.value)}
              required
            />
            <br />
            <br />

            <label for="prénom">
              Prénom<span className="star">*</span>
            </label>
            <br />

            <input
              type="text"
              placeholder="Votre prénom"
              className="inputInsc"
              id="prénom"
              name="Prenom"
              onChange={(e) => setPrenom(e.target.value)}
              required
            />
            <br />
            <br />

            <label for="adresse" className="LabelsInsc">
              Adresse Professionnelle<span className="star">*</span>
            </label>
            <br />

            <input
              // style={{ "color": "#grey" }}
              type="text"
              placeholder="Votre Adresse"
              className="inputInsc"
              id="adresse"
              name="AdresseProfessionnelle"
              onChange={(e) => setAdresseProfessionnelle(e.target.value)}
              required
            />
            <br />
            <br />

            <label for="tel" className="LabelsInsc">
              Numero de téléphone<span className="star">*</span>
            </label>
            <br />
            <br />

            <input
              type="number"
              placeholder="Votre Téléphone"
              className="inputInsc"
              id="tel"
              name="Numerodetelephone"
              onChange={(e) => setNumerodetelephone(e.target.value)}
              required
            />
            <br />
            <br />
            <br />

            {/* <label for="sexe">Sexe<span class="star">*

Homme<input type="radio" required class="input" name="sexe" checked/>
Femme<input type="radio" required class="input" name="sexe"/>
</span>
</label> */}

            <label
              for="sexe"
              // onChange={handleChange}
              className="LabelsInsc"
            >
              Sexe<span className="star">*</span>
              <select className="Gender" name="Sexe" required>
                {/* <option value="H">Options</option> */}
                onChange={(e) => setSexe(e.target.value)}
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
              </select>
            </label>
            <br />
            <br />
            <br />
            {/* <label for="sexe"> Sexe <input type="radio" name="sex" value="H" checked/> Homme <input type="radio" name="sex" value="F"/> Femme</label><br/><br/> */}

            <label for="date" className="LabelsInsc">
              Date de naissance<span className="star">*</span>
            </label>
            <br />

            <input
              type="date"
              className="inputInsc"
              id="dateInsc"
              name="Datedenaissance"
              onChange={(e) => setDatedenaissance(e.target.value)}
              required
            />
            <br />
            <br />

            <label for="email" className="LabelsInsc">
              Email<span className="star">*</span>
            </label>
            <br />

            <input
              type="email"
              placeholder="Doctor@gmail.com"
              className="inputInsc"
              id="email"
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <br />
          </div>
          <div className="form2Insc">
            <label for="password" className="LabelsInsc">
              Mot de passe<span className="star">*</span>
            </label>
            <br />
            <input
              type="password"
              placeholder="votre mot de passe"
              className="inputInsc"
              id="password"
              name="Motdepasse"
              onChange={(e) => setMotdepasse(e.target.value)}
              required
            />
            <br />
            <br />

            <label for="gouvernorat" className="LabelsInsc">
              Gouvernorat<span className="star">*</span>
            </label>
            <select
              id="gouvernorat"
              className="inputInsc"
              name="Gouvernorat"
              onChange={(e) => setGouvernorat(e.target.value)}
            >
              <option value="Ariana">Ariana</option>
              <option value="Beja">Beja</option>
              <option value="Ben Arous">Ben Arous</option>
              <option value="Bizerte">Bizerte</option>
              <option value="Gabes">Gabes</option>
              <option value="Gafsa">Gafsa</option>
              <option value="Jendouba">Jendouba</option>
              <option value="Kairouan">Kairouan</option>
              <option value="kasserine">kasserine</option>
              <option value="kébili">kébili</option>
              <option value="kef">kef</option>
              <option value="Mahdia">Mahdia</option>
              <option value="Manouba">Manouba</option>
              <option value="Medenine">Medenine</option>
              <option value="Monastir">Monastir</option>
              <option value="Nabeul">Nabeul</option>
              <option value="Sfax">Sfax</option>
              <option value="Sidi Bouzid">Sidi Bouzid</option>
              <option value="Siliana">Siliana</option>
              <option value="Sousse">Sousse</option>
              <option value="Tataouine">Tataouine</option>
              <option value="Tozeur">Tozeur</option>
              <option value="Tunis">Tunis</option>
              <option value="Zaghouan">Zaghouan</option>
            </select>
            <br />
            <br />

            <label
              for="numInscri"
              className="LabelsInsc"
              // value="NdinscriptionalOrdredesmédecins"
            >
              N° d'inscription à l'Ordre des médecins
              <span className="star">*</span>
            </label>
            <br />

            <input
              type="text"
              placeholder="Votre N° d'inscri à d'ordre des médecins"
              className="inputInsc"
              id="numInscri"
              name="Numerodinscriptionalordredesmedecins"
              onChange={(e) =>
                setNumerodinscriptionalordredesmedecins(e.target.value)
              }
              required
            />
            <br />
            <br />
            <br />
            <label for="specialités" className="LabelsInsc">
              Spécialités<span className="star">*</span>
            </label>
            <select
              id="specialités1"
              name="Specialites"
              onChange={(e) => setSpecialites(e.target.value)}
            >
              <option value="Médecin généraliste">Médecin généraliste</option>
              <option value="Pédiatre">Pédiatre</option>
              <option value="Gynécologue médical et obstétrique">
                Gynécologue médical et obstétrique
              </option>
              <option value="Ophtalmologue">Ophtalmologue</option>
              <option value="Dermatologue et vénérologue">
                Dermatologue et vénérologue
              </option>
              <option value="Ostéopathe">Ostéopathe</option>
              <option value="Masseur-kinésithérapeute">
                Masseur-kinésithérapeute
              </option>
              <option value="Opticien">Opticien</option>
              <option value="Neurologue">Neurologue</option>
              <option value="Pédicure-podologue">Pédicure-podologue</option>
              <option value="Sage-femme">Sage-femme</option>
              <option value="ORL">ORL</option>
              <option value="Allergologue">Allergologue</option>
              <option value="Chirurgien urologue">Chirurgien urologue</option>
              <option value="Rhumatologue">Rhumatologue</option>
              <option value="Stomatologue">Stomatologue</option>
              <option value="Endocrinologue">Endocrinologue</option>
              <option value="Chirurgien orthopédiste">
                Chirurgien orthopédiste
              </option>
              <option value="Dentiste">Dentiste</option>
              <option value="Diététicien">Diététicien</option>
              ""{" "}
            </select>
            <br />
            <br />
            <br />

            {/* <select id="specialités2" name="AjouterautreSpecialite">
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
 */}
            <label for="specialités" className="LabelsInsc">
              Importer image<span className="star"></span>
            </label>
            <br />

            <input
              type="file"
              className="form-control"
              id="specialités2"
              name="AjouterautreSpecialite"
              // name="img"
              accept="image/png, image/jpeg "
              // onChange={(e) => setLink(e.target.files[0])}
              onChange={handleChange}
            />

            {/* <br /> */}
            <br />
            <br />

            <label for="cabinet" className="LabelsInsc">
              Nom Cabinet<span className="star">*</span>
            </label>
            <input
              type="text"
              placeholder="Votre cabinet"
              className="inputInsc"
              id="cabinet"
              name="NomCabinet"
              onChange={(e) => setNomCabinet(e.target.value)}
              required
            />
            <br />
            <br />
            <label for="numero" className="LabelsInsc">
              N° fix du Cabinet<span className="star"></span>
            </label>
            <br />
            <input
              type="number"
              placeholder="Votre Numero fix "
              className="inputInsc"
              id="Num cabinet"
              name="NfixduCabinet"
              onChange={(e) => setNfixduCabinet(e.target.value)}
              required
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
          <div className="buttonInsc" style={{ textDecoration: "none" }}>
            {" "}
            <Link to="./AuthentificationDoctor">
              <button
                type="submit"
                // value="Enregistrer"
                onClick={handleRegister}
              >
                Enregistrer
              </button>
            </Link>
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
    </div>
  );
};

export default Inscription;
