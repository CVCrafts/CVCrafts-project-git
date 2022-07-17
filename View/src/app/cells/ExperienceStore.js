import create from "zustand";
import { persist, devtools } from "zustand/middleware";

export let experienceStore = (set) => ({
  experience: [],
  onSetExperience: (experienceObject) =>
    set((state) => ({
      ...state,
      experience: [experienceObject],
    })),
});

experienceStore = devtools(experienceStore, {});
experienceStore = persist(experienceStore, {
  name: "Experience_info",
});

export const useExperienceStore = create(experienceStore);

export default useExperienceStore;
