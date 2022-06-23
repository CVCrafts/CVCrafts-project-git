import create from "zustand";
import { persist, devtools } from "zustand/middleware";

export let organisationStore = (set) => ({
  organisation: {},
  onSetOrganisation: (organisationObject) =>
    set((state) => ({
      ...state,
      organisation: organisationObject,
    })),
});

organisationStore = devtools(organisationStore, {});
organisationStore = persist(organisationStore, {
  name: "Organisation_info",
});

export const useOrganisationStore = create(organisationStore);

export default useOrganisationStore;
