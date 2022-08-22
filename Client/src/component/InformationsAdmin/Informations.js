import React from 'react'
import "./informationsAdmin.css";
import ii from "../../images/hello.jpg";
import DashboardAdmin from '../DashboardAdmin/DashboardAdmin';
const Informations = () => {
  return (
    <div className="cardsAdmins">
      <div className="fwRow">
        <div className="shColumn">
          <div className="shColumnWrapper">
            <img src={ii} alt="tesst" className="imTeamApp" />
          </div>
          <div className="teamOverlay">
            {/* <h3>Admin : </h3> */}
            <h2>safé Sellami</h2>

            <p>Full Stack Web Developper</p>
          </div>
        </div>
        <div className="shColumn">
          <div className="shColumnWrapper">
            <img src={ii} alt="tesst" className="imTeamApp" />
          </div>
          <div className="teamOverlay">
            {/* <h3>Admin : </h3> */}
            <h2>Najet Souissi</h2>

            <p>Full Stack Web Developper</p>
          </div>
        </div>
      </div>

      <DashboardAdmin />
    </div>
  );
}

export default Informations;