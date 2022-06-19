import create from "zustand";

export const useStore = create((set, get) => ({
  personal: {
    Fullname: "Muhammad Talha",
    EmailAddress: "mt123@gmail.com",
    Phone: "03XX-XXXX-XXX",
    Country: "Pakistan",
    City: "Lahore",
    StreetAddress: "Canal Road",
    StateOrProvince: "Asia",
    ZipOrPostalCode: "540000",
    Description: "Nothing to say...",
    isSaveDocument: false,
  },
  onSetPersonal: (personal) =>
    set((state) => ({
      ...state,
      personal: {
        ...state,
        personal,
      },
    })),
}));

export default useStore;
