import favCounter from "./favCounter";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  favArr: favCounter,
});

export default allReducers;
