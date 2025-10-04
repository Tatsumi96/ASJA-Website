import { AdminDashBoardProvider } from "./bloc/useAdminDasboardPortalProvider";
import { AddUserAndDocument } from "./components/AddUserAndDocument";
import { MentionCardList } from "./components/MentionListCard";
import { NavBar } from "./components/nav_bar";

export const AdminDashboardPage = () => {
  return (
    <AdminDashBoardProvider>
      <div className="flex flex-col w-full gap-3 p-4 pt-15 bg-zinc-100  dark:bg-zinc-900 transition-all h-full duration-500 ">
        <NavBar />
        <MentionCardList />
        <AddUserAndDocument />
      </div>
    </AdminDashBoardProvider>
  );
};
