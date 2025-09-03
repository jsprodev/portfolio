import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export const ProjectCard = ({ title, description, tags, children }) => {
  return (
    <Card className={`max-lg:max-w-full lg:w-[calc(50%-20px)]`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">{children}</CardContent>
      <CardFooter className={"pt-0"}>
        {tags &&
          tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-100 px-2.5 py-1 text-blue-600 dark:bg-slate-800 dark:text-muted-foreground"
            >
              {tag}
            </span>
          ))}
      </CardFooter>
    </Card>
  );
};
//
