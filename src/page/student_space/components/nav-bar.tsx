import Logo from "@/assets/Logo/asja-logo.png";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/page/theme/useTheme";
import { useLangue } from "@/page/lang/useLang";
import { useStudentPortalContext } from "../bloc/useStudentSpaceContext";

export const NavBar = () => {
  const { userName } = useStudentPortalContext();
  const { toggleTheme, isDark } = useTheme();
  const { toggleLang, isEn } = useLangue();
  return (
    <div className="flex justify-between top-0 py-3 px-4 fixed w-full text-gray-800 z-50">
      <a
        className=" cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        <div className="flex m-2 rounded-full ">
          <img src={Logo} className="md:size-13 size-10 " />
          <h1 className="text-gray-800 font-bold hidden md:flex ml-4 py-3 pr-4 transition-all duration-500 dark:text-white">
            Universté ASJA
          </h1>
        </div>
      </a>

      <div className=" md:flex items-center hidden ">
        <NavigationMenuSection />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex">
          <button
            className="md:px-5 text-green-700 cursor-pointer"
            onClick={toggleLang}
          >
            {isEn ? "FR" : "EN"}
          </button>
          <button
            className="px-5 text-green-700 cursor-pointer"
            onClick={toggleTheme}
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
        </div>
        <DropButton name={userName} />
      </div>
    </div>
  );
};

const DropButton = ({ name }: { name: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="transition-all duration-500 ">
        <div className=" cursor-pointer flex bg-white dark:bg-zinc-800 rounded-2xl px-4 py-2  md:px-5 md:py-2 w-full justify-between gap-2 items-center">
          {" "}
          <Avatar className=" md:size-11 ">
            <AvatarFallback className="dark:text-white dark:bg-zinc-600">
              {name[0]}
            </AvatarFallback>
          </Avatar>
          <p className="dark:text-white">{name}</p>
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

const NavigationMenuSection = () => {
  return (
    <NavigationMenu className="transition-all duration-500">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Dashboard
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Evenement
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
