const jwt = require("jsonwebtoken");

import {
  GET_ALL_APPOINTMENTS, //GET_LIST_APPOINTMENT_BY_DATE_SERVICE
  LIST_APPOINTMENT,
} from "../Constants/ActionsTypes";

export const setListByDateService = (result) => ({
  type: GET_ALL_APPOINTMENTS,
  payload: result,
});

export const setListAppointmentByPatient = (result) => ({
  type: LIST_APPOINTMENT,
  payload: result,
});

export const test = (result) => ({
  type: GET_ALL_APPOINTMENTS,
  payload: result,
});

// GET LIST APPOINTMENT BY DATE
export function getListAppointments(user_id, date) {
  return axios.post(APPOINTMENT_BY_DATE, {
    appointment: {
      user_id,
      date,
    },
  });
}

// SAVE APPOINTMENT
export function saveAppointment(
  appointmentDate,
  startTime,
  endTime,
  user_id,
  doctor_id
) {
  return axios.post(SERVICE_APPOINTMENT, {
    appointment: {
      appointmentDate,
      startTime,
      endTime,
      status: true,
      user_id,
      doctor_id,
    },
  });
}

// List PATIENT
export const ListAppointmentByPatient = (user_id) =>
  axios.get(SERVICE_APPOINTMENT, {
    params: {
      user_id,
    },
  });




  ////////////////////////////////////

