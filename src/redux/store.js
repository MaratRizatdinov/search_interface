import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./reducers/usersApi";
import searchReducer from "./reducers/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(usersApi.middleware),
});
