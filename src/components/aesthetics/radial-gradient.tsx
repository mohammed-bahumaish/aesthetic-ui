import { CardContainer } from "../card-container";

export const RadialGradient = () => {
  return (
    <CardContainer>
      <div className="border rounded-lg h-full w-full relative flex justify-center items-center bg-background overflow-hidden">
        <p className="text-5xl font-medium tracking-tighter whitespace-nowrap text-black dark:text-white z-10">
          Radial Gradient
        </p>
        <div className="pointer-events-none h-full absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-grad"></div>
      </div>
    </CardContainer>
  );
};
