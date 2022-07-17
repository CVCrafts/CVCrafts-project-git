import create from "zustand";
import { persist, devtools } from "zustand/middleware";

export let interestStore = (set) => ({
  interest: {},
  onSetInterest: (interestObject) =>
    set((state) => ({
      ...state,
      interest: interestObject,
    })),
});

interestStore = devtools(interestStore, {});
interestStore = persist(interestStore, {
  name: "Interest_info",
});

export const useInterestStore = create(interestStore);

export default useInterestStore;
