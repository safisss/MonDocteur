import React from 'react';
//import { Link } from 'react-router-dom';

 
const RowDetails = ({
  Nom,
  Prenom,
  Adresse,
  Datedenaissance,
  NTelephone,
  Email,
  _id,
  // OnDelete,
  // Motdepasse,
}) => {
  return (
    <div>
      <tr>
        <th>{Nom}</th>
        <td>{Prenom}</td>
        <td>{Adresse}</td>
        <td>{Datedenaissance}</td>
        <td>{NTelephone}</td>
        <td>{Email}</td>
        <td>{_id}</td>
        {/* <td>{Motdepasse}</td> */}
        <td className="gap__actions">
          <span className="badge bg-info">
            {/* <Link to={`/${Id}`} className="text-white">
              <i className="fas fa-edit"></i>
            </Link> */}
          </span>

           {/* <span className="badge bg-danger" onClick={() => OnDelete()}/> */}
            {/* <i className="fas fa-trash-alt"></i>  */}

          {/* </span> */}
        </td>
      </tr>
    </div>
  );
};
export default RowDetails;