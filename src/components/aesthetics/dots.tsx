import { CardContainer } from "../card-container";

export const Dots = () => {
  return (
    <CardContainer>
      <p className="text-5xl font-medium tracking-tighter whitespace-nowrap text-black dark:text-white z-10">
        Dots
      </p>
      <svg
        aria-hidden="true"
        className="absolute w-full h-full inset-0 fill-gray-400/30 [mask-image:radial-gradient(200px_circle_at_center,white,transparent)]"
      >
        <defs>
          <pattern
            id=":rn:"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
            x="0"
            y="0"
          >
            <circle id="pattern-circle" cx="1" cy="1" r="1"></circle>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#:rn:)"
        ></rect>
      </svg>
      <div className="absolute pointer-events-none bg-[radial-gradient(300px_at_center_center,rgba(120,119,198,0.3),rgba(0,0,0,0))] inset-0"></div>
    </CardContainer>
  );
};
