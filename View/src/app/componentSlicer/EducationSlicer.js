import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  educationTitle: `Bachelor of Science in Information Technology`,
  educationStudies: `University of Punjab.`,
  educationYear: `2018-current`,
};

export const EducationSlicer = createSlice({
  name: "Education",
  initialState,
  reducers: {
    addData(state, action) {},
  },
});

export const { addData } = EducationSlicer.actions;
export default EducationSlicer.reducer;
