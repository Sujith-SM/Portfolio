"use client";

import { Card } from "@/components/ui/card";
import { experiences } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 md:px-12">
      <h2 className="font-display text-3xl text-white">Experience</h2>
      <div className="mt-8 space-y-5 border-l border-white/20 pl-6">
        {experiences.map((exp) => (
          <Card key={exp.title} className="relative p-5">
            <span className="absolute -left-[34px] top-8 h-3 w-3 rounded-full bg-cyan" />
            <h3 className="font-display text-xl text-white">{exp.title}</h3>
            <p className="text-sm text-cyan">{exp.org}</p>
            <p className="mt-1 text-xs text-white/55">{exp.period} | {exp.location}</p>
            <ul className="mt-3 space-y-1 text-sm text-white/80">
              {exp.points.map((point) => <li key={point}>• {point}</li>)}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {exp.tech.map((item) => <span key={item} className="rounded bg-accent/20 px-2 py-1 text-xs text-accent">{item}</span>)}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
