import { CLOSE_MODAL } from "../Constants/ActionsTypes";
import { OPEN_MODAL } from "../Constants/ActionsTypes";

const initialState = {
    isAuth: false,
};

export const ReducerModal = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        isAuth: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};


export default ReducerModal;