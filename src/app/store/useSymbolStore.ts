import { dataState } from "@/constants/data";
import axiosClient from "@/lib/axiosClient";
import create from "zustand";

const useSymbolStore = create<dataState>((set) => ({
  data: [],
  isLoading: false,
  error: null,
  getData: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosClient.get("/info/available_symbols");
      set({ data: response.data.symbols, isLoading: false });
    } catch (error) {
      set({
        error: (error as any).detail || "Unknown error",
        isLoading: false,
      });
    }
  },
}));

export default useSymbolStore;
