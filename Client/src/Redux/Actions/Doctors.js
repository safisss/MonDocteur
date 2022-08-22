import axios from "axios";

import {
  REGISTER_DOCTOR,
  LOGIN_DOCTOR,
  LOGOUT_DOCTOR,
  GET_ALL_APPOINTMENTS,
  GET_DOCTOR_PROFILE,
  CONFIRM_APPOINTMENTS,
  ADD_APPOINTMENTS,
  DELETE_APPOINTMENTS,
} from "../Constants/ActionsTypes";

//REGISTER_DOCTOR

export const register = (doctor, history) => async (dispatch) => {
  try {
    console.log(doctor);
    let result = await axios.post("/Doctors/InscriptionDoctor", doctor);
    if (result.data.status) {
      dispatch({ type: REGISTER_DOCTOR, payload: result.data });
      history.push("./AuthentificationDoctor");
      //  history.push("./AuthentificationUser");
    } else {
      alert(result.data.msg);
    }
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};

//LOGIN Doctor

export const login = (doctor, history) => async (dispatch) => {
  try {
    let result = await axios.post("/Doctors/Login", doctor);
    console.log("result", result);
    if (result.data.status) {
      dispatch({ type: LOGIN_DOCTOR, payload: result.data });
      localStorage.setItem("docToken", result.data.token);
      localStorage.setItem("isDoctor", result.data.isDoctor);
      localStorage.setItem("isActivated", result.data.verify);
      history.push("/homeDoctor");
      //  result.data.doctor.VerifyAccount.includes("En Attente")
      //    ? alert(
      //        "You can't login now! Please wait your account will be verified soon"
      //      )
      //    : null;
    } else {
      alert(result.data.msg);
    }
  } catch (error) {
    console.log(error);
  }
};

//Login DOCTOR :
// export const login = (doctor, history) => async (dispatch) => {
//   try {
//     let result = await axios.post("/Doctors/Login", doctor);
//     if (result.data.status) {
//       dispatch({ type: LOGIN_DOCTOR, payload: result.data });
//       history.push("/");
//     } else {
//       alert(result.data.msg);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

//LOGOUT DOCTOR
export const logout = () => {
  return {
    type: LOGOUT_DOCTOR,
  };
};

//GET_ALL_APPOINTMENTS

export const getAppointments = (payload) => (dispatch) => {
  axios
    .get(`/Doctors/Appointments_List${payload.id}`, {
      headers: {
        jwt: payload.token,
        // data: payload.check_in,
        // destination: payload.Appointments,
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: GET_ALL_APPOINTMENTS,
        payload: res.data.data,
      });
    })
    .catch((error) => console.log(error));
};
 

//Get profile Doctor

export const getDoctorProfile = (payload) => (dispatch) => {
  axios
    .get(`/Doctors/DoctorInfos/${payload.id}`, {
      // .get(`/Doctors/myprofile/${payload.id}`, {
      headers: {
        jwt: payload.docToken,
      },
    })
    .then((res) => {
      dispatch({ type: GET_DOCTOR_PROFILE, payload: res.data.data });
    })
    .catch((err) => console.dir(err));
};