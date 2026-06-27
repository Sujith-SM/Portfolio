"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:px-12">
      <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="font-display text-3xl text-white">
        About Me
      </motion.h2>
      <Card className="mt-6 p-6 text-white/80">
        B.Tech Artificial Intelligence and Data Science student at Sri Sairam Engineering College and currently an AI/ML Engineering
        Intern at LIQUIDMIND.AI. I build production-minded AI systems, Android experiences, and scalable software
        with strong product and research depth.
      </Card>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {["Artificial Intelligence", "Computer Vision", "Android Development", "Scalable Systems", "Software Engineering"].map((i) => (
          <Card key={i} className="p-4 text-sm text-cyan">{i}</Card>
        ))}
      </div>
    </section>
  );
}
