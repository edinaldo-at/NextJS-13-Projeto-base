import { combineReducers } from "redux";
import authReducer from "./ducks/authSlice";

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
