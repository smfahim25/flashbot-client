import axiosClient from "@/lib/axiosClient";
import create from "zustand";

// Define the types for the state and actions
interface DataState {
  data: any[];
  isLoading: boolean;
  error: string | null;
  getData: () => Promise<void>;
}

const useExecutorStore = create<DataState>((set) => ({
  data: [],
  isLoading: false,
  error: null,
  getData: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosClient.get("/user/executers");
      set({ data: response.data, isLoading: false });
    } catch (error) {
      set({
        error: (error as any).detail || "Unknown error",
        isLoading: false,
      });
    }
  },
}));

export default useExecutorStore;
