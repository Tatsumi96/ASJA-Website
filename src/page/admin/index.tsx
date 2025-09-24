import { AdminDashBoardProvider } from "./bloc/useAdminDasboardPortalProvider";
import { FileAndNewsSection } from "./components/files_news_section";
import { NavBar } from "./components/nav_bar";
import { StatisSection } from "./components/statis_section";

export const AdminDashboardPage = () => {
  return (
    <AdminDashBoardProvider>
      <div className=" bg-zinc-100 dark:bg-zinc-900 transition-all duration-500 flex flex-col">
        <NavBar />
        <StatisSection />
        <FileAndNewsSection />
      </div>
    </AdminDashBoardProvider>
  );
};
