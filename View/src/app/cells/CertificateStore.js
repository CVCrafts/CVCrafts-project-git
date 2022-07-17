import create from "zustand";
import { persist, devtools } from "zustand/middleware";

export let certificateStore = (set) => ({
  certificate: {},
  onSetCertificate: (certificateObject) =>
    set((state) => ({
      ...state,
      certificate: certificateObject,
    })),
});

certificateStore = devtools(certificateStore, {});
certificateStore = persist(certificateStore, {
  name: "Certificate_info",
});

export const useCertificateStore = create(certificateStore);

export default useCertificateStore;
