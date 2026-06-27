"use client";

import { useEffect, useState } from "react";

export function TypeCycle({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const word = words[index % words.length];
    let i = 0;
    const type = setInterval(() => {
      i += 1;
      setDisplay(word.slice(0, i));
      if (i >= word.length) {
        clearInterval(type);
        setTimeout(() => setIndex((prev) => prev + 1), 1300);
      }
    }, 60);
    return () => clearInterval(type);
  }, [index, words]);

  return <span className="text-cyan">{display}<span className="animate-pulse">|</span></span>;
}
