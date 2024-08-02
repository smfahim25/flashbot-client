import { dataState } from "@/constants/data";
import axiosClientWithoutToken from "@/lib/axiosClientWithoutToken";
import create from "zustand";

const useAvailableStrategiesStore = create<dataState>((set) => ({
  data: [],
  isLoading: false,
  error: null,
  getData: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosClientWithoutToken.get(
        "/info/available_strategies"
      );
      set({ data: response.data, isLoading: false });
    } catch (error) {
      set({
        error: (error as any).detail || "Unknown error",
        isLoading: false,
      });
    }
  },
}));

export default useAvailableStrategiesStore;
