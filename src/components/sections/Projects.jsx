import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/data/projects";
// import LazyEmblaCarousel from "@/components/ui/LazyEmblaCarousel";
import { LazySwiperCarousel } from "@/components/ui/LazySwiperCarousel";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col lg:flex-row justify-between mx-auto flex-wrap gap-10 text-muted-foreground"
    >
      <h1 className="min-w-full">Projects</h1>

      {PROJECTS.map((project, id) => (
        <ProjectCard title={project.title} description={project.description} tags={project.tags} key={id}>
          <LazySwiperCarousel directory={project.directory} />
        </ProjectCard>
      ))}
    </section>
  );
};
