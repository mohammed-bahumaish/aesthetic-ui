import { Card } from "@/components/aesthetics/card";
import { ColoredBorder } from "@/components/aesthetics/colored-border";
import { Dots } from "@/components/aesthetics/dots";
import { Grainy } from "@/components/aesthetics/grainy";
import { Grids } from "@/components/aesthetics/grids";
import { LinearGradient } from "@/components/aesthetics/linear-gradient";
import { Meteors } from "@/components/aesthetics/meteors";
import { Particles } from "@/components/aesthetics/particles";
import { RadialGradient } from "@/components/aesthetics/radial-gradient";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-16">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
        <a
          href="https://github.com/mohammed-bahumaish/aesthetic-ui/blob/main/src/components/aesthetics/card.tsx"
          className="flex justify-center items-center"
        >
          <Card />
        </a>
        <a
          href="https://github.com/mohammed-bahumaish/aesthetic-ui/blob/main/src/components/aesthetics/colored-border.tsx"
          className="flex justify-center items-center"
        >
          <ColoredBorder />
        </a>
        <a
          href="https://github.com/mohammed-bahumaish/aesthetic-ui/blob/main/src/components/aesthetics/grainy.tsx"
          className="flex justify-center items-center"
        >
          <Grainy />
        </a>
        <a
          href="https://github.com/mohammed-bahumaish/aesthetic-ui/blob/main/src/components/aesthetics/grids.tsx"
          className="flex justify-center items-center"
        >
          <Grids />
        </a>
        <a
          href="https://github.com/mohammed-bahumaish/aesthetic-ui/blob/main/src/components/aesthetics/particles.tsx"
          className="flex justify-center items-center"
        >
          <Particles />
        </a>
        <a
          href="https://github.com/mohammed-bahumaish/aesthetic-ui/blob/main/src/components/aesthetics/dots.tsx"
          className="flex justify-center items-center"
        >
          <Dots />
        </a>
        <a
          href="https://github.com/mohammed-bahumaish/aesthetic-ui/blob/main/src/components/aesthetics/meteors.tsx"
          className="flex justify-center items-center"
        >
          <Meteors />
        </a>
        <a
          href="https://github.com/mohammed-bahumaish/aesthetic-ui/blob/main/src/components/aesthetics/radial-gradient.tsx"
          className="flex justify-center items-center"
        >
          <RadialGradient />
        </a>
        <a
          href="https://github.com/mohammed-bahumaish/aesthetic-ui/blob/main/src/components/aesthetics/linear-gradient.tsx"
          className="flex justify-center items-center"
        >
          <LinearGradient />
        </a>
      </div>
    </div>
  );
}
