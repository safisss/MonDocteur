import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="creativeSite">
      <div className="containerSite">
        <div className="creativeInfo">
          <h2 className="SiteInfoTitle">
            <span>Notre</span> Site Web
          </h2>
          {/* <h4 className="NomSite">Mon Docteur</h4> */}
          <p className="DescriptionSite">
            <Link to="#">Mon Docteur</Link> Est un site internet qui vous permettant
            de trouver des médecins et des praticiens (généraliste,
            spécialiste...) près de chez vous et de prendre rendez-vous avec
            eux, directement en ligne via la plateforme.{" "}
          </p>
          <p className="DescriptionSite">
          
            <Link to="#">Mon Docteur</Link> Vous permet de centraliser les
            différents rendez-vous auprès des praticiens que vous avez sollicité
            par le biais de notre annuaire.
          </p>
          <p className="DescriptionSite">
            Pour les professionnels de santé lorsque vous demandez de vous
            inscrire, c’est le site qui vous confirme si votre créneau a bien
            été enregistré. Nous validons d’abord votre « Demande d'inscription
            » puis, en cas d'acceptation', vous recevez un email de confirmation
            pour y accéder au site. En cas de besoin vous pouvez également nous
            contacter via cette page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
