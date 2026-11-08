import { useState, type ReactNode } from 'react';
import { Minus, Plus } from 'lucide-react';
import type { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
  visual: ReactNode;
  featured?: boolean;
}

export default function ProjectCard({ project, visual, featured = false }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const detailsId = `${project.id}-details`;

  return (
    <article
      className={`group relative flex flex-col border border-line bg-ink-soft transition-colors duration-500 hover:border-accent/60 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out group-hover:scale-x-100"
      />

      <div className={featured ? 'grid lg:grid-cols-2' : 'flex flex-1 flex-col'}>
        <div className={`flex flex-col gap-6 p-6 md:p-10 ${featured ? 'order-2 lg:order-1' : 'flex-1'}`}>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
            <span className="text-accent">{project.number}</span>
            <span className="mx-3 text-line">/</span>
            {project.categories.join(' | ')}
          </p>

          <h3
            className={`font-display font-bold uppercase leading-[1.2] tracking-[-0.02em] ${
              featured ? 'text-2xl md:text-3xl lg:text-[2.25rem]' : 'text-3xl md:text-4xl'
            }`}
          >
            {project.title}
          </h3>

          <p className="text-base leading-normal text-muted">{project.summary}</p>

          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-muted transition-colors duration-300 group-hover:text-white"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-2">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls={detailsId}
              className="group/btn inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-white transition-colors hover:text-accent"
            >
              <span className="flex h-8 w-8 items-center justify-center border border-line transition-colors group-hover/btn:border-accent">
                {open ? <Minus className="h-4 w-4" aria-hidden /> : <Plus className="h-4 w-4" aria-hidden />}
              </span>
              {open ? 'Hide details' : 'Explore details'}
            </button>
          </div>

          <div
            id={detailsId}
            className={`grid transition-[grid-template-rows] duration-500 ease-out ${
              open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col gap-6 border-t border-line pt-6">
                {project.details.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-normal text-muted md:text-base">
                    {paragraph}
                  </p>
                ))}

                {project.framework && (
                  <ol className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.12em]">
                    {project.framework.map((step, index) => (
                      <li key={step} className="flex items-center gap-2">
                        <span className="border border-accent px-3 py-2 text-white">{step}</span>
                        {index < project.framework!.length - 1 && <span className="text-accent">&rarr;</span>}
                      </li>
                    ))}
                  </ol>
                )}

                {project.role && (
                  <div className="flex flex-col gap-2">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">My role</p>
                    <p className="text-sm leading-normal text-muted md:text-base">{project.role}</p>
                  </div>
                )}

                {project.note && (
                  <p className="font-mono text-xs uppercase leading-normal tracking-[0.12em] text-white">{project.note}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`relative overflow-hidden border-b border-line bg-ink ${
            featured ? 'order-1 aspect-[16/10] border-b-0 lg:order-2 lg:aspect-auto lg:border-l' : 'aspect-[16/10]'
          }`}
        >
          {visual}
        </div>
      </div>
    </article>
  );
}
