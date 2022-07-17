import create from "zustand";
import { persist, devtools } from "zustand/middleware";

let ProjectStore = (set) => ({
  Project: {},
  onSetProject: (ProjectObject) =>
    set((state) => ({
      ...state,
      Publication: ProjectObject,
    })),
});
ProjectStore = devtools(ProjectStore, {});
ProjectStore = persist(ProjectStore, {
  name: "Project_info",
});

export const useProjectStore = create(ProjectStore);

export default useProjectStore;
