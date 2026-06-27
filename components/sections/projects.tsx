"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 md:px-12">
      <motion.h2
        className="font-display text-3xl text-white"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        Projects
      </motion.h2>
      <motion.p
        className="mt-2 max-w-2xl text-sm text-white/60"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.08 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        Production-focused systems with measurable outcomes across AI workflows, enterprise backend integration, and Android product engineering.
      </motion.p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: idx * 0.07 }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <TiltCard>
              {project.image && (
                <div className="relative mb-4 overflow-hidden rounded-xl border border-white/20">
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    width={1200}
                    height={700}
                    className="h-44 w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <p className="absolute left-3 top-3 rounded border border-white/20 bg-black/40 px-2 py-1 text-[10px] tracking-[0.18em] text-white/75">
                    PROJECT {String(idx + 1).padStart(2, "0")}
                  </p>
                </div>
              )}
              {!project.image && (
                <p className="mb-3 text-xs tracking-[0.2em] text-white/45">PROJECT {String(idx + 1).padStart(2, "0")}</p>
              )}

              <h3 className="font-display text-xl text-white">{project.name}</h3>
              <p className="mt-3 text-sm leading-6 text-white/75">{project.desc}</p>
              <p className="mt-2 text-xs font-medium tracking-wide text-white/70">{project.impact}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/30 bg-white/20 px-2.5 py-1 text-xs font-medium tracking-wide text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-4 text-sm text-white/80">
                {project.github !== "#" && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                )}
                {project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">
                    <Globe className="h-4 w-4" /> Demo
                  </a>
                )}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const [style, setStyle] = useState({ rotateX: 0, rotateY: 0 });
  const [spot, setSpot] = useState({ x: "50%", y: "50%" });

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        setStyle({ rotateX: py * -6, rotateY: px * 6 });
        setSpot({ x: `${((e.clientX - rect.left) / rect.width) * 100}%`, y: `${((e.clientY - rect.top) / rect.height) * 100}%` });
      }}
      onMouseLeave={() => {
        setStyle({ rotateX: 0, rotateY: 0 });
        setSpot({ x: "50%", y: "50%" });
      }}
      style={{ transformPerspective: 1000, rotateX: style.rotateX, rotateY: style.rotateY }}
      className="group relative"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-200 group-hover:opacity-100"
        style={{ background: `radial-gradient(340px circle at ${spot.x} ${spot.y}, rgba(255,255,255,0.22), transparent 55%)` }}
      />
      <Card className="h-full border-white/25 bg-[radial-gradient(circle_at_15%_0%,rgba(255,255,255,0.12),transparent_38%),linear-gradient(160deg,#161616_0%,#090909_85%)] p-5">
        {children}
      </Card>
    </motion.div>
  );
}
