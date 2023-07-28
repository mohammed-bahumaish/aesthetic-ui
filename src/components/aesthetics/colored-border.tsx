export const ColoredBorder = () => {
  return (
    <div className="relative border rounded-lg  flex justify-center items-center bg-background h-48 w-96 transition-all hover:scale-105 duration-300">
      <div className="border rounded-lg h-full w-full relative flex justify-center items-center bg-background overflow-hidden">
        <p className="text-5xl font-medium tracking-tighter whitespace-nowrap text-black dark:text-white z-10">
          Colored Border
        </p>
      </div>
      <svg
        viewBox="0 0 384 12"
        fill="none"
        aria-hidden="true"
        className="absolute right-0 top-full w-[384px] max-w-[120%] transition"
      >
        <mask
          id=":r1t:-a"
          maskUnits="userSpaceOnUse"
          x="48"
          y="0"
          width="269"
          height="4"
          style={{ maskType: "alpha" }}
        >
          <path
            transform="rotate(180 316.656 4)"
            fill="#C4C4C4"
            d="M316.656 4h268v4h-268z"
          ></path>
        </mask>
        <g filter="url(#:r1t:-b)" mask="url(#:r1t:-a)">
          <path
            transform="rotate(180 292.656 1)"
            fill="url(#:r1t:-c)"
            d="M292.656 1h220v2h-220z"
          ></path>
        </g>
        <mask
          id=":r1t:-d"
          maskUnits="userSpaceOnUse"
          x="116"
          y="0"
          width="268"
          height="12"
          style={{ maskType: "alpha" }}
        >
          <path
            transform="rotate(180 384 12)"
            fill="#C4C4C4"
            d="M384 12h268v12H384z"
          ></path>
        </mask>
        <g filter="url(#:r1t:-e)" mask="url(#:r1t:-d)">
          <path
            transform="rotate(180 360 1)"
            fill="url(#:r1t:-f)"
            d="M360 1h220v2H360z"
          ></path>
        </g>
        <defs>
          <linearGradient
            id=":r1t:-c"
            x1="292.656"
            y1="1"
            x2="512.656"
            y2="1"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A78BFA" stop-opacity="0"></stop>
            <stop offset=".323" stop-color="#A78BFA"></stop>
            <stop offset=".672" stop-color="#EC4899" stop-opacity=".3"></stop>
            <stop offset="1" stop-color="#EC4899" stop-opacity="0"></stop>
          </linearGradient>
          <linearGradient
            id=":r1t:-f"
            x1="360"
            y1="1"
            x2="580"
            y2="1"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A78BFA" stop-opacity="0"></stop>
            <stop offset=".323" stop-color="#A78BFA"></stop>
            <stop offset=".672" stop-color="#EC4899" stop-opacity=".3"></stop>
            <stop offset="1" stop-color="#EC4899" stop-opacity="0"></stop>
          </linearGradient>
          <filter
            id=":r1t:-b"
            x="71.656"
            y="-2"
            width="222"
            height="4"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation=".5"
              result="effect1_foregroundBlur_311_43467"
            ></feGaussianBlur>
          </filter>
          <filter
            id=":r1t:-e"
            x="131"
            y="-10"
            width="238"
            height="20"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="4.5"
              result="effect1_foregroundBlur_311_43467"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>
    </div>
  );
};
