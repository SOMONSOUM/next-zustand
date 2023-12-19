"use server";

import { LoginAdminUserDocument } from "@/__generated__/graphql";
import { client } from "@/lib/client";

import { LoginInput } from "@/schema";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const Login = async (input: LoginInput) => {
  const { data, error } = await client.mutation(LoginAdminUserDocument, {
    input,
  });

  if (data?.loginAdminUser?.token) {
    cookies().set("token", data.loginAdminUser.token);
  }

  return {
    token: data?.loginAdminUser?.token,
    error: error?.message,
  };
};

export async function Logout() {
  cookies().delete("token");
  redirect("/login");
}
