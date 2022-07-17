import create from "zustand";
import { persist, devtools } from "zustand/middleware";

let personalStore = (set) => ({
  personals: {
    // Fullname: "Muhammad Talha",
    // Email: "mt123@gmail.com",
    // Phone: "03XX-XXXX-XXX",
    // Country: "Pakistan",
    // City: "Lahore",
    // Street: "Canal Road",
    // Region: "Asia",
    // Postal: "540000",
    // Description: "Nothing to say...",
    // isSaveDocument: false,
  },

  onSetPersonal: (personal) =>
    set((state) => ({
      ...state,
      personals: personal,
    })),
});

personalStore = devtools(personalStore, {});
personalStore = persist(personalStore, {
  name: "Personal_info",
});

export const useStore = create(personalStore);

export default useStore;
