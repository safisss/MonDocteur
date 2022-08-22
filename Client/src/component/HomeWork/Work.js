import React from "react";
// import NavBar from "../NavBar/NavBar.js";
import "./workStyle.css";

// import {
//   WorkSection,
//   WorkTitle,
//   Span,
//   Workpart,
//   Icon,
//   PartTitle,
//   Line,
//   PartDesc,
// } from "./workStyle.js";
//  import axios from "axios";
// import { useState, useEffect } from "react";

  const Work = () => {
//   const [List,setList] = useState([])

//   useEffect(()=>{
//   axios.get('js/data.json').then(res=>{console.log(res)})
//   },[])

  return (
    <div className="work">
      <div className="ContainerWork">
        <h2 className="WorkTitle" >
          {" "}
          Notre Site Web
          <span> Mon Docteur</span>{" "}
        </h2>
        <div className="part first">
          <i
            className="icon fa fa-chain fa-2x"
            style={{ color: "rgb(230, 201, 13)" }}
          ></i>
          <h4 className="PartTitle">Mission</h4>
          <hr className="line" />
          <p className="PartDescrip">
            Mon Docteur s’est donné pour mission de faciliter la prise des
            rendez-vous pour les patients ainsi l’accès aux soins des patients
            auprès des médecins.
          </p>
        </div>

        <div className="part">
          <i
            className="icon fa fa-bolt fa-2x"
            style={{ color: "rgb(230, 201, 13)" }}
          ></i>
          <h4 className="PartTitle">Clarification</h4>
          <hr className="line" />
          <p className="PartDescrip">
            Mon Docteur n'utilise pas vos données médicales autres que la prise
            de rendez-vous et celles-ci ne sont pas réutilisées dans d’autres
            projets.
          </p>
        </div>

        <div className="part last">
          <i
            className="icon fa fa-tachometer fa-2x"
            style={{ color: "rgb(230, 201, 13)" }}
          ></i>
          <h4 className="PartTitle">Annuaire</h4>
          <hr className="line" />
          <p className="PartDescrip">
            Mon Docteur est un annuaire qui vous permet de retrouver des
            praticiens et d'enregistrer vos demandes de rendez-vous.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
