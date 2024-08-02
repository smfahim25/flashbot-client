import { dataSymbol } from "@/constants/data";
import axiosClient from "@/lib/axiosClient";
import create from "zustand";

const useAvailableStrategiesStore = create<dataSymbol>((set) => ({
  data: [],
  isLoading: false,
  error: null,
  getData: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosClient.get("/info/available_strategies");
      set({ data: response.data.strategies, isLoading: false });
    } catch (error) {
      set({
        error: (error as any).detail || "Unknown error",
        isLoading: false,
      });
    }
  },
}));

export default useAvailableStrategiesStore;
