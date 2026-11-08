import ProjectCard from '@/components/projects/ProjectCard';
import { AlignmentGraphic, FrameworkGraphic, SonificationGraphic } from '@/components/projects/ProjectVisuals';
import SectionHeader from '@/components/ui/SectionHeader';
import { PROJECTS } from '@/data/portfolio';

const [agriGene, bioValue, dnaSonification] = PROJECTS;

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader index="02" label="Projects" lines={['SELECTED PROJECTS.']} />

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <ProjectCard project={agriGene} visual={<AlignmentGraphic />} featured />
          <ProjectCard project={bioValue} visual={<FrameworkGraphic />} />
          <ProjectCard project={dnaSonification} visual={<SonificationGraphic />} />
        </div>
      </div>
    </section>
  );
}
