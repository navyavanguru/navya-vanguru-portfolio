import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-portrait.png";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.3, 0.6], [60, 0]);

  return (
    <section ref={ref} className="relative min-h-[200vh]">
      {/* Sticky image container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-background">
        <motion.div
          className="w-full h-full flex items-center justify-center"
          style={{ scale: imageScale }}
        >
          <img
            src={heroImage}
            alt="Portrait"
            className="w-full h-full object-contain grayscale"
            width={1024}
            height={1280}
          />
        </motion.div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30 pointer-events-none" />
      </div>

      {/* Text section that appears on scroll */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 -mt-40 px-6 lg:px-12 pb-20 lg:pb-28 max-w-7xl mx-auto"
      >
        <motion.p
          className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground font-medium mb-4"
        >
          Digital Marketer & Content Strategist
        </motion.p>
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] tracking-tight"
        >
          Crafting Stories
          <br />
          That <span className="text-gradient">Convert</span>
        </h1>
        <p
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl font-light"
        >
          I help brands tell compelling stories through content, strategy, and creative marketing.
        </p>
        <a
          href="#contact"
          className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Let's Work Together
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
