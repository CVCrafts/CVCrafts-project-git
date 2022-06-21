import create from "zustand";
import { persist, devtools } from "zustand/middleware";

let AwardStore = (set) => ({
  Award: {},
  onSetAward: (AwardObject) =>
    set((state) => ({
      ...state,
      Award: AwardObject,
    })),
});
AwardStore = devtools(AwardStore, {});
AwardStore = persist(AwardStore, {
  name: "Award_info",
});

export const useAwardStore = create(AwardStore);

export default useAwardStore;
