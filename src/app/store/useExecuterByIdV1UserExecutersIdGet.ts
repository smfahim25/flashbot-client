import axiosClient from "@/lib/axiosClient";
import { create } from "zustand";

interface ExecuterState {
  data: [];
  isLoading: boolean;
  error: string | null;
  getData: (id: string) => Promise<void>;
}

const useExecuterByIdV1UserExecutersIdGet = create<ExecuterState>((set) => ({
  data: [],
  isLoading: false,
  error: null,
  getData: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosClient.get(`/user/executers/${id}`);
      set({ data: response.data.custom_strategies, isLoading: false });
    } catch (error) {
      set({
        error: (error as any).response?.data?.detail || "Unknown error",
        isLoading: false,
      });
    }
  },
}));

export default useExecuterByIdV1UserExecutersIdGet;
