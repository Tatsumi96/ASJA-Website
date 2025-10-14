import { SidebarTrigger } from '@/components/ui/sidebar';

import { Moon, Sun } from 'lucide-react';
import { useAdminDashboardContext } from '../bloc/useStudentSpaceContext';
import { useTheme } from '@/page/theme/useTheme';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const DropButton = ({ name }: { name: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="transition-all duration-500 ">
        <div className=" cursor-pointer flex rounded-2xl  py-2 w-full justify-between gap-2 items-center">
          {' '}
          <Avatar className=" size-11 ">
            <AvatarFallback className="dark:text-white  dark:bg-zinc-600">
              <AvatarImage src={name} />
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const NavBar = () => {
  const { userData } = useAdminDashboardContext();
  const { toggleTheme, isDark } = useTheme();
  return (
    <header className=" group-has-data-[collapsible=icon]/sidebar-wrapper:h-12  duration-500 flex dark:bg-zinc-800 h-15 shrink-0 items-center gap-2 border-b transition-all ease-linear">
      <div className="flex w-full  justify-between items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <section className="flex items-center gap-5">
          {' '}
          <SidebarTrigger className="-ml-1 text-green-700 hover:text-green-700" />
          <p className="font-semibold md:flex hidden">
            Administrateur : {userData?.name}
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
          <DropButton name={userData?.name as string} />
        </div>
      </div>
    </header>
  );
};
