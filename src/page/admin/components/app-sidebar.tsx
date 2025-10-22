'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import Logo from '@/assets/Logo/asja-logo.png';
import type { Dispatch, SetStateAction } from 'react';
import {
  MdBarChart,
  MdExitToApp,
  MdFileOpen,
  MdNewspaper,
  MdPeople,
  MdSyncLock,
} from 'react-icons/md';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAdminDashboardContext } from '../bloc/useStudentSpaceContext';

export const AppSidebar = ({
  changePage,
}: {
  changePage: Dispatch<SetStateAction<number>>;
}) => {
  const data = {
    navMain: [
      {
        title: 'Statistique des étudiants',
        url: '#',
        icon: MdBarChart,
        click: changePage,
      },

      {
        title: 'Liste des étudiants',
        url: '#',
        icon: MdPeople,
        click: changePage,
      },
      {
        title: 'Liste des document',
        url: '#',
        icon: MdFileOpen,
        click: changePage,
      },

      {
        title: 'Annonce',
        url: '#',
        icon: MdNewspaper,
        click: changePage,
      },
      {
        title: 'Historique',
        url: '#',
        icon: MdSyncLock,
        click: changePage,
      },
    ],
  };
  const { logOut } = useAdminDashboardContext();

  const navigate = useNavigate();
  const handleLogout = () => {
    logOut(navigate);
  };

  return (
    <Sidebar collapsible="offcanvas" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="hover:bg-transparent h-15">
              <a
                className="flex  cursor-pointer"
                onClick={() => (window.location.href = '/')}
              >
                <img className="w-14 h-14" src={Logo} />
                <h1 className="py-5 mt-1 text-gray-900 dark:text-white font-semibold">
                  Université ASJA
                </h1>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              {data.navMain.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="cursor-pointer font-bold py-[30px] text-lg border-b-2 rounded-none "
                    tooltip={item.title}
                    onClick={() => item.click(index)}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button
          onClick={handleLogout}
          className=" bg-transparent hover:bg-transparent flex w-full cursor-pointer p-6"
        >
          <p className=" text-xl text-red-600 flex items-center gap-1">
            {' '}
            <MdExitToApp /> Se deconnecter
          </p>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};
