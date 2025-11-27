import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const mainVideoRef = useRef(null);

  // Scroll-triggered clipPath animation
  useEffect(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Hero Video Frame */}
      <div
        id="video-frame"
        className="relative z-10 h-screen w-screen overflow-hidden bg-blue-75 rounded-lg"
      >
        {/* Main Hero Video */}
        <video
          ref={mainVideoRef}
          src="/videos/hero-2.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
        />

        {/* Hero Text & Button */}
        <div className="absolute top-0 left-0 w-full h-full z-40 flex flex-col justify-center px-5 sm:px-10">
          <h1 className="special-font hero-heading text-blue-100 mb-2">
            redefi<b>n</b>e
          </h1>
          <p className="mb-5 max-w-lg font-robert-regular text-blue-100">
            Enter the Metagame Layer <br /> Unleash the Play Economy
          </p>
          <Button
            id="watch-trailer"
            title="Watch trailer"
            leftIcon={<TiLocationArrow />}
            containerClass="bg-yellow-300 flex-center gap-1"
          />
        </div>

        {/* Floating GAMING Logo */}
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>A</b>MING
        </h1>
      </div>
    </div>
  );
};

export default Hero;
