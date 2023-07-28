import { cn } from "@/lib/utils";
import { CardContainer } from "../card-container";

const getRandomValue = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const Particles = () => {
  return (
    <CardContainer>
      <div className="border rounded-lg h-full w-full relative flex justify-center items-center bg-background overflow-hidden ">
        {Array.from(".".repeat(20)).map(() => {
          return (
            <span
              className={cn(
                "absolute h-0.5 w-0.5 rotate-[215deg] animate-particle rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
              )}
              style={{
                left: getRandomValue(0, 300),
                top: getRandomValue(0, 300),
                animationDelay: `${getRandomValue(2, 5)}s`,
                animationDuration: `${getRandomValue(5, 10)}s`,
              }}
            ></span>
          );
        })}

        <p className="text-5xl font-medium tracking-tighter whitespace-nowrap text-black dark:text-white z-10">
          Particles
        </p>
        <div className="pointer-events-none h-full absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
    </CardContainer>
  );
};
