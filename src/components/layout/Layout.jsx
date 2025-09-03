import { Header } from "./Header";
import { Footer } from "./Footer";
// import { FileUser } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

export const Layout = ({ children, setTheme }) => {
  return (
    <>
      <Header
        links={["about", "projects", "skills", "experience", "contact"]}
        // btnIcon={<FileUser size={20} />}
        btnName={"Resume"}
        setTheme={setTheme}
      />
      <div className="min-h-dvh max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
      <Toaster
        expand={true}
        position="top-right"
        toastOptions={{
          unstyled: true,
          classNames: {
            toast:
              "flex justify-start max-w-sm overflow-hidden rounded-lg bg-card p-0 gap-3 shadow-md dark:border !top-12",
            icon: "flex items-center justify-center m-0 w-14 text-white",
            content: "py-3",
            title: "font-normal mb-1",
            description: "text-muted-foreground text-sm",
            actionButton: "justify-center self-start bg-transparent text-muted-foreground p-4",
          },
        }}
      />
      <Footer />
    </>
  );
};
