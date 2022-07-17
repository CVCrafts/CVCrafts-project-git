import create from "zustand";
import { persist, devtools } from "zustand/middleware";

let LanguageStore = (set) => ({
  language: {},
  onSetLanguage: (LanguageObject) =>
    set((state) => ({
      ...state,
      language: LanguageObject,
    })),
});
LanguageStore = devtools(LanguageStore, {});
LanguageStore = persist(LanguageStore, {
  name: "Langauge_info",
});

export const uselanguageStore = create(LanguageStore);

export default uselanguageStore;
