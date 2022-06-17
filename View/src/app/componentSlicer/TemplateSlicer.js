import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pdfDownload: "",
};

export const TemplateSlicer = createSlice({
  name: "Template",
  initialState,
  reducers: {
    addData(state, action) {
      state.pdfDownload = action.payload;
    },
  },
});

export const { addData } = TemplateSlicer.actions;
export default TemplateSlicer.reducer;
