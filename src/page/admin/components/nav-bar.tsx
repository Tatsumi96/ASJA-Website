import { SidebarTrigger } from '@/components/ui/sidebar';

import { useTheme } from '@/page/theme/useTheme';
import { Moon, Sun } from 'lucide-react';
import { useAdminDashboardContext } from '../bloc/useAdminContext';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const DropButton = ({ name }: { name: string }) => {
  return (
    <div className=" flex rounded-2xl  py-2 w-full justify-between gap-2 items-center">
      {' '}
      <Avatar className=" size-11 ">
        <AvatarFallback className="dark:text-white  dark:bg-zinc-600">
          <AvatarImage src={name} />
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export const NavBar = () => {
  const { adminData } = useAdminDashboardContext();
  const { toggleTheme, isDark } = useTheme();
  return (
    <header className=" group-has-data-[collapsible=icon]/sidebar-wrapper:h-12  duration-500 flex dark:bg-zinc-800 h-15 shrink-0 items-center gap-2 border-b transition-all ease-linear">
      <div className="flex w-full  justify-between items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <section className="flex items-center gap-5">
          {' '}
          <SidebarTrigger className="-ml-1 text-green-700 hover:text-green-700" />
          <p className="font-semibold md:flex hidden">
            Administrateur : {adminData?.name}
          </p>
        </section>

        <div className="flex justify-end  items-center mr-5 ">
          <div className="flex">
            <button
              className="px-5 text-green-700 cursor-pointer"
              onClick={toggleTheme}
            >
              {isDark ? <Sun /> : <Moon />}
            </button>
          </div>
          <DropButton name={adminData?.name as string} />
        </div>
      </div>
    </header>
  );
};
