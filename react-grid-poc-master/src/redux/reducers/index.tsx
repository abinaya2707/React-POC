import { combineReducers } from "redux";
import EntryFromGetReducer from "./EntryFromGetReducer";

const AllReducer = combineReducers({
  EntryFromGetData: EntryFromGetReducer,
});
export default AllReducer;
