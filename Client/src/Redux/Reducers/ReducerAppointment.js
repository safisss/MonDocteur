const initialState = {
  filterappointmentsby: null,
  appointmentsByPatient: null,
};

export const GET_LIST_APPOINTMENTS =
  "GET_LIST_APPOINTMENTS";
export const SAVE_APPOINTMENT = "SAVE_APPOINTMENT";
export const LIST_APPOINTMENT = "LIST_APPOINTMENT";

export const ReducerAppointment = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_APPOINTMENTS:
      return {
        ...state,
        filterappointmentsby: action.payload.data,
      };
    case LIST_APPOINTMENT:
      return {
        ...state,
        appointmentsByPatient: action.payload.data,
      };
    default:
      return state;
  }
};
