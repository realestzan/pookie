"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { FlipWords } from "./ui/flip-words";
import { FlipWordsDemo } from "./flip-words-demo";

export function AnimatedPinDemo() {
  return (
    <div className="h-[25rem]">
      <PinContainer
        title="GPT 4o Model"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight dark:text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold   text-base text-slate-100">
            Translation model
          </h3>
          <div className="text-base !m-0 !p-0 ">
            <FlipWordsDemo text1="From the " words={['latest', 'fatest', 'smart']} text2="for translation!" css='text-white'/>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-sky-500 via-sky-500 to-sky-900" />
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-orange-300 via-orange-500 to-orange-900" />
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-300 via-purple-600 to-blue-900" />
        </div>
      </PinContainer>
    </div>
  );
}
