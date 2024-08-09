import { create } from "zustand";
import { persist } from "zustand/middleware";

type SidebarPositionState = {
  align: boolean;
  setAlign: (open: boolean) => void;
};

export const useSidebarPositionStore = create<SidebarPositionState>()(
  persist(
    (set) => ({
      align: true,
      setAlign: (align) => set({ align: align }),
    }),
    {
      name: "sidebar-position-storage", // unique name for the storage
    }
  )
);
