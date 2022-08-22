import React from 'react';
import './ModifyDoctor.css';
import axios from "axios";


const ProfileUser = () => {
const [userInfos, setUserInfos] = useState({});



  
  const handelAddInfos = (e) => {
    setUserInfos({ ...userInfos, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="formulaireUser" onChange={handelAddInfos}>
        <div className="barreUser"></div> <br />
        <form className="formUtilisateur">
          <h2>Modifier vos informations</h2>
          <div className="form1User">
            <label for="nom">
              Nom<span className="star">*</span>
            </label>
            <br />

            <input
              type="text"
              placeholder="Votre Nom"
              required
              className="inputUser"
              id="nom"
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
              required
              className="inputUser"
              id="prénom"
            />
            <br />
            <br />

            <label for="adresse">
              Adresse Professionnelle<span className="star">*</span>
            </label>
            <br />

            <input
              type="text"
              placeholder="Votre Adresse"
              required
              className="inputUser"
              id="adresse"
            />
            <br />
            <br />

            <label for="tel">
              N° de télephone<span className="star">*</span>
            </label>
            <br />
            <br />

            <input
              type="number"
              placeholder="Votre Téléphone"
              required
              className="inputUser"
              id="tel"
            />
            <br />
            <br />
            <br />

            {/* <label for="sexe">Sexe<span class="star">*

Homme<input type="radio" required class="input" name="sexe" checked/>
Femme<input type="radio" required class="input" name="sexe"/>
</span>
</label> */}

            <label for="sexe">
              Sexe<span className="star">*</span>
              <select value="Select" className="gender">
                {/* <option value="H">Options</option> */}
                <option value="H">Homme</option>
                <option value="F">Femme</option>
              </select>
            </label>
            <br />
            <br />
            <br />
            {/* <label for="sexe"> Sexe <input type="radio" name="sex" value="H" checked/> Homme <input type="radio" name="sex" value="F"/> Femme</label><br/><br/> */}

            <label for="date">
              Date de naissance<span className="star">*</span>
            </label>
            <br />

            <input type="date" className="inputUser" id="date" />
            <br />
            <br />

            <label for="email">
              Email<span className="star">*</span>
            </label>
            <br />

            <input
              type="email"
              placeholder="Doctor@gmail.com"
              required
              className="inputUser"
              id="email"
            />
            <br />
            <br />
          </div>
          <div className="form2">
            <label for="password">
              Mot de passe<span className="star">*</span>
            </label>
            <br />
            <input
              type="password"
              placeholder="votre mot de passe"
              required
              className="inputUser"
              id="password"
            />
            <br />
            <br />

            <label for="gouvernorat">
              Gouvernorat<span className="star">*</span>
            </label>
            <select id="gouvernorat" className="inputUser">
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

            <label for="numInscri">
              N° d'inscription à l'Ordre des médecins
              <span className="star">*</span>
            </label>
            <br />

            <input
              type="text"
              placeholder="Votre N° d'inscri à d'ordre des médecins"
              required
              className="inputUser"
              id="numInscri"
            />
            <br />
            <br />
            <br />
            <label for="specialités">
              Spécialités<span className="star">*</span>
            </label>
            <select id="specialités" className="inputUser">
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
            <label for="specialités">
              Ajouter autres Spécialité<span className="star"></span>
            </label>
            <br />

            <select id="specialités" className="inputUser">
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

            <label for="cabinet">
              Nom Cabinet<span className="star">*</span>
            </label>
            <input
              type="text"
              placeholder="Votre cabinet"
              required
              className="inputUser"
              id="cabinet"
            />
            <br />
            <br />
            <label for="numero">
              N° fix du Cabinet<span className="star"></span>
            </label>
            <br />
            <input
              type="number"
              placeholder="Votre Numero fix "
              required
              className="inputUser"
              id="Num cabinet"
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
          <div className="buttonUsqer">
            <input type="submit" value="Enregistrer" />

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

export default ProfileUser;