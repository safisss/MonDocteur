import {
  GET_USERS_LIST,
  GET_DOCTORS_LIST,
  ADMIN_ADD_USERS_LIST,
  ADMIN_ADD_DOCTORS_LIST,
  ADMIN_PUT_LIST_USERS,
  ADMIN_PUT_LIST_DOCTORS,
  // SHOW_USERS_LIST,
  SHOW_DOCTORS_LIST,
  ADMIN_DELETE_LIST_USERS,
  ADMIN_DELETE_LIST_DOCTORS,
  ADMIN_VERIFY_ACCOUNT_DOCTORS,
  ADMIN_GET_MESSAGES_USERS,
  ADMIN_GET_MESSAGES_DOCTORS,
  LOGOUT_ADMIN,
  LOGIN_ADMIN,
} from "../Constants/ActionsTypes";
 
const initialState = {
  admin: {},
  // isAuth: false,
  role: "",
  usersList: [],
  // doctorsList: [],
  Create_User: [],
  AllDoctors: [],
  Create_Doctor: [],
  Delete_User: [],
  UpdateUsers: [],
  UpdateDoctors: [],
  showListUser: [],
  showListDoctors: [],
  Delete_User: [],
  removeDoctors: [],
  adminTest: false,
  // showTheListUsers: false,
  showTheListDoctors: false,
  VerifyLoginDoctor: "",
  adminGetMessagesUsers: [],
  adminGetMessagesDoctors: [],
};

export const ReducerAdmin = (state = initialState, action) => {
  
  const { type, payload } = action;


  switch (type) {
    case LOGIN_ADMIN:
      localStorage.setItem("token", payload.token);

      return {
        ...state,
        admin: payload.token,
        isAuth: true,
      };

    case LOGOUT_ADMIN:
      localStorage.removeItem("token");
      return {
        ...state,
        admin: {},
        isAuth: false,
      };
    case GET_USERS_LIST:
      return {
        ...state,
        UsersList: payload.token,
        adminTest: true,
      };

    case GET_DOCTORS_LIST:
      return {
        ...state,
        AllDoctors: payload.token,
        adminTest: true,
      };

    case ADMIN_ADD_USERS_LIST:
      return {
        ...state,
        Create_User: payload.token,
        adminTest: true,
      };

    case ADMIN_ADD_DOCTORS_LIST:
      return {
        ...state,
        Create_Doctor: payload.token,
        adminTest: true,
      };

    case ADMIN_PUT_LIST_USERS:
      return {
        ...state,
        UpdateUser: payload,
        adminTest: true,
      };

    case ADMIN_PUT_LIST_DOCTORS:
      return {
        ...state,
        UpdateDoctors: payload,
        adminTest: true,
      };

    case ADMIN_DELETE_LIST_USERS:
      return {
        ...state,
        Delete_User: payload,
        adminTest: true,
      };

    case ADMIN_DELETE_LIST_DOCTORS:
      return {
        ...state,
        removeDoctors: payload,
        adminTest: true,
      };

    case ADMIN_GET_MESSAGES_USERS:
      return {
        ...state,
        adminGetMessagesUsers: payload,
        adminTest: true,
      };

    case ADMIN_GET_MESSAGES_DOCTORS:
      return {
        ...state,
        adminGetMessagesDoctors: payload,
        adminTest: true,
      };

    // case SHOW_USERS_LIST:
    //   return {
    //     showTheListUsers: !state.showTheListUsers,
    //     adminTest: true,
    //   };

    case SHOW_DOCTORS_LIST:
      return {
        showTheListDoctors: !state.showTheListDoctors,
        adminTest: true,
      };

    case ADMIN_VERIFY_ACCOUNT_DOCTORS:
      return {
        VerifyLoginDoctor: !state.VerifyLoginDoctor,
        adminTest: true,
      };

    default:
      return state;
  }
};


export default ReducerAdmin;
