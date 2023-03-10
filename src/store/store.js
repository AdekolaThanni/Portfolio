import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigation";
import projectsReducer from "./projects";
import toolsReducer from "./tools";
import caseStudyReducer from "./caseStudy";

const store = configureStore({
  reducer: {
    navigationReducer,
    projectsReducer,
    toolsReducer,
    caseStudyReducer,
  },
});

export default store;
