import { StudentPortalProvider } from './bloc/useStudentPortalProvider';
import { DocDataTable } from './components/doc-list';
import { NavBar } from './components/nav-bar';
import { PostList } from './components/post-list';
import { StudentInformation } from './components/student-information';

export const StudentSpacePage = () => {
  return (
    <StudentPortalProvider>
      <div className=" bg-white h-screen pt-20 py-5 px-5 gap-3 overflow-x-hidden dark:bg-zinc-900 transition-all duration-500 flex">
        <NavBar />
        <StudentInformation />
        <PostList />
        <DocDataTable />
      </div>
    </StudentPortalProvider>
  );
};
