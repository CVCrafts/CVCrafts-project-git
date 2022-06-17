import { configureStore } from "@reduxjs/toolkit";
import CertificateSlicer from "./componentSlicer/CertificateSlicer";
import EducationSlicer from "./componentSlicer/EducationSlicer";
import TemplateSlicer from "./componentSlicer/TemplateSlicer";

const store = configureStore({
  reducer: {
    certificateReducer: CertificateSlicer,
    educationReducer: EducationSlicer,
    templateReducer: TemplateSlicer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
