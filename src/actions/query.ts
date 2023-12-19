"use server";

import { AdminMeDocument } from "@/__generated__/graphql";
import { client } from "@/lib/client";

export const getMe = async () => {
  const { data, error } = await client.query(AdminMeDocument, {});

  return {
    me: data?.adminMe,
    error: error?.message,
  };
};
