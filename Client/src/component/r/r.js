import React from "react";
import bgVid from "../../Videos/vid3.mp4";

import DashboardUser from "../DashboardUser/DashboardUser";
const r = () => {
  return (
    <div>
      <DashboardUser />
      <div className="Vid">
        <video autoPlay loop muted>
          <source src={bgVid} type="video/mp4" />
        </video>
      
      </div>
    </div>
  );
};

export default r;
