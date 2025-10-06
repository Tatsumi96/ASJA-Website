import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AdminDashBoardProvider } from "./bloc/useAdminDasboardPortalProvider";

import { AppSidebar } from "@/components/app-sidebar";
// import { Dashboard } from "./page/dashboard";
import { Studentlist } from "./page/studentList";
import { NavBar } from "./components/NavBar";

export const AdminDashboardPage = () => {
  return (
    <AdminDashBoardProvider>
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset className=" overflow-hidden transition-all duration-500">
          <NavBar />
          <Studentlist />
        </SidebarInset>
      </SidebarProvider>
    </AdminDashBoardProvider>
  );
};
