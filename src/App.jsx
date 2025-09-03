import { Layout } from "./components/layout/Layout";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { ErrorBoundary } from "./errors/ErrorBoundary";
import { useState, useEffect } from "react";
import FullScreen from "./components/sections/FullScreen";
// import { ThemeProvider } from "./theme/ThemeProvider";

function App() {
  // Princess Aysham
  const [theme, setTheme] = useState(() => localStorage.getItem("vite-ui-theme") || "system");
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      return;
    }
    root.classList.add(theme);
  }, [theme]);

  const handleThemeChange = (theme) => {
    localStorage.setItem("vite-ui-theme", theme);
    setTheme(theme);
  };

  return (
    <ErrorBoundary>
      {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
      <Layout setTheme={handleThemeChange}>
        <About theme={theme} />
        {/* <FullScreen /> */}
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </Layout>
      {/* </ThemeProvider> */}
    </ErrorBoundary>
  );
}

export default App;
