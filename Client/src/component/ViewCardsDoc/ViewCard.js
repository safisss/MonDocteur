import React from "react";
import DashboardUser from "../DashboardUser/DashboardUser";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
// import { adminGetDoctors } from "../../Redux/Actions/Admin";
import axios from "axios";
// import { LOADING } from "../../Redux/Constants/ActionsTypes";
const ViewCard = () => {
  const [show, setShow] = useState(false);
  // const [profile, setProfile] = useState({});
  const [userMessage, setUserMessage] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { name, doctorId } = useParams();
  const doctors = useSelector((state) => state.ReducerUser.AllDoctors);
  const profile = doctors.find((elt) => elt.Nom.includes(name));
  const token = localStorage.getItem("token");
  // useEffect(() => {
  //   setProfile(targedDoctor);
  // }, [doctors, name]);

  const handleChange = (e) => {
    setUserMessage({ ...userMessage, [e.target.name]: e.target.value });
  };
  const handleSave = (e) => {
    axios
      .post(`/Users/message/${doctorId}`, userMessage, {
        headers: {
          jwt: token,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.dir(err));
    handleClose();
  };
  return (
    <div>
      <DashboardUser />
      {name && doctorId ? (
        <>
          <div className="bg-light" style={{ paddingLeft: "250px" }}>
            <div className="container" style={{ paddingTop: "90px" }}>
              <div className="row d-flex justify-content-center">
                <div className="col-md-10 mt-5 pt-5">
                  <div className="row z-depth-3">
                    <div className="col-sm-4 bg-info rounded-left">
                      <div
                        className="card-block text-center text-white"
                        style={{ backgroundColor: "#287bff" }}
                      >
                        <i class="fas fa-user-tie fa-7x mt-5"></i>
                        <h2 className="font-weight-bold mt-4">{profile.Nom}</h2>
                        <p>{profile.Specialites}</p>
                        <i class="far fa-edit fa-2x mb-4"></i>
                      </div>
                    </div>
                    <div className="col-sm-8 bg-white rounded-right">
                      <h3 class="mt-3 text-center">Informations</h3>
                      <hr className="bg-primary mt-0 w-25" />
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="font-weight-bold">
                            Email : {profile.Email}
                          </p>
                          <h6 className="text-muted"></h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="font-weight-bold">
                            Numéro de Telephone : {profile.Numerodetelephone}
                          </p>
                          <h6 className="text-muted"></h6>
                        </div>
                      </div>

                      <hr className="bg-primary" />
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="font-weight-bold">
                            Nom : {profile.Nom}
                          </p>
                          <h6 className="text-muted">
                            Specialités : {profile.Specialites}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="font-weight-bold">
                            Gouvernorat : {profile.Gouvernorat}
                          </p>
                          <h6 className="text-muted">
                            Adresse Profesionnelle :{" "}
                            {profile.AdresseProfessionnelle}
                          </h6>
                        </div>
                      </div>
                      <hr className="bg-primary" />
                      <button
                        className="mt-3"
                        style={{
                          fontSize: "18px",
                          padding: "10px",
                          // backgroundColor: "#0dcaf0",
                          backgroundColor: "#287bff",
                          border: "1px solid white",
                          color: "white",
                          fontWeight: "bolder",
                          // marginLeft:"230px"
                        }}
                        onClick={handleShow}
                      >
                        Prendre un Rendez-vous
                      </button>
                      <ul className="list-unstyled d-flex justify-content-center mt-4">
                        <li>
                          <Link to="#">
                            <i class="fab fa-facebook-f px-3 h4 text-info"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i class="fab fa-youtube px-3 h4 text-info"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i class="fab fa-twitter px-3 h4 text-info"></i>
                          </Link>
                        </li>
                      </ul>

                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Prise de rendez vous</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          >
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Phone Number</Form.Label>
                              <Form.Control
                                type="tel"
                                placeholder="e.g 1235656789"
                                autoFocus
                                name="phoneNumber"
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Select Date</Form.Label>
                              <Form.Control
                                type="date"
                                placeholder="e.g 01/01/2022"
                                autoFocus
                                name="date"
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label>Your Message</Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={3}
                                name="message"
                                placeholder="write your message here"
                              />
                            </Form.Group>
                          </Form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button
                            variant="primary"
                            type="button"
                            onClick={(e) => {
                              handleSave(e);
                            }}
                          >
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
};

export default ViewCard;
