import { combineReducers } from "@reduxjs/toolkit";
import utilSlice from "./slice/util";

const reducer = combineReducers({
  utilSlice,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
