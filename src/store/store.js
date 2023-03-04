import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigation";
import projectsReducer from "./projects";
import toolsReducer from "./tools";

const store = configureStore({
  reducer: {
    navigationReducer,
    projectsReducer,
    toolsReducer,
  },
});

export default store;
