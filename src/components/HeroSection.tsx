import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import heroImage from "@/assets/hero-portrait.png";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.6]);

  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-background">
      {/* Background image with zoom */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale }}
      >
        <img
          src={heroImage}
          alt="Navya — Digital Marketer"
          className="w-full h-full object-cover object-top grayscale"
          width={1024}
          height={1280}
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20 pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-background/30 pointer-events-none" />

      {/* Text content — anchored to bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center pb-16 md:pb-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight leading-none"
        >
          Navya
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={showTitle ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mt-4 md:mt-6 overflow-hidden"
        >
          <motion.p
            initial={{ y: 20 }}
            animate={showTitle ? { y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base tracking-[0.35em] uppercase text-muted-foreground font-light"
          >
            Digital Marketer
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-10 md:mt-14"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-muted-foreground/60 to-transparent mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
