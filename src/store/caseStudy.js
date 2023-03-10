import { createSlice } from "@reduxjs/toolkit";

const caseStudy = createSlice({
  name: "caseStudy",
  initialState: { visible: false, project: null },
  reducers: {
    showCaseStudy: (state, { payload: project }) => ({
      visible: true,
      project,
    }),
    hideCaseStudy: () => ({ visible: false, project: null }),
  },
});

export const caseStudyActions = caseStudy.actions;

export default caseStudy.reducer;
