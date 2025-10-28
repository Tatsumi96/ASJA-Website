import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AdminDashBoardProvider } from './bloc/useAdminDasboardPortalProvider';

import { AppSidebar } from '@/page/admin/components/app-sidebar';
import { useState, type JSX } from 'react';
import { Modalprovider } from './bloc/useModalProvider';
import { MessageDeveloperScreen } from './components/mesage-developer-screen';
import { NavBar } from './components/nav-bar';
import { Dashboard } from './page/dashboard';
import { Doclist } from './page/doc-list';
import { Loglist } from './page/log-list';
import { Postlist } from './page/post-list';
import { Studentlist } from './page/student-list';
export const AdminDashboardPage = () => {
  const [index, setIndex] = useState<number>(0);
  const page: JSX.Element[] = [
    <Dashboard />,
    <Studentlist />,
    <Doclist />,
    <Postlist />,
    <Loglist />,
  ];
  return (
    <AdminDashBoardProvider>
      <Modalprovider>
        {' '}
        <SidebarProvider>
          <AppSidebar changePage={setIndex} />
          <SidebarInset className=" overflow-hidden hidden md:flex transition-all duration-500">
            <NavBar />
            {page[index]}
          </SidebarInset>
          <MessageDeveloperScreen />
        </SidebarProvider>
      </Modalprovider>
    </AdminDashBoardProvider>
  );
};
