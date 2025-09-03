import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
// import GitHub from "@/assets/icons/github.svg?react";
// import Linkedin from "@/assets/icons/Linkedin.svg?react";
import React from "@/assets/icons/react.svg?react";
import Tailwind from "@/assets/icons/tailwind.svg?react";
import Shadcn from "@/assets/icons/shadcn.svg?react";
import vite from "@/assets/icons/vite.svg";
import { Logo } from "./Logo";
import { Mail } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-sm tracking-wide">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row flex-wrap justify-between">
          <div className="max-md:mb-6 basis-[50%] pr-5 space-y-3">
            <Logo className="dark" />
            <p className="max-md:text-center">
              Front End Engineer with a solid foundation in web development principles and a passion for creating
              visually appealing and functional user interfaces.
            </p>
            <div className="flex space-x-4 items-center mt-4">
              <a href="https://www.linkedin.com/in/hashimkhalid/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
                <span className="sr-only">Linkedin</span>
              </a>
              <a href="https://github.com/jsprodev" target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                <span className="sr-only">Github</span>
              </a>
              <a href="mailto:jsprodev@gmail.com">
                <Mail size={18} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end basis-[50%]">
            <br />
            <div className="flex items-center">
              © 2025 HBK | Built with &nbsp;
              <Tooltip>
                <TooltipTrigger>
                  <div className="bg-slate-700 p-1 rounded-sm">
                    <React className="h-4 w-4" />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  className="bg-slate-700 text-slate-300"
                  arrowBackground={"bg-slate-700"}
                  arrowFill={"fill-slate-700"}
                >
                  <p>React</p>
                </TooltipContent>
              </Tooltip>
              <span className="w-5 text-center">+</span>
              <Tooltip>
                <TooltipTrigger>
                  <div className="bg-slate-700 p-1 rounded-sm">
                    <img src={vite} alt="Vite logo" className="h-4 w-4" />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  className="bg-slate-700 text-slate-300"
                  arrowBackground={"bg-slate-700"}
                  arrowFill={"fill-slate-700"}
                >
                  <p>Vite</p>
                </TooltipContent>
              </Tooltip>
              <span className="w-5 text-center">+</span>
              <Tooltip>
                <TooltipTrigger>
                  <div className="bg-slate-700 p-1 rounded-sm">
                    <Tailwind className="h-4 w-4" />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  className="bg-slate-700 text-slate-300"
                  arrowBackground={"bg-slate-700"}
                  arrowFill={"fill-slate-700"}
                >
                  <p>TailwindCSS</p>
                </TooltipContent>
              </Tooltip>
              <span className="w-5 text-center">+</span>
              <Tooltip>
                <TooltipTrigger>
                  <div className="bg-slate-700 p-1 rounded-sm">
                    <Shadcn className="h-4 w-4" />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  className="bg-slate-700 text-slate-300"
                  arrowBackground={"bg-slate-700"}
                  arrowFill={"fill-slate-700"}
                >
                  <p>Shadcn</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
