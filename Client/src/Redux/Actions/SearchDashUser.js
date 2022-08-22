import { SEARCH_DOCTOR, LOADING } from "../Constants/ActionsTypes";
import axios from "axios";



export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_DOCTOR,
    payload: text,
  });
};

export const List_Doctors = (text) => (dispatch) => {
  axios
    .get(`${text}`)
    .then((response) =>
      dispatch({
        type: List_Doctors,
        payload: response.data,
      })
    )
    .catch((err) => console.log(err));
};

export const ListDoctors = (id) => (dispatch) => {
  axios
    .get(`${id}`)
    .then((response) =>
      dispatch({
        type: List_Doctors,
        payload: response.data,
      })
    )
    .catch((err) => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};







// import {
//   GET_USER_PROFILE,
//   CLOSE_MODAL,
//   OPEN_MODAL,
//   OPEN_EMAIL_MODAL,
//   CLOSE_EMAIL_MODAL,
//   CLOSE_ADD_POST,
//   ADD_POST,
//   GET_USER_POSTS,
//   GET_POSTS_BY_DESTINATION,
//   GET_POSTS_BY_CITY,
//   GET_HOSTS_BY_DESTINATION,
//   GET_RANDOM_USER_PROFILE,
//   GET_RANDOM_USER_POSTS,
//   GET_POSTS_BY_CHECK_IN,
//   GET_HOSTS_BY_CHECK_IN,
// } from "../constants/action-types";
// import axios from "axios";

// export const getUserProfile = (payload) => (dispatch) => {
//   axios
//     .get(`/api/profile/UserInfos/${payload.id}`, {
//       headers: {
//         jwt: payload.token,
//       },
//     })
//     .then((response) => {
//       dispatch({ type: GET_USER_PROFILE, payload: response.data.data });
//     })
//     .catch((err) => console.dir(err));
// };
// export const getRandomUserProfile = (payload) => (dispatch) => {
//   axios
//     .get(`/api/profile/UserInfos/${payload.rId}`, {
//       headers: {
//         // "Content-Type": "multipart/form-data",
//         jwt: payload.token,
//       },
//     })
//     .then((response) => {
//       dispatch({
//         type: GET_RANDOM_USER_PROFILE,
//         payload: response.data.data,
//       });
//     })
//     .catch((err) => console.dir(err));
// };
// export const getUserPosts = (payload) => (dispatch) => {
//   axios
//     .get(`/api/posts/myPosts/${payload.id}`, {
//       headers: {
//         jwt: payload.token,
//       },
//     })
//     .then((response) => {
//       dispatch({ type: GET_USER_POSTS, payload: response.data.data });
//     })
//     .catch((err) => console.dir(err));
// };
// export const getRandomUserPosts = (payload) => (dispatch) => {
//   axios
//     .get(`/api/posts/myPosts/${payload.rId}`, {
//       headers: {
//         // "Content-Type": "multipart/form-data",
//         jwt: payload.token,
//       },
//     })
//     .then((response) => {
//       dispatch({
//         type: GET_RANDOM_USER_POSTS,
//         payload: response.data.data,
//       });
//     })
//     .catch((err) => console.dir(err));
// };
// export const getPostsByDestination = (payload) => (dispatch) => {
//   axios
//     .get(`/api/posts/allPosts/destination/${payload.id}`, {
//       headers: {
//         jwt: payload.token,
//         data: payload.destination,
//       },
//     })
//     .then((response) => {
//       dispatch({
//         type: GET_POSTS_BY_DESTINATION,
//         payload: response.data.data,
//       });
//     })
//     .catch((error) => console.dir(error));
// };
// export const getHostsByDestination = (payload) => (dispatch) => {
//   // console.log("action :", payload.travellerSelected);
//   axios
//     .get(`/api/host/allHosting/residence/${payload.id}`, {
//       headers: {
//         jwt: payload.token,
//         data: payload.residence,
//       },
//     })
//     .then((response) => {
//       dispatch({
//         type: GET_HOSTS_BY_DESTINATION,
//         payload: response.data.data,
//       });
//     })
//     .catch((error) => console.dir(error));
// };
// export const getPostsByCity = (payload) => (dispatch) => {
//   // console.log("action :", payload.travellerSelected);
//   axios
//     .get(`/api/posts/allPosts/destination/city/${payload.id}`, {
//       headers: {
//         jwt: payload.token,
//         data: payload.city,
//       },
//     })
//     .then((response) => {
//       console.log(response);
//       dispatch({
//         type: GET_POSTS_BY_CITY,
//         payload: response.data.data,
//       });
//     })
//     .catch((error) => console.dir(error));
// };
// export const getPostsByCheckIn = (payload) => (dispatch) => {
//   // console.log("action :", payload.travellerSelected);
//   axios
//     .get(`/api/posts/allPosts/filter/date/${payload.id}`, {
//       headers: {
//         jwt: payload.token,
//         data: payload.check_in,
//         destination: payload.destination,
//       },
//     })
//     .then((response) => {
//       console.log(response);
//       dispatch({
//         type: GET_POSTS_BY_CHECK_IN,
//         payload: response.data.data,
//       });
//     })
//     .catch((error) => console.dir(error));
// };
// export const getHostsByCheckIn = (payload) => (dispatch) => {
//   // console.log("action :", payload.travellerSelected);
//   axios
//     .get(`/api/host/allHosts/filter/date/${payload.id}`, {
//       headers: {
//         jwt: payload.token,
//         data: payload.check_in,
//         residence: payload.residence,
//       },
//     })
//     .then((response) => {
//       console.log(response);
//       dispatch({
//         type: GET_HOSTS_BY_CHECK_IN,
//         payload: response.data.data,
//       });
//     })
//     .catch((error) => console.dir(error));
// };
// export const getHostsByCity = (payload) => (dispatch) => {
//   // console.log("action :", payload.travellerSelected);
//   axios
//     .get(`/api/host/allHosting/residence/city/${payload.id}`, {
//       headers: {
//         jwt: payload.token,
//         data: payload.city,
//       },
//     })
//     .then((response) => {
//       console.log(response);
//       dispatch({
//         type: GET_POSTS_BY_CITY,
//         payload: response.data.data,
//       });
//     })
//     .catch((error) => console.dir(error));
// };
// export function close() {
//   return {
//     type: CLOSE_MODAL,
//   };
// }
// export function openModal() {
//   return {
//     type: OPEN_MODAL,
//   };
// }
// export function openEmailModal() {
//   return {
//     type: OPEN_EMAIL_MODAL,
//   };
// }
// export function closeEmailModal() {
//   return {
//     type: CLOSE_EMAIL_MODAL,
//   };
// }

// export function addPost() {
//   return {
//     type: ADD_POST,
//   };
// }
// export function closeAddPost() {
//   return {
//     type: CLOSE_ADD_POST,
//   };
// }