import { Executor } from "@/constants/data";
import axiosClient from "@/lib/axiosClient";
import { create } from "zustand";

interface ExecuterState {
  data: Executor;
  isLoading: boolean;
  error: string | null;
  getData: (id: string) => Promise<void>;
}
const initialExecutorState: Executor = {
  id: "",
  last_change: "",
  name: "",
  symbol: "",
  quantity: 0,
  take_profit: 0,
  stop_loss: 0,
  paused: false,
  close_mode: "",
  consensus_treshold: 0,
  start_mode: "",
  leverage: 0,
  quantity_mode: "",
  strategys: [],
};

const useExecuterByIdV1UserExecutersIdGet = create<ExecuterState>((set) => ({
  data: initialExecutorState,
  isLoading: false,
  error: null,
  getData: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosClient.get(`/user/executers/${id}`);
      set({ data: response.data, isLoading: false });
    } catch (error) {
      set({
        error: (error as any).response?.data?.detail || "Unknown error",
        isLoading: false,
      });
    }
  },
}));

export default useExecuterByIdV1UserExecutersIdGet;
