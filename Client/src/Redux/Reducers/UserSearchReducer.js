import { CLOSE_ADD_Appointment } from "../Constants/ActionsTypes";
import {
  ADD_Message,
  CLOSE_ADD_POST,
  GET_USER_POSTS,
  GET_POSTS_BY_DESTINATION,
  GET_POSTS_BY_CITY,
  GET_RANDOM_USER_POSTS,
  GET_POSTS_BY_CHECK_IN,
} from "../Constants/ActionsTypes";

const initialState = {
  isAuth: false,
  randomUserPosts: [],
  userProfile: [],
  openCalender: false,
  doctorsByLocalisation: [],
  doctorsByName: [],
  doctorsByRating: [],
  searchByCheckIn: [],
};

const UserSearchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_Message:
      return {
        ...state,
        isAuth: true,
      };
    case CLOSE_ADD_Appointment:
      return {
        ...state,
        openCalender: false,
      };
    case GET_USER_Profile:
      return {
        ...state,
        userProfile: payload,
        test: true,
      };
    case  GET_List_All_Doctors:
      return {
        ...state,
        ListDoctors: payload,
        test: true,
      };
    case GET_DOCTORS_BY_LOCALISATION:
      return {
        ...state,
        doctorsByLocalisation: payload,
        test: true,
      };
    case GET_DOCTORS_BY_NAME:
      return {
        ...state,
        doctorsbyname: payload,
        test: true,
      };
    case GET_Appointments:
      return {
        ...state,
        Appointments: payload,
        test: true,
      };

    default:
      return state;
  }
};
export default UserSearchReducer;
