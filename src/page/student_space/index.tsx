import { StudentPortalProvider } from './bloc/useStudentPortalProvider';
import { FileAndNewsSection } from './components/files-news-section';
import { NavBar } from './components/nav-bar';
import { PostList } from './components/post-list';

export const StudentSpacePage = () => {
  return (
    <StudentPortalProvider>
      <div className=" bg-zinc-100 h-screen overflow-x-hidden dark:bg-zinc-900 transition-all duration-500 flex flex-col">
        {/* <NavBar /> */}
        {/* <FileAndNewsSection /> */}
        <PostList />
      </div>
    </StudentPortalProvider>
  );
};
