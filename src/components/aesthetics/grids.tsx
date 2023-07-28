import { CardContainer } from "../card-container";

export const Grids = () => {
  return (
    <CardContainer>
      <p className="text-5xl font-medium tracking-tighter whitespace-nowrap text-black dark:text-white z-10">
        Grids
      </p>
      <svg
        aria-hidden="true"
        className="absolute w-full inset-0 stroke-gray-400/30 fill-gray-400/30 [mask-image:radial-gradient(200px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-30%] h-[200%]"
      >
        <defs>
          <pattern
            id=":rd:"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            x="-1"
            y="-1"
          >
            <path d="M.5 40V.5H40" fill="none" stroke-dasharray="0"></path>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#:rd:)"
        ></rect>
        <svg x="-1" y="-1" className="overflow-visible">
          <rect stroke-width="0" width="39" height="39" x="161" y="161"></rect>
          <rect stroke-width="0" width="39" height="39" x="201" y="41"></rect>
          <rect stroke-width="0" width="39" height="39" x="321" y="81"></rect>
          <rect stroke-width="0" width="39" height="39" x="241" y="241"></rect>
          <rect stroke-width="0" width="39" height="39" x="401" y="201"></rect>
          <rect stroke-width="0" width="39" height="39" x="521" y="121"></rect>
        </svg>
      </svg>
      <div className="absolute pointer-events-none bg-[radial-gradient(300px_at_center_center,rgba(120,119,198,0.3),rgba(0,0,0,0))] inset-0"></div>
    </CardContainer>
  );
};
