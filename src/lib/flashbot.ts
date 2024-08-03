import axios from "axios";

export function createFlashbot(baseUrl: string) {
  return axios.create({
    baseURL: baseUrl,
  });
}
