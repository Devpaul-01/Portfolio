import { projects, projectsSection } from "../content/projectsIndexContent";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={projectsSection.eyebrow}
          heading={projectsSection.heading}
        />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {projectsSection.intro}
        </p>

        <div className="mt-10 space-y-6">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}

          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
