import { create } from "zustand";
import { AdminUser } from "@/__generated__/graphql";

interface IUserStore {
  me: AdminUser | undefined | null;
}

export const userStore = create<IUserStore>()((set) => ({
  me: null,
}));
