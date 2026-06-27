"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ParticlesBg } from "@/components/particles-bg";

export function HeroSection() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 20 });

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-hero-gradient px-6 pt-28 md:px-12">
      <ParticlesBg />
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm tracking-[0.18em] text-white/60">PORTFOLIO</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white md:text-6xl">SUJITH S M</h1>
          <p className="mt-5 text-lg text-white/78">Software Developer (Full Stack & AI)</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
            Building production-first AI systems, robust backend services, and intelligent Android products with a strong engineering and product mindset.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="#projects"><Button size="lg">View Projects</Button></Link>
            <Link href="#contact"><Button size="lg" variant="ghost">Contact</Button></Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
          style={{ rotateX, rotateY, transformPerspective: 900 }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            mx.set((e.clientX - rect.left) / rect.width - 0.5);
            my.set((e.clientY - rect.top) / rect.height - 0.5);
          }}
          onMouseLeave={() => {
            mx.set(0);
            my.set(0);
          }}
        >
          <div className="mx-auto w-[320px] rounded-[2rem] border border-white/20 bg-white/5 p-4 shadow-glass backdrop-blur-2xl">
            <Image
              src="/assets/sujith.jpg"
              alt="Sujith S M"
              width={1000}
              height={1200}
              className="h-[420px] w-full rounded-[1.5rem] object-cover grayscale-[8%]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
