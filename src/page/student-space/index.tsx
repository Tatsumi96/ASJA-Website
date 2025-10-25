import { useState, type JSX } from 'react';
import { StudentPortalProvider } from './bloc/useStudentPortalProvider';
import { DocDataTable } from './components/doc-list';
import { NavBar } from './components/nav-bar';
import { PostList } from './components/post-list';
import { StudentInformation } from './components/student-information';

export const StudentSpacePage = () => {
  const [index, setIndex] = useState<number>(0);
  const page: JSX.Element[] = [
    <PostList />,
    <DocDataTable />,
    <StudentInformation />,
  ];
  return (
    <StudentPortalProvider>
      <div className=" bg-white h-screen pt-[130px]  px-1 lg:px-5 gap-3 overflow-x-hidden dark:bg-zinc-900 transition-all duration-500 flex">
        <NavBar callBack={setIndex} index={index} />
        <section className="md:flex hidden w-full ">
          <StudentInformation />
          <PostList />
          <DocDataTable />
        </section>
        <section className="md:hidden flex justify-center  w-full">
          {page[index]}
        </section>
      </div>
    </StudentPortalProvider>
  );
};
