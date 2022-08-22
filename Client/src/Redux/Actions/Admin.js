import axios from "axios";
//import { AlertActions } from "../Constants/AlertActions";

import {
  ADMIN_VERIFY_ACCOUNT_DOCTORS,
  // ADMIN_GET_MESSAGES_USERS,
  LOGIN_ADMIN,
  LOGOUT_ADMIN,
} from "../Constants/ActionsTypes";

import {
  GET_ADMIN_PROFILE,
  GET_USERS_LIST,
  GET_DOCTORS_LIST,
  ADMIN_ADD_USERS_LIST,
  ADMIN_ADD_DOCTORS_LIST,
  SHOW_USERS_LIST,
  SHOW_DOCTORS_LIST,
  ADMIN_PUT_LIST_USERS,
  ADMIN_PUT_LIST_DOCTORS,
  ADMIN_REMOVE_DOCTORS_LIST,
  ADMIN_REMOVE_USERS_LIST,
  ADMIN_GET_MESSAGES_USERS,
  ADMIN_GET_MESSAGES_DOCTORS,
} from "../Constants/ActionsTypes";

//LOGIN Admin

export const login = (login, history) => async (dispatch) => {
  try {
    let result = await axios.post("/Admin/LoginAdmin", login);    ///login= admin
    if (result.data.status) {
      dispatch({ type: LOGIN_ADMIN, payload: result.data });
      history.push("./homeAdmin");
      // <Redirect to="/homeAdmin" />;
    } else {
      alert(result.data.msg);
    }
  } catch (error) {
    console.log(error);
  }
};







//LOGOUT Admin*****************************************
export const logout = () => {
  return {
    type: LOGOUT_ADMIN,
  };
};

//Admin GET User profile
export const getUserProfile = (payload) => (dispatch, payload) => {
  axios
    .get(`/Admin/ProfileUsers/${payload.id}`, {
      headers: {
        jwt: payload.token,
      }, 
    })
    .then((response) => {
      dispatch({ type: GET_ADMIN_PROFILE, payload: response.data.data });
    })
    .catch((err) => console.log(err));
};

//Admin GETs all users

// export const getAllUsers = (payload) => (dispatch) => {
//   axios
//     .get(`/Admin/UsersList/${payload.id}`, {
//       headers: {
//         jwt: payload.token,
//       },
//     })
//     .then((response) => {
//       dispatch({ type: GET_USERS_LIST, payload: response.data.data });
//     })
//     .catch((err) => console.dir(err));
// };

// export const getAllUsers = (payload) => (dispatch) => {
//   axios
//     .get(`/Admin/UsersList/${payload.id}`, {
//       headers: {
//         jwt: payload.token,
//       },
//     })
//     .then((response) => {
//       dispatch({ type: GET_USERS_LIST, payload: response.data.data });
//     })
//     .catch((err) => console.dir(err));
// };

export const getAllUsers = (User) => (dispatch, payload) => {
  axios
    .get(`/Admin/UsersList/${User.id}`, {
      headers: {
        jwt: payload.token,
        // Accept: 'application/json',
      },
    })
    .then((res) => {
      dispatch({ type: GET_USERS_LIST, payload: res.data });
    })
    .catch((error) => {
      console.log(error);
    });
}; 

//Admin GETs All Doctors :

export const adminGetDoctors = (SchemaDoc) => (dispatch, payload) => {
  axios
    .get(`/Admin/AllDoctors/${SchemaDoc.id}`, {
      headers: {
        jwt: payload.token,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_DOCTORS_LIST,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

//Admin Add Users

export const Create_User = (payload) => async (dispatch) => {
  console.log("payloadd", payload);
  await axios
    .post(`/Admin/Create_User`, payload.addusers, {
      headers: {
        jwt: payload.token,
      },
    })
    .then((res) => {
      // console.log(response);
      dispatch({
        type: ADMIN_ADD_USERS_LIST,
        payload: res.data.data,
      });
    })
    .catch((err) => console.log("Cannot add user, error", err));
};

// ADMIN CREATE USERS : METHODE FADIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII :

// export const Create_User = (payload) => async (dispatch) => {
//   await axios
//     .post(`/Admin/Create_User`, payload.newForm, {
//       headers: {
//         jwt: payload.token,
//       },
//     })
//     .then((res) => {
//       // console.log(response);
//       dispatch({
//         type: ADMIN_ADD_USERS_LIST,
//         payload: res.data.data,
//       });
//     })
//     .catch((err) => console.log("Cannot add user, error", err));
// };

//Admin Add  doctor

export const Create_Doctor = (payload) => async (dispatch) => {
  console.log("payloaddd", payload);
  await axios.post("/Admin/Create_Doctor", payload.adddoctors, {
      headers: {
        jwt: payload.token,
      },
    })
    .then((res) => {
      // console.log(response);
      dispatch({
        type: ADMIN_ADD_DOCTORS_LIST,
        payload: res.data.data,
      });
    })
    //     .catch((err) => {
    //       console.log(err);
    //     });

    // };
    .catch((err) => console.log("Cannot add Doctor , error", err));

  }
 

//Admin Update User

export const UpdateUsers = (id, editUsers) => async(dispatch, payload) => {

  
  axios
    .put(`/Admin/UpdateUsers/${id}`, editUsers, {
      headers: {
        jwt: payload.token,
        //  authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      // console.log(response);
      dispatch({
        type: ADMIN_PUT_LIST_USERS,
        payload: res.data.updateUser,
      });
    })
    .catch((err) => console.log(err));
};

//Admin Update Doctor

export const UpdateDoctors = (updateDoctor, id) => (dispatch, payload) => {
  axios
    // .put(`/Admin/UpdateDoctors `, payload.updateDoctor, {
    .put(`/Admin/UpdateDoctors/${payload._id}`, updateDoctor, {
      headers: {
        jwt: payload.token,
      },
    })
    .then((res) => {
      // console.log(response);
      dispatch({
        type: ADMIN_PUT_LIST_DOCTORS,
        payload: res.data.UpdateDoctor,
      });
    })
    .catch((err) => console.log(err));
};

//Admin Remove User

export const Delete_User = (payload) => (dispatch) => {
  axios
    .remove(`/Admin/Delete_User/${payload.id}`, {
      headers: {
        jwt: payload.token,
      },
    })
    .then((res) => {
      // console.log(response);
      dispatch({
        type: ADMIN_REMOVE_USERS_LIST,
        payload: res.data.message,
      });
    })
    .catch((err) => console.log(err));
};

//Admin Remove Doctor

export const removeDoctors = (payload) => (dispatch) => {
  axios
    .remove(`/Admin/removeDoctors/${payload.id}`, {
      headers: {
        jwt: payload.token,
      },
    })
    .then((res) => {
      // console.log(response);
      dispatch({
        type: ADMIN_REMOVE_DOCTORS_LIST,
        payload: res.data.doctors,
      });
    })
    .catch((err) => console.log(err));
};

//Admin GETS All Messages Users
export const adminGetMessagesUsers = (payload) => (dispatch) => {
  axios
    .get(`/Admin/messagesU/${payload.id}`, {
      headers: {
        jwt: payload.token,
      },
    })
    .then((response) => {
      // console.log(response);
      dispatch({
        type: ADMIN_GET_MESSAGES_USERS,
        payload: response.data.data,
      });
    })
    .catch((err) => console.dir(err));
};


//************************************************************************************************* */


//Admin Verify Account Doctor 

export const verifyDoctor = (id, VerifyLoginDoctor) => (dispatch, payload) => {
  axios
    .put(`/Admin/VerifyLoginDoctor${id}`, VerifyLoginDoctor, {
      // .put(`/Admin/UpdateDoctors/${payload._id}`, updateDoctor,{
      headers: {
        jwt: payload.token,
      },
    })
    .then((res) => {
      // console.log(response);
      dispatch({
        type: ADMIN_VERIFY_ACCOUNT_DOCTORS,
        payload: res.data.message,
      });
    })
    .catch((err) => console.log(err));
};



//************************************************************************************************* */

//Admin GETS All Messages Doctors :  

export const adminGetMessagesDoctors = (payload) => (dispatch) => {
  axios
    .get(`/Admin/messagesD/${payload.id}`, {
      headers: {
        jwt: payload.token,
      },
    })
    .then((response) => {
      // console.log(response);
      dispatch({
        type: ADMIN_GET_MESSAGES_DOCTORS,
        payload: response.data.data,
      });
    })
    .catch((err) => console.dir(err));
};



export function showUsersList() {
  return {
    type: SHOW_USERS_LIST,
  };
}

export function showDoctorsList() {
  return {
    type: SHOW_DOCTORS_LIST,
  };
}
