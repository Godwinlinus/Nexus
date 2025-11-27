import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} className="size-full object-cover" />
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="w-screen px-6 py-24 sm:px-10">
      <div className="relative overflow-hidden rounded-xl bg-black py-24 text-blue-50">

        {/* Left decorative images */}
        <div className="absolute inset-y-0 -left-16 hidden w-72 sm:block lg:left-10 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1 translate-y-0"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 translate-y-48 lg:translate-y-64"
          />
        </div>

        {/* Right sword images */}
        <div className="absolute left-1/2 top-[-150px] w-56 -translate-x-1/2 sm:top-1/2 sm:left-auto sm:right-10 sm:translate-x-0 md:w-72 lg:top-16 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-110 opacity-70"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-110"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <p className="mb-6 font-general text-[10px] tracking-widest uppercase opacity-80">
            Join Zentry
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            className="special-font w-full !text-4xl !font-black !leading-[.9] sm:!text-6xl md:!text-[6rem]"
          />

          <Button
            title="contact us"
            containerClass="mt-12 bg-yellow-300 hover:bg-yellow-400 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
