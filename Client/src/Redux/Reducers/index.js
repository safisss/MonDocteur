import { combineReducers } from "redux";
import { ReducerUser } from "./ReducerUser";
import {ReducerDoctor} from "./ReducerDoctor";
import { ReducerAdmin } from "./ReducerAdmin";
import { ReducerModal } from "./ReducerModal";
const rootReducer = combineReducers({
  ReducerUser,
  ReducerDoctor,
  ReducerAdmin,
  ReducerModal,
});

export default rootReducer;
