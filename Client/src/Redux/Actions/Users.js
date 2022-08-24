import axios from "axios";
import { useState } from "react";

//import ValidationLogin from "../../../../Validation/ValidationLogin";
//const { SchemaDoc } = require("../Model/SchemaDoctor");
//import { AlertActions } from "../Constants/AlertActions";
import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from "../Constants/ActionsTypes";

import {
  GET_USER_PROFILE,
  CLOSE_MODAL,
  OPEN_MODAL,
  OPEN_EMAIL_MODAL,
  CLOSE_EMAIL_MODAL,
  CLOSE_ADD_Appointment,
  ADD_Message,
  GET_PROFILE_USER,
  GET_Doctors_BY_Localisation,
  GET_Doctors_BY_Rating,
  GET_Doctors_BY_Name,
  GET_List_All_Doctors,
  GET_Appointments,
} from "../Constants/ActionsTypes";
//import { Redirect } from "react-router-dom";
//import { useHistory } from "react-router-dom";
//const router = require("express").Router();

//REGISTER_USER

export const register = (user, history) => async (dispatch) => {
  try {
    console.log(user);
    let result = await axios.post("/Users/InscriptionUser", user);
    if (result.data.status) {
      //dispatch(AlertActions.success("Registration successful"));
      dispatch({ type: REGISTER_USER, payload: result.data });
      history.push("./AuthentificationUser");
      //  history.push("./AuthentificationUser");
    } else {
      alert(result.data.msg);
    }
  } catch (error) {
    if (error) {
      console.dir(error);
    }
  }
};

//LOGIN USER

export const login = (user, history) => async (dispatch, payload) => {
  try {
    let result = await axios.post("/Users/Login", user);
    console.log(result);
    if (result.data.status) {
      dispatch({ type: LOGIN_USER, payload: result.data });
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("isUser", result.data.data.Role);
      history.push(`/DashboardUtilisateur`);
    } else {
      alert(result.data.msg);
    }
  } catch (error) {
    console.dir(error);
    dispatch({ type: "LOGIN_ERROR", payload: error.response.data.message });
  }
};

//LOGIN USER : ANOUAR

// export const login = (payload, history) => async (dispatch) => {
//   try {
//     let result = await axios.post("/Users/Login", payload.user);
//     console.log(result);
//     if (result.data.status) {
//       dispatch({ type: LOGIN_USER, payload: result });
//       history.push(`/DashboardUser/${payload.user._id}`);
//       // <Redirect to="/DashboardUser" />;
//     } else {
//       alert(result.data.msg);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

//LOGOUT USER
export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

//Get profile User

export const getUserProfile = (payload) => (dispatch) => {
  axios
    .get(`/Users/UserInfos/${payload.id}`, {
      headers: {
        jwt: payload.token,
      },
    })
    .then((res) => {
      dispatch({ type: GET_USER_PROFILE, payload: res.data.data });
    })
    .catch((err) => console.dir(err));
};

//Edit Profile User *****************************************************************

export const editProfile = (payload) => (dispatch) => {
  axios
    .put(`/Users/editContact/${payload.id}`, payload.updatedProfile)
    .then(() => dispatch(GET_PROFILE_USER()))
    .catch((err) => console.log(err));
};

//Get List Doctors

export const getAllDoctors = () => (dispatch, payload) => {
  axios
    .get(`/Users/AllDoctors`)
    .then((res) => {
      dispatch({ type: GET_List_All_Doctors, payload: res.data.data });

      // console.log(res.data.data);
    })
    .catch((err) => console.log(err));
};

//get list of Doctors by location :

export const getDoctorsByLocalisation = (payload) => (dispatch) => {
  axios
    .get(`/Doctors/allDoctors/Localisation/${payload.id}`, {
      headers: {
        jwt: payload.token,
        data: payload.AdresseProfessionnelle,
      },
    })
    .then((response) => {
      dispatch({
        type: GET_Doctors_BY_Localisation,
        payload: response.data.data,
      });
    })
    .catch((error) => console.dir(error));
};

//Get list of doctors by their Name :

export const getDoctorsbyName = (payload) => (dispatch) => {
  // console.log("action :", payload.listDoctors);
  axios
    .get(`/Doctors/allDoctors/Nom/${payload.id}`, {
      headers: {
        jwt: payload.token,
        data: payload.NomDr,
      },
    })
    .then((response) => {
      console.log(response);
      dispatch({
        type: GET_Doctors_BY_Name,
        payload: response.data.data,
      });
    })
    .catch((error) => console.dir(error));
};

//Get list of doctors by Rating :
export const getDoctorsbyRating = (payload) => (dispatch) => {
  axios
    .get(`/Doctors/allDoctors/Rating/${payload.id}`, {
      headers: {
        jwt: payload.token,
        data: payload.TopDoctor,
        destination: payload.Rating,
      },
    })
    .then((response) => {
      console.log(response);
      dispatch({
        type: GET_Doctors_BY_Rating,
        payload: response.data.data,
      });
    })
    .catch((error) => console.dir(error));
};

//Get All appointments :

export const getAppointments = (payload) => (dispatch) => {
  axios
    .get(`/Users/userAppointment${payload.id}`, {
      headers: {
        jwt: payload.token,
        // data: payload.check_in,
        // destination: payload.userAppointment,
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: GET_Appointments,
        payload: res.data.data,
      });
    })
    .catch((error) => console.dir(error));
};

export function close() {
  return {
    type: CLOSE_MODAL,
  };
}
export function openModal() {
  return {
    type: OPEN_MODAL,
  };
}
export function openEmailModal() {
  return {
    type: OPEN_EMAIL_MODAL,
  };
}
export function closeEmailModal() {
  return {
    type: CLOSE_EMAIL_MODAL,
  };
}

export function closeAddAppointment() {
  return {
    type: CLOSE_ADD_Appointment,
  };
}

//module.exports = router;
