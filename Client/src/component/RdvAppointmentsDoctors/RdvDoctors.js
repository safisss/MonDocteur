import axios from "axios";
import "./rdvDoctors.css";

import { useState, useEffect } from "react";
import DashboardDoctor from "../DashboardDoctor/DashboardDoctor";
import React from "react";
import InputGroup from "../ModalUsers/InputGroup";

// import { dispatch, useDispatch } from "react-redux";
// import RowDetails from "../ModalUsers/RowDetails";

const RdvDoctors = () => {
  const [date, setDate] = useState();
  const handleChange = (e) => {
    setDate(e.target.value);
  };
  // const token = localStorage.getItem("token");

  const [docMessages, setDocMessages] = useState();
  // console.log(docMessages);

  // dispatch = useDispatch;
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [addappointments, setAddapppointments] = useState({});
  const token = localStorage.getItem("docToken");
  const onChangeHandler = (e) => {
    e.preventDefault();
    setAddapppointments({
      ...addappointments,
      [e.target.name]: e.target.value,
    });
  };

  /* Get MESSAGES from PATIENT*/
  useEffect(() => {
    axios
      .get("/Doctors/messages", {
        headers: {
          jwt: token,
        },
      })
      .then((res) => {
        setDocMessages(res.data.messages);
        // localStorage.setItem("rdv", docMessages.length);
        // console.log(res.data.messages);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [docMessages]);

  // console.log("docMessages", docMessages);

  return (
    <div>
      <DashboardDoctor />
      <div className="TabPlace">
        <div className="mainCalender">
          <h1 className="CalendrierDoc1">Selected Date: {date} </h1>
          <input
            type="date"
            onChange={handleChange}
            className="appointmentDocs"
          />
        </div>
        {/* </div> */}

        <div>
          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="addappointment"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Ajouter Rendez-voous
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div class="modal-body"></div>

                <div className="col-12 col-lg-4">
                  <form className="formListUsers">
                    <InputGroup
                      label="User Id"
                      type="number"
                      name="userId"
                      onChangeHandler={onChangeHandler}
                      // errors={errors.AppointmentDate}
                      required
                    />
                    <InputGroup
                      label="Message"
                      type="text"
                      name="message"
                      onChangeHandler={onChangeHandler}
                      // errors={errors.AppointmentDate}
                      required
                    />
                    <InputGroup
                      label="User Nom"
                      type="text"
                      name="userNom"
                      onChangeHandler={onChangeHandler}
                      // errors={errors.AppointmentDate}
                      required
                    />
                    <InputGroup
                      label="User Prenom"
                      type="text"
                      name="userPrenom"
                      onChangeHandler={onChangeHandler}
                      // errors={errors.AppointmentTime}
                      required
                    />
                    <InputGroup
                      label="Phone number"
                      type="tel"
                      name="phoneNumber"
                      onChangeHandler={onChangeHandler}
                      // errors={errors.Description}
                      required
                    />
                    <InputGroup
                      label="email"
                      type="email"
                      name="email"
                      onChangeHandler={onChangeHandler}
                      // errors={errors.User}
                      required
                    />

                    {/* <InputGroup
                      label="on_off"
                      type="text"
                      name="on_off"
                      onChangeHandler={onChangeHandler}
                      errors={errors.on_off}
                    /> */}
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
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row p-4">
          {/* <Alert message={message} show={show} /> */}
          <div className="mt-4">
            <h2>Crud Appointments</h2>
          </div>

          <div className="col-12 col-lg-7">
            <div>
              <button
                type="button"
                // badge-pill
                class="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#addappointment"
                // style="width:80px;"
              >
                Ajouter Rendez-vous
              </button>
            </div>
            <br />

            <table className="tableStyle">
              <thead className="HorizontaleLineTable">
                <tr className="TableTr">
                  <th className="TabH" scope="col">
                    #
                  </th>
                  {/* <th className="TabH" scope="col">
                    User Id
                  </th> */}

                  <th className="TabH" scope="col">
                    Date
                  </th>
                  <th className="TabH" scope="col">
                    User Prenom
                  </th>
                  <th className="TabH" scope="col">
                    Message
                  </th>
                  <th className="TabH" scope="col">
                    Phone Number
                  </th>

                  <th className="TabH" scope="col">
                    email
                  </th>

                  {/* <th className="TabH" scope="col">
                    on_off
                  </th> */}

                  {/* <th className="TabH" scope="col">
                    Actions
                  </th> */}
                  {/* <th scope="col">Actions</th> */}
                </tr>
              </thead>
              <tbody className="VerticaleLineTable">
                {docMessages &&
                  docMessages.map((message, index) => {
                    return (
                      <tr className="TableTr">
                        <th scope="row" className="TabH">
                          {index + 1}
                        </th>
                        <td className="TabV">{message.date}</td>
                        <td className="TabV">{message.userPrenom}</td>
                        <td className="TabV">{message.message}</td>
                        <td className="TabV">{message.phoneNumber}</td>
                        <td className="TabV">{message.email}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RdvDoctors;
