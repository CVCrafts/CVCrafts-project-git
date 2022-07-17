import create from "zustand";
import { persist, devtools } from "zustand/middleware";

export let profileStore = (set) => ({
  profile: {},
  onSetProfile: (profileObject) =>
    set((state) => ({
      ...state,
      profile: profileObject,
    })),
});

profileStore = devtools(profileStore, {});
profileStore = persist(profileStore, {
  name: "Profile_info",
});

export const useProfileStore = create(profileStore);

export default useProfileStore;
