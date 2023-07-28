"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export const Card = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    setMouse({ x: clientX - left, y: clientY - top });
  }
  return (
    <div
      className={cn(
        "after:absolute after:bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),white,transparent_40%)] after:duration-500 after:h-full after:hover:opacity-100 after:left-0 after:opacity-0 after:pointer-events-none after:rounded-lg after:top-0 after:transition-opacity after:w-full after:z-[1]",
        "before:absolute before:bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(120,119,198,0.3),rgba(255,255,255,0))] before:blur-xs before:duration-500 before:h-full before:hover:opacity-100 before:left-0 before:opacity-0 before:pointer-events-none before:rounded-lg before:top-0 before:transition-opacity before:w-full before:z-[3]",
        "border rounded-lg relative flex justify-center items-center bg-background overflow-hidden h-48 w-96",
        "transition-all hover:scale-105 duration-300"
      )}
      style={{
        ...({
          "--mouse-x": `${mouse.x}px`,
          "--mouse-y": `${mouse.y}px`,
        } as any),
      }}
      onMouseMove={onMouseMove}
    >
      <div className="absolute inset-[1px] rounded-lg z-[2] cursor-pointer shadow-2xl flex flex-col justify-center items-center overflow-hidden p-6 bg-background">
        <p className="text-5xl font-medium whitespace-nowrap text-gray-800 dark:text-gray-200 z-10">
          Card
        </p>
      </div>
    </div>
  );
};
