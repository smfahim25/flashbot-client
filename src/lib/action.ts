"use server";
// import { flashbot } from "@/api/flashbot";
import { cookies } from "next/headers";
import { createFlashbot } from "./flashbot";

export async function addExecutorAction(payload: any, apiBaseUrl: string) {
  const token = cookies().get("_token")?.value;
  console.log("token: ", token);
  const flashbot = createFlashbot(apiBaseUrl);
  try {
    const { data } = await flashbot.post("/v1/user/create_executer", payload, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
