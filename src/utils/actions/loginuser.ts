"use server";

import { FormValues } from "@/app/loging/page";

export const loginUser = async (data: FormValues) => {
  const res = await fetch(`${process.env.BACKEND_URL}/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const userInfo = await res.json();
  console.log(userInfo);

  if (!res.ok) {
    throw new Error(userInfo.message || "Login failed");
  }

  return userInfo;
};
