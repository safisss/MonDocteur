import React from 'react'
import axios from "axios";
import { useEffect } from "react";
import InputGroup from "../ModalUsers/InputGroup";
import RowDetails from "../ModalUsers/RowDetails";
import Alert from "../ModalUsers/Alert";

import { useState } from "react";

import { Modal, Button } from "react-bootstrap";

import { dispatch, useDispatch } from "react-redux";

import { Link } from "react-router-dom";



const EditDetailsUser = () => {

  
     const [errors, setErrors] = useState({});
    //  const [addusers, setAddusers] = useState({});
    // const [message, setMessage] = useState("");
    // const [show, setShow] = useState(false);
    // const {id} = useParams();

    // const onSubmitHandler = (e) => {
    //  e.preventDefault();
    // }
      //   axios
      //     .put("/Admin/Update_User/
      //     ${id}", addusers)
      //     .then((res) => {
            
      //     });
      //  .catch((err) => setErrors(err.res.data));
      // };
    



   






  return (
    <div>
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
                <form className="formListUsers">
                  {/* <form className="formListUsers"  onSubmit={onSubmitHandler} > */}

                  <InputGroup
                    // for="exampleInputEmail1"
                    label="Nom"
                    id="ab"
                    type="text"
                    name="Nom"
                    // onChangeHandler={onChangeHandler}
                    errors={errors.Nom}
                    
                    // required
                  />

                  <InputGroup
                    label="Prenom"
                    type="text"
                    name="Prenom"
                    // onChangeHandler={onChangeHandler}
                    errors={errors.Prenom}

                    // required
                  />

                  <InputGroup
                    label="Datedenaissance"
                    type="date"
                    name="Datedenaissance"
                    // onChangeHandler={onChangeHandler}
                    errors={errors.Datedenaissance}

                    // required
                  />

                  <InputGroup
                    label="Adresse"
                    type="text"
                    name="Adresse"
                    // onChangeHandler={onChangeHandler}
                    errors={errors.Adresse}

                    // required
                  />

                  <InputGroup
                    label="NTelephone"
                    type="number"
                    name="NTelephone"
                    // onChangeHandler={onChangeHandler}
                    errors={errors.NdeTelephone}
                  />

                  <InputGroup
                    label="Email"
                    type="text"
                    name="Email"
                    // onChangeHandler={onChangeHandler}
                    errors={errors.Email}
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
                // onClick={onSubmitHandler}
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
       </div>
  );
               
}

export default EditDetailsUser;