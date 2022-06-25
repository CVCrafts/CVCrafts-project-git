import create from "zustand";
import { persist, devtools } from "zustand/middleware";

let editorStore = (set) => ({
  whichTemplate: {},
  onSetWhichTemplate: (whichTemplateObject) =>
    set((state) => ({ ...state, whichTemplate: whichTemplateObject })),
});

editorStore = devtools(editorStore, {});
editorStore = persist(editorStore, {
  name: "Editor_info",
});
export const useEditorStore = create(editorStore);

export default useEditorStore;
