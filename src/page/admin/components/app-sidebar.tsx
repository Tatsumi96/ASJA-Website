'use client';

import {
  Sidebar,
  SidebarContent,
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
  MdFileOpen,
  MdPeople,
  MdSyncLock,
  MdTrendingUp,
} from 'react-icons/md';

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
        title: 'Statistique des tranches',
        url: '#',
        icon: MdTrendingUp,
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
        title: 'Historique',
        url: '#',
        icon: MdSyncLock,
        click: changePage,
      },
    ],
  };

  return (
    <Sidebar collapsible="offcanvas" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="hover:bg-transparent">
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
                    className="cursor-pointer font-boldaaaaaaaaa"
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
    </Sidebar>
  );
};
