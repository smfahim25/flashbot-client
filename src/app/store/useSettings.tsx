import { Settings } from "@/constants/data";
import axiosClient from "@/lib/axiosClient";
import { toast } from "react-toastify";
import { create } from "zustand";

const useSettings = create<Settings>((set, get) => ({
  data: [],
  settingsData: {},
  apiData: {
    api_key: "",
    api_secret: "",
  },
  isLoading: false,
  error: null,
  getAvailable: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosClient.get("/info/default_settings");
      set({ data: response.data?.settings, isLoading: false });
    } catch (error) {
      set({
        error: (error as any).detail || "Unknown error",
        isLoading: false,
      });
    }
  },
  getSetting: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosClient.get("/user/settings");
      set({ settingsData: response.data?.settings, isLoading: false });
    } catch (error) {
      set({
        error: (error as any).detail || "Unknown error",
        isLoading: false,
      });
    }
  },
  changeSetting: async (requestBody) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosClient.post(
        "/user/change_setting",
        requestBody
      );
      await get().getSetting();
      await get().getAvailable();
      set({ isLoading: false });
    } catch (error) {
      set({
        error: (error as any).detail || "Unknown error",
        isLoading: false,
      });
    }
  },
  getApiKeys: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosClient.get("/user/api_keys");
      set({ apiData: response.data, isLoading: false });
    } catch (error) {
      set({
        error: (error as any).detail || "Unknown error",
        isLoading: false,
      });
    }
  },
  editApiKey: async (requestBody) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosClient.post("/user/api_keys", requestBody);
      await get().getSetting();
      await get().getAvailable();
      await get().getApiKeys();
      set({ isLoading: false });
      if (response.status === 200) {
        toast.success("Successfully updated the Api Keys");
      }
    } catch (error) {
      set({
        error: (error as any).detail || "Unknown error",
        isLoading: false,
      });
    }
  },
}));

export default useSettings;
