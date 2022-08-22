import axios from "axios";
import React, { useEffect } from "react";
import { Fragment } from "react";
import InputGroup from "../ModalUsers/InputGroup";
import { useHistory } from "react-router";
// import RowDetails from "../ModalUsers/RowDetails";
// import "./ comptesDoctors.css";
import { useState } from "react";
import DashboardAdmin from "../DashboardAdmin/DashboardAdmin";
import { Create_Doctor } from "../../Redux/Actions/Admin";
import { useDispatch } from "react-redux";
import { UpdateDoctors } from "../../Redux/Actions/Admin";
//import {payload} from "../../Redux/Actions/Admin"

const ComptesDoctors = ({ setShow, post }) => {

  const [doctors, setDoctors] = useState([]);
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [adddoctors, setAdddoctors] = useState({});
  const [errors, setErrors] = useState({});
  const [searchdoctor, setSearchDoctor] = useState("");
  // console.log(searchdoctor);
  const [updateDoctor, setUpdateDoctor] = useState({
    // Nom,
    // Prenom,
    // VerifyAccount,
    // Specialites,
    // Gouvernorat,
    // Email,
  });

  let history = useHistory();
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [VerifyAccount, setVerifyAccount] = useState("");
  const [Specialites, setSpecialites] = useState("");
  const [Gouvernorat, setGouvernorat] = useState("");
  const [Email, setEmail] = useState("");
  const [Id, setId] = useState(null);

  const sendDataDeleteDoctor = (id) => {
    console.log(id);
    axios
      .delete(`/Admin/removeDoctors/${id}`, {
        Nom,
        Prenom,
        VerifyAccount,
        Specialites,
        Gouvernorat,
        Email,
      })
      .then(async () => {
        await axios.get("/Admin/AllDoctors").then((res) => {
          setDoctors(res.data.data);
          //console.log(res);
        });
      });
  };

  const handleClose = () => setShow(false);

  const handleUpdate = () => {
    dispatch(UpdateDoctors(updateDoctor));
    setShow(false);
  };

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   axios.post("/Admin/Create_Doctors", form).then((res) => {
  //     alert(res.data.data);
  //   });
  //   setForm({}).catch((err) => setErrors(err.response.data));
  // };

  /* ADD users */

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(Create_Doctor({ adddoctors }));
  };

  /* find all doctors */
  useEffect(async () => {
    // await axios.get("http://localhost:5000/Admin/UsersList").then((res) => {
    await axios.get("/Admin/AllDoctors").then((res) => {
      setDoctors(res.data.data);
      //console.log(res);
    });
  }, [searchdoctor]);

  // , []

  const onChangeSearch = (e) => {
    setSearchDoctor(e.target.value);
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    setAdddoctors({
      ...adddoctors,
      [e.target.name]: e.target.value,
    });
  };

  // useEffect(() => {
  //   first;

  // }, [doctors]);

  const changeStatus = (id) => {
    console.log(id);
    axios.put(`/Admin/VerifyLoginDoctor/${id}`);
    window.location.reload();
  };

  return (
    <div className="TabPlace">
      {/* <!-- Modal --> */}
      <div
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
            </div>

            <div class="modal-body">
              <div className="col-12 col-lg-4">
                <form className="formListUsers" onSubmit={onSubmitHandler}>
                  {/* <form className="formListUsers"> */}

                  <InputGroup
                    label="Nom"
                    type="text"
                    name="Nom"
                    onChangeHandler={onChangeHandler}
                    errors={errors.Nom}
                    // required
                  />

                  <InputGroup
                    label="Prenom"
                    type="text"
                    name="Prenom"
                    onChangeHandler={onChangeHandler}
                    errors={errors.Prenom}
                    // required
                  />

                  <InputGroup
                    label="VerifyAccount"
                    type="text"
                    name="VerifyAccount"
                    onChangeHandler={onChangeHandler}
                    errors={errors.VerifyAccount}
                  />

                  <InputGroup
                    label="Specialites"
                    type="text"
                    name="Specialites"
                    onChangeHandler={onChangeHandler}
                    errors={errors.Specialites}
                    // required
                  />
                  <InputGroup
                    label="Gouvernorat"
                    type="text"
                    name="Gouvernorat"
                    onChangeHandler={onChangeHandler}
                    errors={errors.Gouvernorat}
                    // required
                  />

                  <InputGroup
                    label="Email"
                    type="text"
                    name="Email"
                    onChangeHandler={onChangeHandler}
                    errors={errors.Email}
                    // required
                  />
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button
                type="button"
                class="btn btn-primary"
                onClick={onSubmitHandler}
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-4">
        {/* <Alert message={message} show={show} /> */}
        <div className="mt-4">
          <h2>Crud Doctors</h2>
        </div>

        <div className="col-12 col-lg-7">
          <div className="disp">
            <button
              type="button"
              // badge-pill
              class="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#adddoctor"
              // style={{ width: "153px" }}
            >
              Ajouter docteur
            </button>
            <div className="displ" style={{ height: "50px" }}>
              <div class="input-group mb-4 mt-3" id="accd">
                <div class="formOutline">
                  <input
                    type="text"
                    id="form1"
                    onChange={(e) => onChangeSearch(e)}
                    class="form-control"
                    placeholder="Search Here"
                    style={{ backgroundColor: "#ececec" }}
                  />
                </div>

                <button
                  type="button"
                  // onClick={clicknamedoctor}
                  class="btn btn-warning"
                >
                  <i
                    class="fa fa-search"
                    aria-hidden="true"
                    style={{ color: "#ececec" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
          <br />

          <table className="tableStyle">
            <thead className="HorizontaleLineTable">
              <tr className="TableTr">
                <th className="TabH" scope="col">
                  #
                </th>
                <th className="TabH" scope="col">
                  Nom
                </th>
                <th className="TabH" scope="col">
                  Prenom
                </th>

                <th className="TabH" scope="col">
                  Verify Account
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

                <th className="TabH" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="VerticaleLineTable">
              {doctors
                .filter((doctor) =>
                  doctor.Nom.toLowerCase().includes(searchdoctor.toLowerCase())
                )
                .map((doctor, index) => {
                  return (
                    <>
                      <tr className="TableTr">
                        <Fragment key={doctor._id}>
                          <th scope="row" className="TabH">
                            {index + 1}
                          </th>
                          <td className="TabV">{doctor.Nom}</td>
                          <td className="TabV">{doctor.Prenom}</td>

                          <td className="TabV">{doctor.VerifyAccount}</td>

                          <td className="TabV">{doctor.Specialites}</td>
                          <td className="TabV">{doctor.Gouvernorat}</td>
                          <td className="TabV">{doctor.Email}</td>
                          <td className="TabButton">
                            <div
                              class="modal fade"
                              id="updatedoctor"
                              tabindex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5
                                      class="modal-title"
                                      id="exampleModalLabel"
                                    >
                                      Modifier Docteur
                                    </h5>
                                    <button
                                      type="button"
                                      class="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>

                                  <div class="modal-body">
                                    <div className="col-12 col-lg-4">
                                      <form
                                        className="formListUsers"
                                        onSubmit={onSubmitHandler}
                                      >
                                        <InputGroup
                                          label="Nom"
                                          type="text"
                                          name="Nom"
                                          onChangeHandler={onChangeSearch}
                                          errors={errors.Nom}
                                          value={form.Nom}
                                          // required
                                        />

                                        <InputGroup
                                          label="Prenom"
                                          type="text"
                                          name="Prenom"
                                          onChangeHandler={onChangeSearch}
                                          errors={errors.Prenom}
                                          value={form.Prenom}
                                          // required
                                        />

                                        <InputGroup
                                          label="VerifyAccount"
                                          type="text"
                                          name="VerifyAccount"
                                          onChangeHandler={onChangeSearch}
                                          errors={errors.VerifyAccount}
                                          value={form.VerifyAccount}
                                        />

                                        <InputGroup
                                          label="Specialites"
                                          type="text"
                                          name="Specialites"
                                          onChangeHandler={onChangeSearch}
                                          errors={errors.Specialites}
                                          value={form.Specialites}
                                          // required
                                        />

                                        <InputGroup
                                          label="Gouvernorat"
                                          type="text"
                                          name="Gouvernorat"
                                          onChangeHandler={onChangeSearch}
                                          errors={errors.Gouvernorat}
                                          value={form.Gouvernorat}
                                          // required
                                        />

                                        <InputGroup
                                          label="Email"
                                          type="text"
                                          name="Email"
                                          onChangeHandler={onChangeSearch}
                                          errors={errors.Email}
                                          value={form.Email}
                                          // required
                                        />
                                      </form>
                                    </div>
                                  </div>
                                  <div class="modal-footer">
                                    <button
                                      type="button"
                                      class="btn btn-secondary"
                                      data-bs-dismiss="modal"
                                      onClick={handleClose}
                                    >
                                      Close
                                    </button>

                                    <button
                                      type="button"
                                      class="btn btn-primary"
                                      onClick={handleUpdate}
                                      data-bs-dismiss="modal"
                                    >
                                      Save changes
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <button
                              type="button"
                              class="btn btn-info"
                              data-bs-toggle="modal"
                              data-bs-target="#updatedoctor"
                              
                            >
                              Modifier
                            </button>
                            {/* <br/> */}
                            <button
                              type="button"
                              class="btn btn-primary"
                              onClick={() => sendDataDeleteDoctor(doctor._id)}
                            >
                              Supprimer
                            </button>
                            <button
                              type="button"
                              class="btn btn-warning"
                              onClick={() => {
                                changeStatus(doctor._id);
                              }}
                            >
                              Statut
                            </button>
                          </td>
                        </Fragment>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <DashboardAdmin />
    </div>
  );
};

export default ComptesDoctors;
