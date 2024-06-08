"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";
import Image from "next/image";

interface Props { 
  text: string,
  img: string,
  desc: string
}

export function GlowingStarsCard({text, img, desc} : Props) {
  return (
    <div className="flex items-center justify-center antialiased">
      <GlowingStarsBackgroundCard className="relative px-10">
        <Image className="rounded-3xl absolute top-0  m-10 left-0" src={img} height={100} width={100} alt='book'/>
        <GlowingStarsTitle>{text}</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
            {desc}
          </GlowingStarsDescription>
          <div className="h-8 w-8 ml-5 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            <Icon />
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
