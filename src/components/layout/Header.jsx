import { useState } from "react";
import { Menu } from "lucide-react";
import { SunMoon } from "lucide-react";
// import { useTheme } from "@/theme/useTheme";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Logo } from "./Logo";

export const Header = ({ links, btnIcon, btnName, setTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const { theme, setTheme } = useTheme();
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-100/70 dark:bg-slate-950/80 backdrop-blur-sm h-[64px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
        <div className="flex flex-wrap align-items justify-between text-muted-foreground text-sm font-medium tracking-wide">
          <Logo />
          <div className={`flex items-center`}>
            <div
              className={`max-sm:absolute max-sm:top-[60px] max-sm:left-0 max-sm:bg-background  ${
                mobileMenuOpen ? "max-sm:w-full" : "max-sm:hidden"
              }`}
            >
              <ul className="flex flex-col sm:flex-row sm:items-center w-full space-x-4 max-sm:space-y-4 max-sm:p-5 font-regular max-sm:bg-slate-100 max-sm:shadow-sm dark:max-sm:bg-gray-950  ">
                {links.map((link, index) => (
                  <li key={index} className="">
                    <a className="capitalize p-2 hover:text-blue-600" aria-current="page" href={`#${link}`}>
                      {link}
                    </a>
                  </li>
                ))}
                {/* <li>
                  <button className="flex items-center">{btnName}</button>
                </li> */}
              </ul>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex ml-2 p-2">
                <SunMoon className="hover:text-blue-600" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-muted-foreground dark:bg-gray-900 tracking-wide font-normal">
                <DropdownMenuLabel>Theme</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className={"focus:bg-slate-200 dark:focus:bg-slate-800"}
                  onClick={() => setTheme("system")}
                >
                  System
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={"focus:bg-slate-200 dark:focus:bg-slate-800"}
                  onClick={() => setTheme("light")}
                >
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={"focus:bg-slate-200 dark:focus:bg-slate-800"}
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button onClick={handleMobileMenuToggle} className="hidden max-sm:flex items-center p-2.5">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
