"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ResumeContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:px-12">
      <Card className="max-w-3xl p-6 md:p-8">
        <h2 className="font-display text-2xl text-white">Contact</h2>
        <div className="mt-4 grid gap-3 text-sm text-white/80">
          <a href="mailto:sujithsm.dev@gmail.com" className="grid grid-cols-[24px_92px_1fr] items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4 text-white/85" />
            <span className="text-white/55">Email</span>
            <span>sujithsm.dev@gmail.com</span>
          </a>
          <a href="https://linkedin.com/in/sujith-s-m" target="_blank" rel="noreferrer" className="grid grid-cols-[24px_92px_1fr] items-center gap-2 hover:text-white">
            <Linkedin className="h-4 w-4 text-white/85" />
            <span className="text-white/55">LinkedIn</span>
            <span>linkedin.com/in/sujith-s-m</span>
          </a>
          <a href="https://github.com/Sujith-SM" target="_blank" rel="noreferrer" className="grid grid-cols-[24px_92px_1fr] items-center gap-2 hover:text-white">
            <Github className="h-4 w-4 text-white/85" />
            <span className="text-white/55">GitHub</span>
            <span>github.com/Sujith-SM</span>
          </a>
          <p className="grid grid-cols-[24px_92px_1fr] items-center gap-2">
            <MapPin className="h-4 w-4 text-white/85" />
            <span className="text-white/55">Location</span>
            <span>Chennai, India</span>
          </p>
        </div>
      </Card>
    </section>
  );
}
