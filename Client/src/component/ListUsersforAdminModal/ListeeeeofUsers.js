// import React from 'react'
import React, { useEffect, useState } from "react";
import { Button, Modal, ModalTitle } from "react-bootstrap";

import axios from "axios";
const ListeeeeofUsers = () => {

 const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [users, SetUsers] = useState([]);
    const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => { SetViewShow(true) }
    const hanldeViewClose = () => { SetViewShow(false) }
    //FOr Edit Model
    const [ViewEdit, SetEditShow] = useState(false)
    const handleEditShow = () => { SetEditShow(true) }
    const hanldeEditClose = () => { SetEditShow(false) }
    //FOr Delete Model
    const [ViewDelete, SetDeleteShow] = useState(false)
    const handleDeleteShow = () => { SetDeleteShow(true) }
    const hanldeDeleteClose = () => { SetDeleteShow(false) }
    //FOr Add New Data Model
    const [ViewPost, SetPostShow] = useState(false)
    const handlePostShow = () => { SetPostShow(true) }
    const hanldePostClose = () => { SetPostShow(false) }

    //Define here local state that store the form Data
    const [Nom, setNom] = useState("");
    const [Prenom, setPrenom] = useState("");
      const [NTelephone, setNTelephone] = useState("");
      const [Adresse, setAdresse] = useState("");
      const [Datedenaissance, setDatedenaissance] = useState("");
    const [Email, setEmail] = useState("");
  
     const [Motdepasse, setMotdepasse] = useState("");
    

    const [Delete,setDelete] = useState(false)
    //Id for update record and Delete
    const [id,setId] = useState("");
    useEffect(async () => {
        //here we will get all users data
        const url = "http://localhost:5000/Admin/UsersList";
        axios.get(url)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    setData(data)
                    console.log(data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    })
    const handleSubmite = () => {
        const url = "http://localhost:5000/Admin/Create_User";
        const users = {
          Nom,
          Prenom,
          Datedenaissance,
          NTelephone,
          Adresse,
          Email,
          Motdepasse,
        };
        axios.post(url, users)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleEdit = () =>{
        const url = `http://localhost:5000/Admin/Update_User/${id}`;
        const users = {
          Nom,
          Prenom,
          Datedenaissance,
          NTelephone,
          Adresse,
          Email,
          Motdepasse,
        };
        axios.put(url, users)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    //handle Delete Function 
    const handleDelete = () =>{
        const url = `http://localhost:5000/Admin/Delete_Users/${id}`;
        axios.delete(url)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    //call this function in useEffect
    console.log(ViewShow, RowData)
    // useEffect(() => {
    //     GetUserData();
    // }, [])
    return (
      <div>
        <div className="row">
          <div className="mt-5 mb-4">
            <Button
              variant="primary"
              onClick={() => {
                handlePostShow();
              }}
            >
              <i className="fa fa-plu"></i>
              Add New User
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>NTelephone</th>
                  <th>Datedenaissance</th>
                  <th>Adresse</th>
                  <th>Email</th>
                  <th>Motdepasse</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item) => (
                  <tr key={item._id}>
                    <td>{item.Nom}</td>
                    <td>{item.Prenom}</td>
                    <td>{item.Datedenaissance}</td>
                    <td>{item.NTelephone}</td>
                    <td>{item.Adresse}</td>
                    <td>{item.Email}</td>
                    <td>{item.Motdepasse}</td>
                    <td style={{ minWidth: 190 }}>
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => {
                          handleViewShow(SetRowData(item));
                        }}
                      >
                        View
                      </Button>
                      |
                      <Button
                        size="sm"
                        variant="warning"
                        onClick={() => {
                          handleEditShow(SetRowData(item), setId(item._id));
                        }}
                      >
                        Edit
                      </Button>
                      |
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => {
                          handleViewShow(
                            SetRowData(item),
                            setId(item._id),
                            setDelete(true)
                          );
                        }}
                      >
                        Delete
                      </Button>
                      |
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* View Modal */}
        <div className="model-box-view">
          <Modal
            show={ViewShow}
            onHide={hanldeViewClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>View User Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={RowData.Nom}
                    readOnly
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    value={RowData.Prenom}
                    readOnly
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="date"
                    className="form-control"
                    value={RowData.Datedenaissance}
                    readOnly
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="number"
                    className="form-control"
                    value={RowData.NTelephone}
                    readOnly
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    value={RowData.Adresse}
                    readOnly
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    value={RowData.Email}
                    readOnly
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    value={RowData.Motdepasse}
                    readOnly
                  />
                </div>
                {Delete && (
                  <Button
                    type="submit"
                    className="btn btn-danger mt-4"
                    onClick={handleDelete}
                  >
                    Delete User
                  </Button>
                )}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={hanldeViewClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        {/* Modal for submit data to database */}
        <div className="model-box-view">
          <Modal
            show={ViewPost}
            onHide={hanldePostClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add new User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Please enter Name"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setPrenom(e.target.value)}
                    placeholder="Please enter Prenom"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => setDatedenaissance(e.target.value)}
                    placeholder="Please enter date de naissance"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setNTelephone(e.target.value)}
                    placeholder="Please enter Number"
                  />
                </div>

                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setAdresse(e.target.value)}
                    placeholder="Please enter Address"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Please enter email"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setMotdepasse(e.target.value)}
                    placeholder="Please enter password"
                  />
                </div>
                <Button
                  type="submit"
                  className="btn btn-success mt-4"
                  onClick={handleSubmite}
                >
                  Add User
                </Button>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={hanldePostClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        {/* Modal for Edit employee record */}
        <div className="model-box-view">
          <Modal
            show={ViewEdit}
            onHide={hanldeEditClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <div className="form-group">
                  <label>Nom</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Please enter Nom"
                    defaultValue={RowData.Nom}
                  />
                </div>
                <div className="form-group">
                  <label>Prenom</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setPrenom(e.target.value)}
                    placeholder="Please enter Prenom"
                    defaultValue={RowData.Prenom}
                  />
                </div>

                <div className="form-group mt-3">
                  <label>Numero de Telephone</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={(e) => setNTelephone(e.target.value)}
                    placeholder="Please enter Numero de telephone"
                    defaultValue={RowData.NTelephone}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Date de naissance</label>
                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => setDatedenaissance(e.target.value)}
                    placeholder="Please enter date de naissance"
                    defaultValue={RowData.Datedenaissance}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Adresse</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setAdresse(e.target.value)}
                    placeholder="Please enter Address"
                    defaultValue={RowData.Adresse}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Please enter email"
                    defaultValue={RowData.Email}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Mot de passe</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setMotdepasse(e.target.value)}
                    placeholder="Please enter password "
                    defaultValue={RowData.Motdepasse}
                  />
                </div>
                <Button
                  type="submit"
                  className="btn btn-warning mt-4"
                  onClick={handleEdit}
                >
                  Edit User
                </Button>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={hanldeEditClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
};

export default ListeeeeofUsers;