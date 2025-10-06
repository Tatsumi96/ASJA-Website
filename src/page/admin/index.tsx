import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AdminDashBoardProvider } from "./bloc/useAdminDasboardPortalProvider";

import { AppSidebar } from "@/page/admin/components/app-sidebar";
import { Dashboard } from "./page/dashboard";
import { Studentlist } from "./page/studentList";
import { NavBar } from "./components/NavBar";
import { useState, type JSX } from "react";

export const AdminDashboardPage = () => {
  const [index, setIndex] = useState<number>(0);
  const page: JSX.Element[] = [
    <Dashboard />,
    <p>Tranche Page</p>,
    <Studentlist />,
    <p>Document Page</p>,
  ];
  return (
    <AdminDashBoardProvider>
      <SidebarProvider>
        <AppSidebar changePage={setIndex} />
        <SidebarInset className=" overflow-hidden transition-all duration-500">
          <NavBar />
          {page[index]}
        </SidebarInset>
      </SidebarProvider>
    </AdminDashBoardProvider>
  );
};
