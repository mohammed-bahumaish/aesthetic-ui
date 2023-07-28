import { ReactNode } from "react";

export const CardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border rounded-lg relative flex justify-center items-center bg-background overflow-hidden h-48 w-96 hover:border-[rgba(120,119,198,0.8)] transition-all hover:scale-105 duration-300">
      {children}
    </div>
  );
};
