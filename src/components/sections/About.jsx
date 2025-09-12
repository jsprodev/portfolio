import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
// import lightTheme from "react-syntax-highlighter/dist/esm/styles/hljs/docco";
// import lightTheme from "react-syntax-highlighter/dist/esm/styles/hljs/foundation";
import lightTheme from "react-syntax-highlighter/dist/esm/styles/hljs/vs";
import darkTheme from "react-syntax-highlighter/dist/esm/styles/hljs/an-old-hope";
import { Terminal } from "lucide-react";
import { X } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Code } from "lucide-react";
import { Braces } from "lucide-react";
import React from "@/assets/icons/react.svg?react";
import { useEffect, useRef } from "react";

export const About = ({ theme }) => {
  SyntaxHighlighter.registerLanguage("javascript", js);
  const SyntaxHighlighterRef = useRef(null);

  const codeString = `export const info = {
  name: "Hashim Bin Khalid",
  title: "Frontend Developer",
  experience: "4 years",
  skills: ["HTML, CSS, JavaScript, React, TailwindCSS, ..."],
  isAvailableForHire: true,
};`;

  let style = {};
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  if (systemTheme === "light" || theme === "light") {
    style = lightTheme;
  }
  if (systemTheme === "dark" || theme === "dark") {
    style = darkTheme;
  }

  useEffect(() => {
    SyntaxHighlighterRef.current.classList.add("bg-transparent");
  });

  return (
    <section
      id="about"
      className="flex flex-col items-center lg:flex-row justify-between flex-wrap mx-auto gap-10 text-muted-foreground py-10"
    >
      <div className="lg:w-[calc(50%-20px)] max-lg:text-center tracking-wide space-y-4">
        <h6 className="flex items-center max-lg:justify-center text-lg">
          <Terminal className="text-blue-600 dark:text-blue-500 stroke-2" />
          &nbsp;"Hello,World!" I am
        </h6>
        <h1 className="text-5xl">
          <span className="text-blue-600 dark:text-blue-500">H</span>ashim{" "}
          <span className="text-blue-600 dark:text-blue-500">B</span>in{" "}
          <span className="text-blue-600 dark:text-blue-500">K</span>halid
        </h1>
        <h2 className="text-2xl">Frontend Developer</h2>
        <p className="text-lg">
          A versatile developer who brings exceptional UX sensibility and component architecture expertise to every
          project.
        </p>
      </div>
      <div className="lg:w-[calc(50%-20px)]">
        <div className="rounded-2xl w-full bg-slate-200 dark:bg-slate-950 border border-slate-400/10 dark:border-slate-800 shadow-card hover:shadow-card-hover">
          <div className="flex flex-wrap text-sm tracking-wide">
            <span className="inline-flex items-center px-4 py-3  text-muted-foreground border-r-1 border-slate-400/20 dark:border-slate-800">
              <Code size={16} className="text-red-500 mr-1 mt-0.5" /> index.html
            </span>
            <span className="inline-flex items-center px-4 py-3 text-center text-muted-foreground border-r-1 border-slate-400/20 dark:border-slate-800 max-[400px]:hidden">
              <React className="size-4 mr-1 mt-0.5" />
              App.jsx
            </span>
            <span className="inline-flex items-center text-center font-medium  border-r-1 border-slate-400/20 dark:border-slate-800">
              <span className="inline-flex items-center border-b-2 border-blue-400 dark:border-blue-900 px-4 py-3">
                <Braces size={18} className="text-amber-500 mr-1 mt-0.5" />
                info.js
                <X size={16} className="ml-2" />
              </span>
            </span>
          </div>
          <div className="flex flex-col bg-codeeditor rounded-bl-2xl rounded-br-2xl">
            <div className="flex items-center text-[13px]/loose px-3 py-3 tracking-wide text-muted-foreground">
              <span>src</span>
              <ChevronRight size={16} className="mt-0.5" />
              <span>data</span>
              <ChevronRight size={16} className="mt-0.5" />
              <span>info.js</span>
            </div>
            <SyntaxHighlighter
              ref={SyntaxHighlighterRef}
              // showLineNumbers={true}
              // lineNumberStyle={{ color: "oklch(0.45 0.04 257)", margin: "0 15px 0 0px" }}
              style={style}
              customStyle={{ margin: "0rem 2rem 1.5rem", backgroundColor: "transparent !important" }}
              language="javascript"
              wrapLongLines={true}
              className=" text-sm/relaxed"
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </section>
  );
};
