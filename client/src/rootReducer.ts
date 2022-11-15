import { combineReducers } from "@reduxjs/toolkit";
import utilSlice from "./slice/util";
import postSlice from "./slice/post";
import { postApi } from "./service/post";
import { commentApi } from "./service/comment";

const reducer = combineReducers({
  utilSlice,
  postSlice,
  [postApi.reducerPath]: postApi.reducer,
  [commentApi.reducerPath]: commentApi.reducer,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
