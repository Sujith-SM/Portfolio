"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { skillGroups } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:px-12">
      <h2 className="font-display text-3xl text-white">Skills</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, idx) => (
          <motion.div key={group.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.06 }}>
            <Card className="h-full p-5">
              <h3 className="font-display text-lg text-cyan">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-md bg-white/5 px-2 py-1 text-xs text-white/80">{item}</span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
