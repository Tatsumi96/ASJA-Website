import { StudentPortalProvider } from "./bloc/useStudentPortalProvider";
import { FileAndNewsSection } from "./components/files_news_section";
import { NavBar } from "./components/nav_bar";
import { StatisSection } from "./components/statis_section";

export const StudentSpacePage = () => {
  return (
    <StudentPortalProvider>
      <div className=" bg-zinc-100 flex flex-col">
        <NavBar />
        <StatisSection />
        <FileAndNewsSection />
      </div>
    </StudentPortalProvider>
  );
};
