import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  const mainVideoRef = useRef(null);
  const nextVideoRef = useRef(null);

  const totalVideos = 4;

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;

  // Video switch animation
  useEffect(() => {
    if (!hasClicked || !nextVideoRef.current || !mainVideoRef.current) return;

    const nextVid = nextVideoRef.current;
    const currentVid = mainVideoRef.current;

    gsap.set(nextVid, { visibility: "visible", scale: 0.8 });
    gsap.to(nextVid, {
      scale: 1,
      duration: 1,
      ease: "power1.inOut",
      onStart: () => nextVid.play(),
    });

    gsap.to(currentVid, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
      onComplete: () => {
        currentVid.src = getVideoSrc(currentIndex);
        currentVid.play();
        gsap.set(currentVid, { scale: 1, opacity: 1 });
      },
    });
  }, [currentIndex, hasClicked]);

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
    <div className="relative h-screen w-screen overflow-x-hidden">
      {/* Loader */}
      {loading && (
        <div className="flex-center absolute z-[100] h-screen w-screen bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-screen w-screen overflow-hidden bg-blue-75 rounded-lg"
      >
        {/* Mini Video Preview */}
        <div className="absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <VideoPreview>
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                src={getVideoSrc((currentIndex % totalVideos) + 1)}
                loop
                muted
                preload="metadata"
                className="size-64 origin-center scale-150 object-cover object-center"
              />
            </div>
          </VideoPreview>
        </div>

        {/* Next Video (Animated) */}
        <video
          ref={nextVideoRef}
          src={getVideoSrc(currentIndex)}
          loop
          muted
          preload="metadata"
          className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
        />

        {/* Main Hero Video */}
        <video
          ref={mainVideoRef}
          src={getVideoSrc(currentIndex)}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 w-full h-full object-cover object-center"
          onCanPlay={() => setLoading(false)}
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
