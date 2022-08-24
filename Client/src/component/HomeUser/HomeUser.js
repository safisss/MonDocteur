import React from "react";
import DashboardUser from "../DashboardUser/DashboardUser";
import "./home.css";
import { useState } from "react";
import { useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { getAllDoctors } from "../../Redux/Actions/Users";
import { useSelector } from "react-redux";

const HomeUser = () => {
  const [selects, setSelects] = useState("");
  // console.log(selects);
  const [cardDoctors, setCardDoctors] = useState("");
  const [search, setSearch] = useState("");
  const [searchbySpec, setSearchbySpec] = useState("");
  const [governorat, setGovernorat] = useState("");

  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleChangeSpec = (e) => {
    e.preventDefault();
    // console.log("cd ", e.target.value);
    setSearchbySpec(e.target.value);
  };

  useEffect(async () => {
    // await axios.get(`/Users/AllDoctors`).then((res) => {
    //   setCardDoctors(res.data.data);
    // });
    dispatch(getAllDoctors());
  }, [search]);

  const changeHandler = (e) => {
    setSelects(e.target.value.toLowerCase());
  };
  const handelReset = () => {
    setSelects("");
  };
  const doctors = useSelector((state) => state.ReducerUser.AllDoctors);

  console.log(doctors);

  var filtredDoctors = doctors.filter(
    (el) =>
      el.Gouvernorat.toLowerCase().includes(governorat.toLowerCase()) &&
      el.Specialites.toLowerCase().includes(searchbySpec.toLowerCase()) &&
      el.Nom.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <DashboardUser />
      <div className="Main">
        <div className="top-bar">
          <div className="contentAll">
            <div className="selectBox">
              <select
                name="Selects"
                onChange={(e) => {
                  setGovernorat(e.target.value);
                }}
              >
                <option value="">Chercher par localisation</option>
                <option value="">All</option>
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
            </div>
          </div>
        </div>

        <div>
          <div className="searchbySpecialities">
            <form>
              <input
                type="text"
                placeholder="Chercher ici par spec..."
                className="searchbySpecialitiesInputOne"
                onChange={handleChangeSpec}
              />
              <input
                className="searchbySpecialitiesInputTwo"
                type="submit"
                name=""
                value="search"
              />
            </form>
          </div>
        </div>

        <div className="searchbyname">
          <form>
            <input
              type="text"
              placeholder="Chercher par nom ici..."
              className="searchbynameInputOne"
              onChange={handleChange}
              name="searchByname"
            />
            <input
              className="searchbynameInputTwo"
              type="submit"
              name=""
              value="search"
            />
          </form>
        </div>
      </div>
      {/* MAPPING DOCTORS */}
      <div className="AllCards">
        {
          // doctors
          //   .filter((doctor) =>
          //     search && !searchbySpec && !selects
          //       ? doctor.Nom.toLowerCase().includes(search.toLowerCase())
          //       : searchbySpec && !search && !selects
          //       ? doctor.Specialites.toLowerCase().includes(
          //           searchbySpec.toLowerCase()
          //         )
          //       : search && searchbySpec && selects
          //       ? doctor.Nom.toLowerCase().includes(search.toLowerCase()) &&
          //         doctor.Specialites.toLowerCase().includes(
          //           searchbySpec.toLowerCase()
          //         ) &&
          //         doctor.Gouvernorat.toLowerCase.includes(selects)
          //       : searchbySpec && search && selects
          //       ? doctor.Specialites.toLowerCase().includes(
          //           searchbySpec.toLowerCase()
          //         ) &&
          //         doctor.Nom.toLowerCase().includes(search.toLowerCase()) &&
          //         doctor.Gouvernorat.toLowerCase.includes(selects)
          //       : selects && searchbySpec && search
          //       ? doctor.Gouvernorat.toLowerCase.includes(selects) &&
          //         doctor.Nom.toLowerCase().includes(search.toLowerCase()) &&
          //         doctor.Specialites.toLowerCase().includes(
          //           searchbySpec.toLowerCase()
          //         )
          //       : selects && !search && !searchbySpec
          //       ? doctor.Gouvernorat.toLowerCase().includes(selects)
          //       : !search && !searchbySpec
          //       ? doctor
          //       : null
          //   )

          filtredDoctors &&
            filtredDoctors.map((doctor) => {
              return (
                <div className="bContainer">
                  <div className="cardsDoctors">
                    <div className="imContent">
                      <span className="overlay"></span>
                      <div className="cardPho">
                        <img
                          className="Iphotos"
                          src={`./uploads/${doctor.img}`}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="cardContent">
                      <Fragment key={doctor._id}>
                        <h2 className="nameCard">{doctor.Nom}</h2>
                        <p className="cardDescription">{doctor.Specialites}</p>
                        <p className="cardDescription">{doctor.Gouvernorat}</p>
                        <div
                          style={{ textDecoration: "none", display: "flex" }}
                        >
                          <button
                            className="btn1CardInfos"
                            style={{ textDecoration: "none", width: "140px" }}
                          >
                            <Link
                              to={`/calendarUser/${doctor._id}`}
                              style={{
                                textDecoration: "none",
                                color: "#287bff",
                              }}
                            >
                              RDV
                            </Link>
                          </button>

                          <button
                            className="btn2CardInfos"
                            style={{
                              textDecoration: "none",
                              width: "140px",
                            }}
                          >
                            <Link
                              to={`/homeUser/viewcard/${doctor.Nom}/${doctor._id}`}
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              Profil
                            </Link>
                          </button>
                        </div>
                      </Fragment>
                    </div>
                  </div>
                </div>
              );
            })
        }
      </div>

      {/* <div className="AllCards">
        {cardDoctors && search
          ? cardDoctors
              .filter((elt) => {
                let name = elt.Nom + " " + elt.Prenom;
                return name.toLowerCase().includes(search.toLowerCase());
              })
              .map((doctor) => {
                return (
                  <div className="bContainer">
                    <div className="cardsDoctors">
                      <div className="imContent">
                        <span className="overlay"></span>
                        <div className="cardPho">
                          <img
                            className="Iphotos"
                            src={`./uploads/${doctor.img}`}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="cardContent">
                        <Fragment key={doctor._id}>
                          <h2 className="nameCard">{doctor.Nom}</h2>
                          <p className="cardDescription">
                            {doctor.Specialites}
                          </p>
                          <p className="cardDescription">
                            {doctor.Gouvernorat}
                          </p>
                          <button
                            className="btn1CardInfos"
                            style={{ textDecoration: "none", width: "140px" }}
                          >
                            <Link
                              to="/calendarDoc"
                              style={{
                                textDecoration: "none",
                                color: "#287bff",
                              }}
                            >
                              RDV
                            </Link>
                          </button>
                          <button
                            className="btn2CardInfos"
                            style={{ textDecoration: "none", width: "140px" }}
                          >
                            <Link
                              to={`/homeUser/viewcard/${doctor.Nom}`}
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              Profil
                            </Link>
                          </button>
                        </Fragment>
                      </div>
                    </div>
                  </div>
                );
              })
          : cardDoctors && searchbySpec
          ? cardDoctors
              .filter((elt) => {
                let Special = elt.Specialites;
                return Special.toLowerCase().includes(
                  searchbySpec.toLowerCase()
                );
              })
              .map((doctor) => {
                return (
                  <div className="bContainer">
                    <div className="cardsDoctors">
                      <div className="imContent">
                        <span className="overlay"></span>
                        <div className="cardPho">
                          <img
                            className="Iphotos"
                            src={`./uploads/${doctor.img}`}
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="cardContent">
                        <Fragment key={doctor._id}>
                          <h2 className="nameCard">{doctor.Nom}</h2>
                          <p className="cardDescription">
                            {doctor.Specialites}
                          </p>
                          <p className="cardDescription">
                            {doctor.Gouvernorat}
                          </p>
                          <button
                            className="btn1CardInfos"
                            style={{ textDecoration: "none", width: "140px" }}
                          >
                            <Link
                              to="/calendarDoc"
                              style={{
                                textDecoration: "none",
                                color: "#287bff",
                              }}
                            >
                              RDV
                            </Link>
                          </button>
                          <button
                            className="btn2CardInfos"
                            style={{ textDecoration: "none", width: "140px" }}
                          >
                            <Link
                              to={`/homeUser/viewcard/${doctor.Nom}`}
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              Profil
                            </Link>
                          </button>
                        </Fragment>
                      </div>
                    </div>
                  </div>
                );
              })
          : cardDoctors &&
            cardDoctors.map((doctor) => {
              return (
                <div className="bContainer">
                  <div className="cardsDoctors">
                    <div className="imContent">
                      <span className="overlay"></span>
                      <div className="cardPho">
                        <img
                          className="Iphotos"
                          src={`./uploads/${doctor.img}`}
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="cardContent">
                      <Fragment key={doctor._id}>
                        <h2 className="nameCard">{doctor.Nom}</h2>
                        <p className="cardDescription">{doctor.Specialites}</p>
                        <p className="cardDescription">{doctor.Gouvernorat}</p>
                        <div className="BtnCards">
                          {" "}
                          <button
                            className="btn1CardInfos"
                            style={{ textDecoration: "none", width: "140px" }}
                          >
                            <Link
                              to="/calendarDoc"
                              style={{
                                textDecoration: "none",
                                color: "#287bff",
                              }}
                            >
                              RDV
                            </Link>
                          </button>
                          <button
                            className="btn2CardInfos"
                            style={{ textDecoration: "none", width: "140px" }}
                          >
                            <Link
                              to={`/homeUser/viewcard/${doctor.Nom}`}
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              Profil
                            </Link>
                          </button>
                        </div>
                      </Fragment>
                    </div>
                  </div>
                </div>
              );
            })}
      </div> */}
    </div>
  );
};

export default HomeUser;
