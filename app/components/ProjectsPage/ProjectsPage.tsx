import { FocusCards } from "@/app/components/ui/focus-cards";
import { CTA } from "../ui/CTA";
import { PROJECTS } from "@/app/lib/projects";

export const ProjectsPage = () => {
  return (
    <section id="projects" className="bg-black text-white p-10 scroll-mt-20">
      <div className="flex justify-between items-center mb-10 flex-wrap gap-2">
        <h2 className="text-3xl md:text-[5rem] font-bold uppercase md:leading-[5rem] relative">
          Top
          <span className="text-[.5rem] md:text-sm font-light absolute right-0 top-[1rem] md:top-[4rem]">
            Proyectos únicos
          </span>
          <span className="block">projects</span>
        </h2>

        <CTA
          bgColor="bg-primary"
          bgSecondary="bg-secondary"
          paddingX="px-4"
          paddingY="py-2"
          title="Our projects"
          colorTitle="text-white"
          rotate="md:rotate-[90deg]"
          rotateIcon="rotate-45 md:-rotate-45"
        />
      </div>
      <FocusCards cards={PROJECTS} />
    </section>
  );
};
