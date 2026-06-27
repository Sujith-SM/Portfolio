"use client";

import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export function ParticlesBg() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      particles: {
        color: { value: ["#6366F1", "#06B6D4"] },
        links: { color: "#1f2937", distance: 140, enable: true, opacity: 0.2, width: 1 },
        move: { enable: true, speed: 1 },
        number: { value: 55 },
        opacity: { value: 0.3 },
        size: { value: { min: 1, max: 3 } }
      },
      detectRetina: true
    }),
    []
  );

  return <Particles id="tsparticles" init={particlesInit} options={options} className="absolute inset-0 -z-10" />;
}
