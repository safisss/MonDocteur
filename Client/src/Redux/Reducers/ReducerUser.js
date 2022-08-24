// import { type } from "express/lib/response";
import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  GET_List_All_Doctors,
  GET_PROFILE_USER,
} from "../Constants/ActionsTypes";

const initialState = {
  user: {},
  AllDoctors: [],
  userProfile: [],
  isAuth: false,
  role: "",
};

export const ReducerUser = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_USER:
      // console.log(payload.user, "Hiiiiiiiiiii reducer");
      return {
        ...state,
        user: payload.user,
        isAuth: false,
      };
      break;
    // case LOGIN_USER:
    // localStorage.setItem("token", payload.token);

    // localStorage.setItem("_id", payload.user._id);

    // return {
    //   ...state,
    //   user: payload.user,
    //   isAuth: true,
    //   role: payload.role,
    // };
    // break;
    case LOGOUT_USER:
      localStorage.removeItem("token");

      return {
        ...state,
        user: {},
        isAuth: false,
      };
      break;
    case GET_List_All_Doctors:
      return {
        ...state,
        AllDoctors: payload,
        isAuth: true,
      };
      break;
    case GET_PROFILE_USER:
      return {
        ...state,
        userProfile: payload.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export default ReducerUser;
