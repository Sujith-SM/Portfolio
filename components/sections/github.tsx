"use client";

import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Card } from "@/components/ui/card";
import { githubStats, languageMix } from "@/lib/data";

export function GithubSection() {
  return (
    <section id="github" className="mx-auto max-w-6xl px-6 py-24 md:px-12">
      <h2 className="font-display text-3xl text-white">GitHub Snapshot</h2>
      <p className="mt-2 text-sm text-white/60">Placeholder integration ready for GitHub REST/GraphQL API.</p>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Card className="p-5">
          <div className="grid grid-cols-2 gap-3">
            {githubStats.map((stat) => (
              <div key={stat.name} className="rounded-xl bg-white/5 p-4">
                <p className="text-xs text-white/50">{stat.name}</p>
                <p className="mt-1 text-2xl text-cyan">{stat.value}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card className="h-[280px] p-5">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={languageMix} dataKey="value" nameKey="name" outerRadius={90} fill="#6366F1" />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </section>
  );
}
