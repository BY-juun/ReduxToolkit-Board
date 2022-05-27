import { combineReducers } from "@reduxjs/toolkit";
import utilSlice from "./slice/util";
import postSlice from "./slice/post";

const reducer = combineReducers({
  utilSlice,
  postSlice,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
