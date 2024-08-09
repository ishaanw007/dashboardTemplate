import { create } from "zustand";
import {
  getShifts,
  createShift,
  updateShift,
  deleteShift,
} from "@/themeapi/shift";

export interface Shift {
  _id: string;
  shiftName: string;
  startTime: string;
  endTime: string;
}

export interface ShiftState {
  shifts: Shift[];
  loading: boolean;
  error: string | null;
  fetchShifts: () => Promise<void>;
  createShift: (shiftData: Partial<Shift>) => Promise<any>;
  editShift: (id: string, updateData: Partial<Shift>) => Promise<any>;
  deleteShift: (id: string) => Promise<any>;
}

const useShiftStore = create<ShiftState>((set) => ({
  shifts: [],
  loading: false,
  error: null,
  fetchShifts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await getShifts();
      set({ shifts: response.shifts, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
  createShift: async (shiftData: Partial<Shift>) => {
    set({ loading: true });
    try {
      const response = await createShift(shiftData);
      const updatedData = response;
      console.log(response);

      set((state) => ({
        shifts: [...state.shifts, response?.data?.shift],
        loading: false,
      }));
      return { status: response.status, data: updatedData };
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
  editShift: async (id, updateData) => {
    set({ loading: true });
    try {
      const response = await updateShift(id, updateData);
      const updatedData = response;
      console.log(response);
      set((state) => ({
        shifts: state.shifts.map((shift) =>
          shift._id === id ? { ...shift, ...response?.data?.shift } : shift
        ),
        loading: false,
      }));
      return { status: response.status, data: updatedData };
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
  deleteShift: async (id) => {
    set({ loading: true });
    try {
      const response = await deleteShift(id);
      const updatedData = response;
      set((state) => ({
        shifts: state.shifts.filter((shift) => shift._id !== id),
        loading: false,
      }));
      return { status: response.status, data: updatedData };
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useShiftStore;
