import { getMe } from "@/actions/query";
import LogoutButton from "@/components/LogoutButton";
import { userStore } from "@/store";

export default async function Admin() {
  const { me } = await getMe();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <LogoutButton />
    </div>
  );
}
