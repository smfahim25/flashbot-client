import { dataSymbol } from "@/constants/data";
import axiosClient from "@/lib/axiosClient";
import { create } from "zustand";

const useSymbolStore = create<dataSymbol>((set, get) => ({
  data: [],
  isLoading: false,
  error: null,
  loaded: false,
  getData: async () => {
    const { loaded, isLoading } = get(); // Use `get` to access the current state

    if (loaded || isLoading) {
      // If data is already loaded or currently loading, do nothing
      return;
    }

    set({ isLoading: true, error: null });
    try {
      const response = await axiosClient.get("/info/available_symbols");
      set({
        data: response.data.symbols,
        isLoading: false,
        loaded: true, // Set loaded to true after successful fetch
      });
    } catch (error) {
      set({
        error: (error as any).detail || "Unknown error",
        isLoading: false,
      });
    }
  },
}));

export default useSymbolStore;
