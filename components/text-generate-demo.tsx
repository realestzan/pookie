"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


interface Props { 
  css?: string,
  text: string
  speed?: number
}

export function TextGenerateEffectDemo({text, css, speed} : Props) {
  return <TextGenerateEffect words={text} css={css} speed={speed} />;
}
