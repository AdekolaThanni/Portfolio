import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigation";

const store = configureStore({
  reducer: {
    navigationReducer,
  },
});

export default store;
