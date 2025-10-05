import { AdminDashBoardProvider } from "./bloc/useAdminDasboardPortalProvider";
import { AddUserAndDocument } from "./components/AddUserAndDocument";
import { MentionCardList } from "./components/MentionListCard";
import { NavBar } from "./components/nav_bar";
import { ChartPie } from "./components/PieChart";

export const AdminDashboardPage = () => {
  return (
    <AdminDashBoardProvider>
      <div className="flex flex-col w-full p-4 pt-20 bg-zinc-100  dark:bg-zinc-900 transition-all h-full duration-500 ">
        <NavBar />
        <div className="flex">
        <MentionCardList />
        <ChartPie />
        </div>
        <AddUserAndDocument />
      </div>
    </AdminDashBoardProvider>
  );
};
