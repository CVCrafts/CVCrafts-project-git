import { configureStore } from "@reduxjs/toolkit";
import CertificateSlicer from "./componentSlicer/CertificateSlicer";
import EducationSlicer from "./componentSlicer/EducationSlicer";

const store = configureStore({
  reducer: {
    certificateReducer: CertificateSlicer,
    educationReducer: EducationSlicer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
