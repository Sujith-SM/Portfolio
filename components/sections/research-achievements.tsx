import { Card } from "@/components/ui/card";
import { achievements } from "@/lib/data";

export function AchievementsSection() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-24 md:px-12">
      <h2 className="font-display text-3xl text-white">Achievements</h2>
      <div className="mt-5 grid gap-3">
        {achievements.map((item) => (
          <Card key={item} className="p-4 text-white/90">
            {item}
          </Card>
        ))}
      </div>
    </section>
  );
}
