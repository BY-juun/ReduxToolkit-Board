import { configureStore } from "@reduxjs/toolkit";
import reducer from "./rootReducer";
import { commentApi } from "./service/comment";
import { postApi } from "./service/post";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(postApi.middleware).concat(commentApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export default store;
