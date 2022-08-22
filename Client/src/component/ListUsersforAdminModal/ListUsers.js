import axios from "axios";
import React, { useEffect } from "react";
import { Fragment } from "react";
import InputGroup from "../ModalUsers/InputGroup";
import RowDetails from "../ModalUsers/RowDetails";
import Alert from "../ModalUsers/Alert";
import { useHistory, useParams } from "react-router";
import "./listUsers.css";
import { useState } from "react";
import DashboardAdmin from "../DashboardAdmin/DashboardAdmin";
import { Modal, Button } from "react-bootstrap";
import { Create_User } from "../../Redux/Actions/Admin";
import { dispatch, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { UpdateUsers } from "../../Redux/Actions/Admin";
import { Delete_User } from "../../Redux/Actions/Admin";
//import UpdateUsers from "../../Redux/Actions/Admin";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [addusers, setAddusers] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [searchuser, setSearchUser] = useState("");

  // const [search, setSearch] = useState("");
  //METHODE FADIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII:

  let history = useHistory();
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Datedenaissance, setDatedenaissance] = useState("");
  const [Adresse, setAdresse] = useState("");
  const [NTelephone, setNTelephone] = useState("");
  const [Email, setEmail] = useState("");
  const [Id, setId] = useState(null);

  const sendDataDelete = (id) => {
    console.log(id);
    axios
      .delete(`/Admin/Delete_User/${id}`, {
        Nom,
        Prenom,
        Datedenaissance,
        Adresse,
        NTelephone,
        Email,
      })
      .then(() => {
        history.push("/ListUsers");
      });
  };

  /* Edit Users */

  const [updateUsers, setUpdateUsers] = useState({
    Nom,
    Prenom,
    Datedenaissance,
    Adresse,
    NTelephone,
    Email,
  });

  //  const { Nom, Prenom, Datedenaissance, Adresse, Email } = updateUsers;
  const onInputChangeUpdate = (e) => {
    setUpdateUsers({ ...updateUsers, [e.target.name]: e.target.value });
  };

  const { id } = useParams();
  const onSubmitUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`/Admin/UpdateUsers/${id}`, updateUsers);
    history.push("/");
  };

  // useEffect(() => {
  //   setNom(localStorage.getuser("Nom"));
  //   setPrenom(localStorage.getuser("Prenom"));
  //   setDatedenaissance(localStorage.getuser("Datedenaissance"));
  //   setAdresse(localStorage.getuser("Adresse"));
  //   setEmail(localStorage.getuser("Email"));
  //   setId(localStorage.getuser("Id"));
  // }, []);

  // const OnDelete = {payload.id} => {
  //    axios.delete(`/Admin/Delete_User/${payload.id}`);
  //   }

  // const onSubmitHandlerEdit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .put(`/Admin/UpdateUsers/${payload.id}`, addusers)
  //     .then((res) => {
  //       alert(res.data.data);
  //       navigate("/");
  //     })
  //     .catch((err) => setErrors(err.res.data));
  // };

  //  const OnDelete = (e) => {
  //     dispatch(Delete_User(users))}
  //  }
  // if (window.confirm("are you sure to delete this user")) {
  //   axios.delete(`/Admin/Delete_User`).then((res) => {
  //     setMessage(res.data.message);
  //     setShow(true);
  //     setTimeout(() => {
  //       setShow(false);
  //     }, 4000);
  //   });
  // }

  // const onSubmitHandlerEdit = (e) => {
  //    e.preventDefault();

  //   dispatch(UpdateUsers({ updateUsers }));
  // };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(Create_User({ addusers }));
  };

  // const onSubmitHandler = (e) => {

  //   // e.preventDefault();
  //   axios
  //     .post("http://localhost:5000/Admin/Create_User", addusers)
  //     .then((res) => {
  //       alert(res.data.data);
  //     });
  //   setAddusers({}).catch((err) => setErrors(err.response.data));
  // };

  /* find or Get all users */

  useEffect(async () => {
    // await axios.get("http://localhost:5000/Admin/UsersList").then((res) => {
    await axios.get("/Admin/UsersList").then((res) => {
      setUsers(res.data.data);
      //console.log(res);
    });
  }, [searchuser]);

  const onChangeSearch = (e) => {
    setSearchUser(e.target.value);
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    setAddusers({
      ...addusers,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="TabPlace">
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="adduser"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Ajouter Utilisateur
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
                  {/* <form className="formListUsers"  onSubmit={onSubmitHandler} > */}

                  <InputGroup
                    // for="exampleInputEmail1"
                    label="Nom"
                    id="ab"
                    type="text"
                    name="Nom"
                    onChangeHandler={onChangeHandler}
                    errors={errors.Nom}
                    // value={Nom}
                    // required
                  />

                  <InputGroup
                    label="Prenom"
                    type="text"
                    name="Prenom"
                    onChangeHandler={onChangeHandler}
                    errors={errors.Prenom}
                    // value={Prenom}
                    // required
                  />

                  <InputGroup
                    label="Datedenaissance"
                    type="date"
                    name="Datedenaissance"
                    onChangeHandler={onChangeHandler}
                    errors={errors.Datedenaissance}
                    // value={Datedenaissance}
                    // required
                  />

                  <InputGroup
                    label="Adresse"
                    type="text"
                    name="Adresse"
                    onChangeHandler={onChangeHandler}
                    errors={errors.Adresse}
                    // value={Adresse}
                    // required
                  />

                  <InputGroup
                    label="NTelephone"
                    type="number"
                    name="NTelephone"
                    onChangeHandler={onChangeHandler}
                    errors={errors.NdeTelephone}
                    // value={NTelephone}
                  />

                  <InputGroup
                    label="Email"
                    type="text"
                    name="Email"
                    onChangeHandler={onChangeHandler}
                    errors={errors.Email}
                    // value={Email}
                    // required
                  />

                  {/* <button className="btn btn-primary" type="submit">
                    Ajouter User
                  </button> */}
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
                // onSubmitHandler={onSubmitHandler}
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
          <h2>Crud Users</h2>
        </div>

        <div className="col-12 col-lg-7">
          <div className="disp">
            <button
              type="button"
              // badge-pill
              class="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#adduser"
              // style={{ width: "153px" }}
            >
              Ajouter Utilisateur
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
                  // onClick={searchRecords}
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
                {/* <th className="TabH" scope="col">
                  #
                </th> */}
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
                  Datedenaissance
                </th>
                <th className="TabH" scope="col">
                  Adresse
                </th>
                <th className="TabH" scope="col">
                  NTelephone
                </th>
                <th className="TabH" scope="col">
                  Email
                </th>
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
                      id={_id}
                    />
                  )
                )} */}

              {users
                .filter((user) =>
                  user.Nom.toLowerCase().includes(searchuser.toLowerCase())
                )
                .map((user, index) => {
                  return (
                    <>
                      <tr className="TableTr">
                        <Fragment key={user._id}>
                          <th scope="row" className="TabH">
                            {index + 1}
                          </th>

                          <td className="TabV">{user.Nom}</td>
                          <td className="TabV">{user.Prenom}</td>
                          <td className="TabV">{user.Datedenaissance}</td>
                          <td className="TabV">{user.Adresse}</td>
                          <td className="TabV">{user.NTelephone}</td>
                          <td className="TabV">{user.Email}</td>
                          <td className="TabButton">
                            <div
                              class="modal fade"
                              id="updateuser"
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
                                      Modifier Utilisateur
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
                                        // onSubmit={(e) => onSubmitUpdate(e)}
                                        onSubmit={onSubmitUpdate}
                                        // onSubmit={onSubmitHandlerEdit}
                                      >
                                        {/* <form className="formListUsers"  onSubmit={onSubmitHandler} > */}

                                        <InputGroup
                                          // for="exampleInputEmail1"
                                          label="Nom"
                                          id="ab"
                                          type="text"
                                          name="Nom"
                                          onChange={onInputChangeUpdate}
                                          onChangeHandler={onChangeSearch}
                                          errors={errors.Nom}
                                          value={Nom}
                                          // required
                                        />

                                        <InputGroup
                                          label="Prenom"
                                          type="text"
                                          name="Prenom"
                                          // onChange={(e) =>
                                          //   onInputChangeUpdate(e)
                                          // }
                                          onChange={onInputChangeUpdate}
                                          onChangeHandler={onChangeSearch}
                                          errors={errors.Prenom}
                                          value={Prenom}
                                          // required
                                        />

                                        <InputGroup
                                          label="Datedenaissance"
                                          type="date"
                                          name="Datedenaissance"
                                          onChange={onInputChangeUpdate}
                                          onChangeHandler={onChangeSearch}
                                          errors={errors.Datedenaissance}
                                          value={Datedenaissance}
                                          // required
                                        />

                                        <InputGroup
                                          label="Adresse"
                                          type="text"
                                          name="Adresse"
                                          onChange={onInputChangeUpdate}
                                          onChangeHandler={onChangeSearch}
                                          errors={errors.Adresse}
                                          value={Adresse}
                                          // required
                                        />

                                        <InputGroup
                                          label="NTelephone"
                                          type="number"
                                          name="NTelephone"
                                          onChange={onInputChangeUpdate}
                                          onChangeHandler={onChangeSearch}
                                          errors={errors.NTelephone}
                                          value={NTelephone}
                                        />

                                        <InputGroup
                                          label="Email"
                                          type="text"
                                          name="Email"
                                          onChange={onInputChangeUpdate}
                                          onChangeHandler={onChangeSearch}
                                          errors={errors.Email}
                                          value={Email}
                                          // required
                                        />

                                        {/* <button className="btn btn-primary" type="submit">
                    Ajouter User
                  </button> */}
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
                                      // onSubmitHandler={onSubmitHandler}
                                      // onClick={onSubmitHandlerEdit}
                                      data-bs-dismiss="modal"
                                    >
                                      Save changes
                                    </button>

                                    {/* <div className="col-12 col-lg-7"> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              // badge-pill
                              class="btn btn-info"
                              data-bs-toggle="modal"
                              data-bs-target="#updateuser"
                              // style="width:80px;"
                              // onClick={sendData}
                            >
                              Modifier
                            </button>

                            {/* </div> */}
                            {/* <Button variant="success" type="submit" block>
                            Edit
                          </Button> */}
                            <button
                              type="button"
                              class="btn btn-primary"
                              onClick={() => sendDataDelete(user._id)}
                            >
                              Supprimer
                            </button>
                            {/* <button type="button" class="btn btn-light">
                            <span class="bi bi-pencil"></span>
                          </button> */}
                          </td>
                        </Fragment>
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
        <DashboardAdmin />
      </div>
    </div>
  );
};

export default ListUsers;
