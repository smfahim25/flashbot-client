import { backtestType } from "@/constants/data";
import axiosClient from "@/lib/axiosClient";
import { UserJobs } from "@/lib/schemas";
import { create } from "zustand";

const initialBacktestData: UserJobs = {
  jobs: [
    {
      id: "",
      type: "backtest",
      instructions: {},
      result: {},
      user_id: "",
      settings: {},
      created_date: "",
      metadata: {
        backtest_metadata: {
          executor_copy: {
            name: "",
            symbol: "",
            quantity: 0,
            take_profit: 0,
            stop_loss: 0,
            paused: false,
            close_mode: "",
            consensus_treshold: 100,
            start_mode: "",
            leverage: 0,
            quantity_mode: "",
            strategys: [
              {
                name: "",
                parameters: {},
                timeframe: "",
                is_custom: false,
                custom_strategy_id: "",
              },
            ],
            id: "",
            last_change: "",
          },
        },
      },
      progress: {
        status: "pending",
        progress_percentage: 0,
      },
    },
  ],
};

const useBacktestStore = create<backtestType>((set) => ({
  backtestData: initialBacktestData,
  isLoading: false,
  error: null,
  getBacktest: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosClient.get("/jobs/last_jobs?type=backtest");
      set({ backtestData: response.data, isLoading: false });
    } catch (error) {
      set({
        error: (error as any).detail || "Unknown error",
        isLoading: false,
      });
    }
  },
}));

export default useBacktestStore;
