"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader, LogOut } from "lucide-react";
import React, { useTransition } from "react";
import { Logout } from "../actions/mutation";

export default function LogoutButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      className="flex items-center gap-2"
      variant="destructive"
      onClick={() => startTransition(() => Logout())}
    >
      ចេញ <LogOut size={20} className={cn({ hidden: isPending })} />
      <Loader className={cn("animate-spin", { hidden: !isPending })} />
    </Button>
  );
}
