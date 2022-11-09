import { configureStore } from "@reduxjs/toolkit";
import reducer from "./rootReducer";
import { postApi } from "./service/post";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(postApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export default store;
