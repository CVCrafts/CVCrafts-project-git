import create from "zustand";
import { persist, devtools } from "zustand/middleware";

let SkillStore = (set) => ({
  skill: {},
  onSetSkill: (skillObject) =>
    set((state) => ({
      ...state,
      skill: skillObject,
    })),
});
SkillStore = devtools(SkillStore,{});
SkillStore = persist(SkillStore, {
  name: "Skill_info",
});

export const useSkillStore = create(SkillStore);

export default useSkillStore;
