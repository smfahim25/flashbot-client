import { dataState } from "@/constants/data";
import axiosClient from "@/lib/axiosClient";
import create from "zustand";

const useExecutorStore = create<dataState>((set) => ({
  data: [],
  isLoading: false,
  error: null,
  getData: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosClient.get("/user/executers");
      set({ data: response.data?.executors, isLoading: false });
    } catch (error) {
      set({
        error: (error as any).detail || "Unknown error",
        isLoading: false,
      });
    }
  },
}));

export default useExecutorStore;
