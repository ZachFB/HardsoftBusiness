"use client";

import { WordRotate } from "@/components/magicui/word-rotate";

export function WordRotateDemo() {
  return (
    <WordRotate
      className="text-4xl h-auto font-semibold lg:text-6xl bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent"
      words={["gérer", "automatiser", "optimiser", "planifier"]}
    />
  );
}
