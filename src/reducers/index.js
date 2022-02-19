import { combineReducers } from "redux";
import patients from "./patients";

const rootReducer = combineReducers({
  patients,
});

export default rootReducer;
