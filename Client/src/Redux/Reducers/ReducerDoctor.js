// import { type } from "express/lib/response";
import {
  LOGOUT_DOCTOR,
  LOGIN_DOCTOR,
  REGISTER_DOCTOR,
  GET_ALL_APPOINTMENTS,
} from "../Constants/ActionsTypes";

const initialState = {
  doctor: {},
  Appointments_List: [],
  isAuth: false,
  role:"",
  VerifyAccount: "En attente...",
};

export const ReducerDoctor = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_DOCTOR:
      return {
        ...state,
        doctor: payload.doctor,
        isAuth: false,
      };

    // case LOGIN_DOCTOR:
    //   localStorage.setItem("token", payload.token);

    //   return {
    //     ...state,
    //     doctor: payload.doctor,
    //     isAuth: true,
    //     VerifyAccount: "En attente...",
    //   };

    case LOGOUT_DOCTOR:
      localStorage.removeItem("token");

      return {
        ...state,
        doctor: {},
        isAuth: false,
      };

    case GET_ALL_APPOINTMENTS:
      return {
        ...state,
        Appointments_List: payload.token,
        adminTest: true,
      };

    default:
      return state;
  }
};

export default ReducerDoctor;