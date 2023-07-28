import { CardContainer } from "../card-container";

export const LinearGradient = () => {
  return (
    <CardContainer>
      <div className="border rounded-lg h-full w-full relative flex justify-center items-center bg-background overflow-hidden">
        <p className="text-5xl font-medium tracking-tighter whitespace-nowrap text-black dark:text-white z-10">
          Linear Gradient
        </p>
        <div className="pointer-events-none h-full absolute inset-0 bg-gradient-to-b from-background to-[rgba(120,119,198,0.3)]"></div>
      </div>
    </CardContainer>
  );
};
