"use client";
import React from "react";
import { Button } from "@/components/ui/aurora-button";

interface Props { 
  css?: string,
  text?: string
}
export function AuroraButtonDemo({css, text}: Props) {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className={`bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 ${css}`}
      >
        {text}
      </Button>
    </div>
  );
}
