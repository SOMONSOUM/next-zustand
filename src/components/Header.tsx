import { userStore } from "@/store";

export const Header: React.FC = () => {
  const { me } = userStore.getState();
  return (
    <p>
      {me?.first_name} {me?.last_name}
    </p>
  );
};
