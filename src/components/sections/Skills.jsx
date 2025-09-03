import React from "@/assets/icons/react.svg?react";
import HTML from "@/assets/icons/html.svg?react";
import CSS from "@/assets/icons/css.svg?react";
import JavaScript from "@/assets/icons/javascript.svg?react";
import TypeScript from "@/assets/icons/typescript.svg?react";
import JQuery from "@/assets/icons/jquery.svg?react";
import Bootstrap from "@/assets/icons/bootstrap.svg?react";
import Git from "@/assets/icons/git.svg?react";
import GitHub from "@/assets/icons/github.svg?react";
import Tailwind from "@/assets/icons/tailwind.svg?react";
import Shadcn from "@/assets/icons/shadcn.svg?react";
import Npm from "@/assets/icons/npm.svg?react";
// import Vite from "@/assets/icons/vite.svg?react";
// import Vscode from "@/assets/icons/vscode.svg?react";
import vite from "@/assets/icons/vite.svg";
import vscode from "@/assets/icons/vscode.svg";

export const Skills = () => {
  return (
    <section id="skills" className="flex flex-row flex-wrap py-10 gap-10 justify-center items-center">
      <h1 className="min-w-full">Tech Stack</h1>
      <div className="flex flex-col justify-center skill-icon shadow-skill hover:shadow-skill-hover">
        <HTML className="size-9 mb-2" />
        <span className="text-muted-foreground text-sm">HTML</span>
      </div>

      <div className="flex flex-col justify-center skill-icon shadow-skill hover:shadow-skill-hover">
        <CSS className="size-9 mb-2" />
        <span className="text-muted-foreground text-sm tracking-wide">CSS</span>
      </div>

      <div className="flex flex-col justify-center skill-icon shadow-skill hover:shadow-skill-hover">
        <JavaScript className="size-9 mb-2" />
        <span className="text-muted-foreground text-sm tracking-wide">JavaScript</span>
      </div>

      <div className="flex flex-col justify-center skill-icon shadow-skill hover:shadow-skill-hover">
        <TypeScript className="size-9 mb-2" />
        <span className="text-muted-foreground text-sm tracking-wide">TypeScript</span>
      </div>

      <div className="flex flex-col justify-center skill-icon shadow-skill hover:shadow-skill-hover">
        <React className="size-9 mb-2" />
        <span className="text-muted-foreground text-sm tracking-wide">React</span>
      </div>

      <div className="flex flex-col justify-center skill-icon shadow-skill hover:shadow-skill-hover">
        {/* <Vite className="size-9 mb-2" /> */}
        <img src={vite} className="size-9 mb-2" alt="Vite Icon" />
        <span className="text-muted-foreground text-sm tracking-wide">Vite</span>
      </div>

      <div className="flex flex-col justify-center skill-icon shadow-skill hover:shadow-skill-hover">
        <Tailwind className="size-9 mb-2" />
        <span className="text-muted-foreground text-sm tracking-wide">Tailwind</span>
      </div>

      <div className="flex flex-col justify-center skill-icon shadow-skill hover:shadow-skill-hover">
        <Shadcn className="size-9 mb-2" />
        <span className="text-muted-foreground text-sm tracking-wide">Shadcn</span>
      </div>

      <div className="flex flex-col justify-center skill-icon shadow-skill hover:shadow-skill-hover">
        <JQuery className="size-9 mb-2" />
        <span className="text-muted-foreground text-sm tracking-wide">JQuery</span>
      </div>

      <div className="flex flex-col justify-center skill-icon shadow-skill hover:shadow-skill-hover">
        <Bootstrap className="size-9 mb-2" />
        <span className="text-muted-foreground text-sm tracking-wide">Bootstrap</span>
      </div>

      <div className="flex flex-col justify-center skill-icon shadow-skill hover:shadow-skill-hover">
        <Git className="size-9 mb-2" />
        <span className="text-muted-foreground text-sm tracking-wide">Git</span>
      </div>

      <div className="flex flex-col justify-center skill-icon shadow-skill hover:shadow-skill-hover">
        <GitHub className="size-9 mb-2 dark:*:fill-black" />
        <span className="text-muted-foreground text-sm tracking-wide">GitHub</span>
      </div>

      <div className="flex flex-col justify-center skill-icon shadow-skill hover:shadow-skill-hover">
        {/* <Vscode className="size-9 mb-2" /> */}
        <img src={vscode} className="size-9 mb-2" alt="VS Code Icon" />
        <span className="text-muted-foreground text-sm tracking-wide">VS Code</span>
      </div>

      <div className="flex flex-col justify-center skill-icon shadow-skill hover:shadow-skill-hover">
        <Npm className="size-9 mb-2" />
        <span className="text-muted-foreground text-sm tracking-wide">NPM</span>
      </div>
    </section>
  );
};
