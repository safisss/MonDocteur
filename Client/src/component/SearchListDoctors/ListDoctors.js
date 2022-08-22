import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
// import StudentItem from "./StudentItem";
// import { getStudents } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import InputGroup from "../ModalUsers/InputGroup";

const ListDoctors = () => {

const [doctors, setDoctors] = useState([]);
 const [filter, setFilter] = useState("");
  const [tagfilter, setTagFilter] = useState("");
 const disptach = useDispatch();
//  const Doctors = useSelector((state) => state.studentsReducer.students);
 useEffect(async () => {
   
   await axios.get("/Doctors/AllDoctors").then((res) => {
     setDoctors(res.data.data);
     //console.log(res);
   });
 });

  const handelChange = (e) => {
    setFilter(e.target.value);
  };


  // const handelInput = (e) => {
  //   setTagFilter(e.target.value);
  // };

  return (
    <div className="TabPlace">
      {/* <!-- Modal --> */}
      {/* <div
        class="modal fade"
        id="adddoctor"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Ajouter Docteur
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div> */}

      

          <table className="tableStyle">
            <thead className="HorizontaleLineTable">
              <tr className="TableTr">
                <th className="TabH" scope="col">
                  Nom
                </th>
                <th className="TabH" scope="col">
                  Prenom
                </th>
                {/* <th className="TabH" scope="col">
                Datedenaissance
              </th> */}
                {/* <th className="TabH" scope="col">
                  AdresseProfessionnelle
                </th> */}
                <th className="TabH" scope="col">
                  Numerodetelephone
                </th>
                {/* <th className="TabH" scope="col">
                Sexe
              </th> */}

                <th className="TabH" scope="col">
                  Specialites
                </th>
                <th className="TabH" scope="col">
                  Gouvernorat
                </th>
                <th className="TabH" scope="col">
                  Email
                </th>
                {/* <th className="TabH" scope="col">
                Numerodinscriptionalordredesmedecins
              </th> */}
                {/* <th className="TabH" scope="col">
                Specialites
              </th> */}
                {/* <th className="TabH" scope="col">
                AjouterautreSpecialite
              </th> */}
                {/* <th className="TabH" scope="col">
                NomCabinet
              </th> */}
                {/* <th className="TabH" scope="col">
                NfixduCabinet
              </th> */}
                <th className="TabH" scope="col">
                  Actions
                </th>
                {/* <th scope="col">Actions</th> */}
              </tr>
            </thead>
            <tbody className="VerticaleLineTable">
              {/* {users &&
                users.map(
                  ({
                    Nom,
                    Prenom,
                    Datedenaissance,
                    Adresse,
                    NTelephone,
                    Email,
                    // Motdepasse,
                    _id,
                  }) => (
                    <RowDetails
                      Nom={Nom}
                      Prenom={Prenom}
                      Datedenaissance={Datedenaissance}
                      Adresse={Adresse}
                      NTelephone={NTelephone}
                      Email={Email}
                      // Motdepasse={Motdepasse}
                      _id={_id}
                    />
                  )
                )} */}

              {doctors &&
                doctors.map((doctor) => {
                  return (
                    <>
                      <tr className="TableTr">
                        <td className="TabV">{doctor.Nom}</td>
                        <td className="TabV">{doctor.Prenom}</td>
                        {/* <td className="TabV">{doctor.Datedenaissance}</td> */}
                        {/* <td className="TabV">
                          {doctor.AdresseProfessionnelle}
                        </td> */}
                        <td className="TabV">{doctor.Numerodetelephone}</td>
                        {/* <td className="TabV">{doctor.Sexe}</td> */}

                        {/* <td className="TabV">
                        {doctor.Numerodinscriptionalordredesmedecins}
                      </td> */}
                        <td className="TabV">{doctor.Specialites}</td>
                        <td className="TabV">{doctor.Gouvernorat}</td>
                        <td className="TabV">{doctor.Email}</td>
                        <td className="TabButton">
                          <button type="button" class="btn btn-info">
                            View
                          </button>
                        </td>
                        {/* <td className="TabV">{doctor.AjouterautreSpecialite}</td> */}
                        {/* <td className="TabV">{doctor.NomCabinet}</td>
                      <td className="TabV">{doctor.NfixduCabinet}</td> */}
                        {/* <td className="TabV">{user.id}</td> */}
                      </tr>
                    </>
                  );
                })}

              {/* <RowDetails /> */}
              {/* {users && users.map((
            
              {
                
                Nom,
                Prenom,
                Datedenaissance,
                Adresse,
               
                NTelephone,
                 Email,
                _id,
                
              }) => (  

            <RowDetails
                
                  Nom={Nom}
                  Prenom={Prenom}
                  Date de naissance={Datedenaissance}
                  Adresse={Adresse}
                  Numero Telephone={NTelephone}
                  Email={Email}
                  Id={_id}
                  //  OnDelete={OnDelete}
                />  */}
              {/* ) */}
              {/* )} */}
            </tbody>
          </table>
        </div>
      
    
  );
}

export default ListDoctors;