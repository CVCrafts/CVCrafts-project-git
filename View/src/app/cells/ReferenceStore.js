import create from "zustand";
import { persist, devtools } from "zustand/middleware";

export let referienceStore = (set) => ({
  referience: {},
  onSetReferience: (referienceObject) =>
    set((state) => ({
      ...state,
      referience: referienceObject,
    })),
});

referienceStore = devtools(referienceStore, {});
referienceStore = persist(referienceStore, {
  name: "Referience_info",
});

export const useReferienceStore = create(referienceStore);

export default useReferienceStore;
