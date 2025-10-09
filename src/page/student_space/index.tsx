import { StudentPortalProvider } from "./bloc/useStudentPortalProvider";
import { FileAndNewsSection } from "./components/files-news-section";
import { NavBar } from "./components/nav-bar";
import { StatisSection } from "./components/statis-section";

export const StudentSpacePage = () => {
  return (
    <StudentPortalProvider>
      <div className=" bg-zinc-100 overflow-x-hidden dark:bg-zinc-900 transition-all duration-500 flex flex-col">
        <NavBar />
        <StatisSection />
        <FileAndNewsSection />
      </div>
    </StudentPortalProvider>
  );
};
