import create from "zustand";
import { persist, devtools } from "zustand/middleware";

export let courseStore = (set) => ({
  course: {},
  onSetCourse: (courseObject) =>
    set((state) => ({
      ...state,
      course: courseObject,
    })),
});

courseStore = devtools(courseStore, {});
courseStore = persist(courseStore, {
  name: "Course_info",
    getStorage: () => localStorage,
  
});

export const useCourseStore = create(courseStore);

export default useCourseStore;
