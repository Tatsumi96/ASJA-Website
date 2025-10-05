import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AdminDashBoardProvider } from "./bloc/useAdminDasboardPortalProvider";
import { AddUserAndDocument } from "./components/AddUserAndDocument";
import { MentionCardList } from "./components/MentionListCard";
import { ChartPie } from "./components/PieChart";
import { AppSidebar } from "@/components/app-sidebar";
import { NavBar } from "./components/NavBar";

export const AdminDashboardPage = () => {
  return (
    <AdminDashBoardProvider>
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset className=" overflow-hidden ">
          <NavBar />
          <div className="flex flex-col w-full p-4  bg-zinc-100  dark:bg-zinc-900 transition-all h-full duration-500 ">
            <div className="flex  justify-around">
              <MentionCardList />
              <ChartPie />
            </div>
            <AddUserAndDocument />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </AdminDashBoardProvider>
  );
};
