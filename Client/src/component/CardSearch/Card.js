// import React from "react";
// import ReactStars from "react-rating-stars-component";
// import DashboardUser from "../DashboardUser/DashboardUser";
// import axios from "axios";
// import { useEffect, Fragment } from "react";
// import InputGroup from "../ModalUsers/InputGroup";

// import "./card.css";
// import { GET_List_All_Doctors } from "../../Redux/Actions/Users";
// import { useState } from "react";
// // import { SchemaDoc } from "../../../../Model/SchemaDoctor";
// import { useDispatch } from "react-redux";
// //import DashboardUser from "../DashboardUser/DashboardUser";
// //import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// const Card= () => {
//   const [selects, setSelects] = useState("");
//   const [cardDoctors, setCardDoctors] = useState();
//   const [search, setSearch] = useState("");
//   // const [reset, setReset] = useState(true);

//   useEffect(async () => {
//     await axios.get(`/Users/AllDoctors`).then((res) => {
//       setCardDoctors(res.data.data);
//       //console.log(res);
//     });
//   }, [search]);
//   const handleChange = (e) => {
//     e.preventDefault();
//     setSearch(e.target.value);
//   };

//   const changeHandler = async (e) => {
//     // console.log(cardDoctors);
//     if (e.target.value == "all") {
//       await axios.get(`/Users/AllDoctors`).then((res) => {
//         setCardDoctors(res.data.data);
//         //console.log(res);
//       });
//     } else {
//       await axios.get(`/Users/AllDoctors`).then((res) => {
//         setCardDoctors(
//           res.data.data.filter(
//             (el) => el.Gouvernorat == e.target.value.toLowerCase()
//           )
//         );
//         //console.log(res);
//       });
//     }

//     // await axios
//     //   .get(`/Users/find/Gouvernorat/${e.target.value.toLowerCase()}`)

//     //   .then((res) => {
//     //     setCardDoctors(res.data.doctorInfo);
//     //   })
//     //   .catch((err) => console.dir(err));
//   };
//   //setCardDoctors({ ...SchemaDoc, [e.target.name]: e.target.value });

//   // const dispatch = useDispatch();
//   //  const handleCards = (e) => {
//   //   //   e.preventDefault();
//   //    dispatch(GET_List_All_Doctors(cardDoctors));
//   //   };

//   return (
//     <div>
//       <DashboardUser />

//       <div className="Main">
//         <div className="top-bar">
//           {/* <div class="toggle"><ion-icon name="menu-outline"></ion-icon></div>
//            */}
//           <div className="contentAll">
//             <div className="selectBox">
//               {/* <div class="content">
//           <div class="Search">
//             <i class="fas fa-search"></i>
//             <input type="text" placeholder="Search" />
//           </div> */}

//               <select name="Selects" onChange={changeHandler}>
//                 <option>Chercher par localisation</option>
//                 <option value="all">All</option>
//                 <option value="Ariana">Ariana</option>
//                 <option value="Beja">Beja</option>
//                 <option value="Ben Arous">Ben Arous</option>
//                 <option value="Bizerte">Bizerte</option>
//                 <option value="Gabes">Gabes</option>
//                 <option value="Gafsa">Gafsa</option>
//                 <option value="Jendouba">Jendouba</option>
//                 <option value="Kairouan">Kairouan</option>
//                 <option value="kasserine">kasserine</option>
//                 <option value="kébili">kébili</option>
//                 <option value="kef">kef</option>
//                 <option value="Mahdia">Mahdia</option>
//                 <option value="Manouba">Manouba</option>
//                 <option value="Medenine">Medenine</option>
//                 <option value="Monastir">Monastir</option>
//                 <option value="Nabeul">Nabeul</option>
//                 <option value="Sfax">Sfax</option>
//                 <option value="Sidi Bouzid">Sidi Bouzid</option>
//                 <option value="Siliana">Siliana</option>
//                 <option value="Sousse">Sousse</option>
//                 <option value="Tataouine">Tataouine</option>
//                 <option value="Tozeur">Tozeur</option>
//                 <option value="Tunis">Tunis</option>
//                 <option value="Zaghouan">Zaghouan</option>
//                 {/* <button onClick={handelReset}></button> */}
//               </select>
//             </div>
//           </div>
//         </div>
//         <div className="searchbySpecialities">
//           <label>
//             <input
//               type="text"
//               placeholder="Chercher ici par spec..."
//               // onChange={handleChange}
//               name="searchBySpec"
//             />
//             {/* <i class="fas fa-search"></i> */}
//           </label>
//         </div>
//         <div className="searchbyname">
//           <label>
//             <input
//               type="text"
//               placeholder="Chercher par nom ici..."
//               onChange={handleChange}
//               name="searchByname"
//             />
//             {/* <i class="fas fa-search"></i> */}
//           </label>
//         </div>
//       </div>

//       <div className="TabPlace">
//         {/* <!-- Modal --> */}
//         <div
//           class="modal fade"
//           id="viewoctor"
//           tabindex="-1"
//           aria-labelledby="exampleModalLabel"
//           aria-hidden="true"
//         >
//           <div class="modal-dialog">
//             <div class="modal-content">
//               <div class="modal-header"></div>
//             </div>
//           </div>
//         </div>

//         <table className="tableStyle">
//           <thead className="HorizontaleLineTable">
//             <tr className="TableTr">
//               <th className="TabH" scope="col">
//                 Nom
//               </th>
//               <th className="TabH" scope="col">
//                 Prenom
//               </th>
//               <th className="TabH" scope="col">
//                 Numerodetelephone
//               </th>

//               <th className="TabH" scope="col">
//                 Specialites
//               </th>
//               <th className="TabH" scope="col">
//                 Gouvernorat
//               </th>
//               <th className="TabH" scope="col">
//                 Email
//               </th>
//               <th className="TabH" scope="col">
//                 Actions
//               </th>
//               {/* <th scope="col">Actions</th> */}
//             </tr>
//           </thead>

//           <tbody className="VerticaleLineTable">
//             {cardDoctors && search
//               ? // cardDoctors && search
//                 cardDoctors
//                   //  cardDoctors
//                   .filter((elt) => elt.Nom === search)
//                   // let elt Name= [elt.Nom + '' + elt.Prenom]
//                   .map((doctor) => {
//                     return (
//                       <Fragment key={doctor.id}>
//                         <tr className="TableTr">
//                           <td className="TabV">{doctor.Nom}</td>
//                           <td className="TabV">{doctor.Prenom}</td>
//                           <td className="TabV">{doctor.Numerodetelephone}</td>
//                           <td className="TabV">{doctor.Specialites}</td>
//                           <td className="TabV">{doctor.Gouvernorat}</td>
//                           <td className="TabV">{doctor.Email}</td>
//                           <td className="TabButton">
//                             <button
//                               type="button"
//                               class="btn btn-info"
//                               data-bs-toggle="modal"
//                               data-bs-target="#viewdoctor"
//                             >
//                               Profile
//                             </button>
//                           </td>
//                         </tr>
//                       </Fragment>
//                     );
//                   })
//               : cardDoctors &&
//                 cardDoctors.map((doctor) => {
//                   return (
//                     <Fragment key={doctor._id}>
//                       <tr className="TableTr">
//                         <td className="TabV">{doctor.Nom}</td>
//                         <td className="TabV">{doctor.Prenom}</td>
//                         <td className="TabV">{doctor.Numerodetelephone}</td>
//                         <td className="TabV">{doctor.Specialites}</td>
//                         <td className="TabV">{doctor.Gouvernorat}</td>
//                         <td className="TabV">{doctor.Email}</td>
//                       </tr>
//                     </Fragment>
//                   );
//                 })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Card;
