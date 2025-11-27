import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

// Tilt Wrapper
export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    setTransformStyle(
      `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95,.95,.95)`
    );
  };

  return (
    <div
      ref={itemRef}
      className={`transition-transform duration-200 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTransformStyle("")}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

// Card
export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute inset-0 size-full object-cover"
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={(e) => {
              const rect = hoverButtonRef.current.getBoundingClientRect();
              setCursorPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            }}
            onMouseEnter={() => setHoverOpacity(1)}
            onMouseLeave={() => setHoverOpacity(0)}
            className="relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/30"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(120px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #0000)`
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

// MAIN FEATURES SECTION
const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">

      {/* HEADER */}
      <div className="px-5 py-32 max-w-xl">
        <p className="font-circular-web text-lg text-blue-50">
          Into the Metagame Layer
        </p>
        <p className="mt-3 font-circular-web text-lg text-blue-50/50">
          Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay experience.
        </p>
      </div>

      {/* MAIN HERO BENTO */}
      <BentoTilt className="border-hsla relative mb-7 h-[65vh] w-full overflow-hidden rounded-md">
        <BentoCard
          src="videos/feature-1.mp4"
          title={<span>radia<b>n</b>t</span>}
          description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          isComingSoon
        />
      </BentoTilt>

      {/* GRID LAYOUT – same layout, cleaner spacing */}
      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">

        <BentoTilt className="row-span-2 rounded-md overflow-hidden">
          <BentoCard
            src="videos/feature-2.mp4"
            title={<span>zig<b>m</b>a</span>}
            description="Anime and gaming-inspired NFT collection. IP primed for expansion."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="rounded-md overflow-hidden">
          <BentoCard
            src="videos/feature-3.mp4"
            title={<span>n<b>e</b>xus</span>}
            description="A gamified social hub, adding a new layer of play to social interaction."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="rounded-md overflow-hidden">
          <BentoCard
            src="videos/feature-4.mp4"
            title={<span>az<b>u</b>l</span>}
            description="A cross-world AI Agent boosting your gameplay and productivity."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="rounded-md overflow-hidden">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>
            <TiLocationArrow className="m-5 scale-[5] self-end text-black" />
          </div>
        </BentoTilt>

        <BentoTilt className="rounded-md overflow-hidden">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
