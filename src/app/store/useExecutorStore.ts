import { CreateExecutorRequestBody, dataState } from "@/constants/data";
import axiosClient from "@/lib/axiosClient";
import { toast } from "react-toastify";
import { create } from "zustand";

const useExecutorStore = create<dataState>((set, get) => ({
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
  cloneExecutor: async (body: {
    executor_id: string;
    clone_mode: string;
    symbols: string[];
  }) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosClient.post("/user/clone_executor", body);
      await get().getData(); // Refresh data after cloning
      set({ isLoading: false });
    } catch (error) {
      set({
        error: (error as any).detail || "Unknown error",
        isLoading: false,
      });
    }
  },
  deleteExecutor: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      await axiosClient.delete(`/user/delete_executer/${id}`);
      await get().getData(); // Refresh data after deletion
      set({ isLoading: false });
    } catch (error) {
      set({
        error: (error as any).detail || "Unknown error",
        isLoading: false,
      });
    }
  },

  createExecutor: async (requestBody: CreateExecutorRequestBody) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosClient.post(
        "/user/create_executer",
        requestBody
      );
      await get().getData();
      set({ isLoading: false });
    } catch (error) {
      set({
        error: (error as any).detail || "Unknown error",
        isLoading: false,
      });
    }
  },

  editExecutor: async (requestBody: CreateExecutorRequestBody) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosClient.post(
        "/user/edit_executer",
        requestBody
      );
      await get().getData();
      set({ isLoading: false });
    } catch (error) {
      set({
        error: (error as any).detail || "Unknown error",
        isLoading: false,
      });
    }
  },

  runBacktest: async (requestBody: any) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosClient.post(
        "/jobs/new_bath_backtest",
        requestBody
      );
      await get().getData();
      set({ isLoading: false });
      if (response.status === 201) {
        toast.success("backtest created successfully.");
      }
    } catch (error) {
      set({
        error: (error as any).detail || "Unknown error",
        isLoading: false,
      });
    }
  },
}));

export default useExecutorStore;
