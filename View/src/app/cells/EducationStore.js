import create from "zustand";
import { persist, devtools } from "zustand/middleware";

let educationStore = (set) => ({
  education: {},

  onSetEducation: (educationObject) =>
    set((state) => ({
      ...state,
      education: educationObject,
    })),
});

educationStore = devtools(educationStore, {});
educationStore = persist(educationStore, {
  name: "Education_info",
});

export const useEducationStore = create(educationStore);

export default useEducationStore;
