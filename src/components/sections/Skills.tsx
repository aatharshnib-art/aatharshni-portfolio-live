import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { SKILL_GROUPS, type SkillGroupData } from '@/data/portfolio';

function GroupTitle({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-8 flex items-baseline justify-between gap-6 border-b border-line pb-4">
      <h3 className="font-display text-xl font-bold uppercase tracking-[-0.01em] md:text-2xl">{title}</h3>
      <span className="font-mono text-xs text-accent">{index}</span>
    </div>
  );
}

function ChipGroup({ group }: { group: SkillGroupData }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {group.items.map((item) => (
        <li
          key={item}
          className="border border-line px-4 py-2.5 font-mono text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-ink"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function RuledList({ group }: { group: SkillGroupData }) {
  return (
    <ul className="grid gap-x-10 sm:grid-cols-2">
      {group.items.map((item) => (
        <li
          key={item}
          className="group flex items-center justify-between border-b border-line py-4 text-base text-white transition-colors duration-300 hover:text-accent"
        >
          <span className="transition-transform duration-300 group-hover:translate-x-1">{item}</span>
          <ArrowUpRight className="h-4 w-4 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
        </li>
      ))}
    </ul>
  );
}

function OutlineTiles({ group }: { group: SkillGroupData }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {group.items.map((item) => (
        <li
          key={item}
          className="group relative border border-dashed border-muted/40 px-5 py-4 text-sm text-muted transition-colors duration-300 hover:border-solid hover:border-white hover:text-white"
        >
          <span className="absolute right-0 top-0 h-2 w-2 bg-line transition-colors duration-300 group-hover:bg-accent" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

function StatementList({ group }: { group: SkillGroupData }) {
  return (
    <ul className="flex flex-col gap-2 font-display text-3xl font-bold uppercase leading-[1.2] tracking-[-0.02em] md:text-4xl">
      {group.items.map((item) => (
        <li key={item} className="transition-colors duration-300 hover:text-accent">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Skills() {
  const { programming, tools, digital, strengths } = SKILL_GROUPS;

  return (
    <section id="skills" className="scroll-mt-20 border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader index="05" label="Skills and Expertise" lines={['MORE THAN ONE WAY TO CREATE VALUE.']} />

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-20">
          <Reveal className="lg:col-span-7">
            <GroupTitle index="A" title={programming.title} />
            <ChipGroup group={programming} />
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <GroupTitle index="B" title={tools.title} />
            <RuledList group={tools} />
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5 lg:order-last">
            <GroupTitle index="C" title={digital.title} />
            <OutlineTiles group={digital} />
          </Reveal>

          <Reveal delay={200} className="lg:col-span-7">
            <GroupTitle index="D" title={strengths.title} />
            <StatementList group={strengths} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
