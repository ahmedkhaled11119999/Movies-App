import favCounter from "./favCounter";
import fetchData from "./fetchData";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  favArr: favCounter,
  fetchData: fetchData,
});

export default allReducers;
