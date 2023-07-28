import { CardContainer } from "../card-container";

export const Grainy = () => {
  return (
    <CardContainer>
      <div className="border rounded-lg h-full w-full relative flex justify-center items-center bg-background overflow-hidden">
        <p className="text-5xl font-medium tracking-tighter whitespace-nowrap text-black dark:text-white z-10">
          Grainy
        </p>

        <div className="pointer-events-none h-full absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <svg className="absolute inset-0 w-full h-full [mask-image:radial-gradient(200px_circle_at_center,white,transparent)]">
            <filter id="n">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.75"
                stitchTiles="stitch"
              />
            </filter>

            <rect width="100%" height="100%" filter="url(#n)" opacity="0.40" />
          </svg>
        </div>
      </div>
    </CardContainer>
  );
};
