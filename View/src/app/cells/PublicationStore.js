import create from "zustand";
import { persist, devtools } from "zustand/middleware";

let PublicationStore = (set) => ({
  Publication: {},
  onSetPublication: (PublicationObject) =>
    set((state) => ({
      ...state,
      Publication: PublicationObject,
    })),
});
PublicationStore = devtools(PublicationStore, {});
PublicationStore = persist(PublicationStore, {
  name: "Publication_info",
});

export const usePublicationStore = create(PublicationStore);

export default usePublicationStore;
