import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-portrait.png";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageSkewX = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1.5, -1, 0.5]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.8, -0.3]);
  const filterBlur = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0.4, 0.8, 0.2]);

  return (
    <section ref={ref} className="min-h-screen flex flex-col">
      {/* Image container */}
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 origin-bottom"
          style={{ y: imageY, scale: imageScale, skewX: imageSkewX, rotate: imageRotate }}
        >
          <motion.img
            src={heroImage}
            alt="Navya"
            className="w-full h-full object-cover object-top grayscale"
            width={1024}
            height={1280}
            style={{
              filter: useTransform(filterBlur, (v) => `blur(${v}px) contrast(${1 + v * 0.05})`),
            }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Text below image */}
      <div className="px-6 lg:px-12 py-12 lg:py-16 max-w-7xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-primary font-medium mb-4"
        >
          Digital Marketer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] tracking-tight"
        >
          Navya
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl font-light"
        >
          I help brands tell compelling stories through content, strategy, and creative marketing.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Let's Work Together
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
