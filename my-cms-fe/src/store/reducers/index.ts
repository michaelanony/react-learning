import { combineReducers } from "redux";
import userReducer from "./userReducers"
import defReducer from "./sagaReducer"
export default combineReducers({ userReducer,defReducer });
