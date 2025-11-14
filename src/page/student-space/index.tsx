import { useState, type JSX } from 'react';
import { StudentPortalProvider } from './bloc/useStudentPortalProvider';
import { DocDataTable } from './components/doc-list';
import { NavBar } from './components/nav-bar';
import { PostList } from './components/post-list';
import { StudentInformation } from './components/student-information';
import { ThemeProvider } from '../theme/useThemeProvider';
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const StudentSpaceContent = () => {
  const [index, setIndex] = useState<number>(0);
  const pages: JSX.Element[] = [
    <PostList />,
    <DocDataTable />,
    <StudentInformation />,
  ];

  return (
    <div className="h-screen w-full overflow-hidden bg-white dark:bg-zinc-900 text-gray-800 dark:text-white">
      <NavBar callBack={setIndex} index={index} />
      <main className="h-full w-full pt-24 pb-24 md:pb-8 px-4">
        {/* Desktop Layout */}
        <section className="hidden md:grid md:grid-cols-[1fr_1.5fr_1fr] h-full w-full gap-6">
          <StudentInformation />
          <PostList />
          <DocDataTable />
        </section>

        {/* Mobile Layout */}
        <section className="md:hidden h-full w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="h-full w-full"
            >
              {pages[index]}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
};

export const StudentSpacePage = () => {
  return (
    <StudentPortalProvider>
      <ThemeProvider>
        <StudentSpaceContent />
      </ThemeProvider>
    </StudentPortalProvider>
  );
};
