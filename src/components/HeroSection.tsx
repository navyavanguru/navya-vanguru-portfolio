import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import heroImage from "@/assets/hero-portrait.png";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-background">
      {/* Background layer — text BEHIND image */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          style={{ scale: textScale }}
          className="font-display text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] font-bold text-foreground/15 leading-none tracking-tighter select-none"
        >
          Navya
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={showTitle ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mt-2 text-base sm:text-lg md:text-xl tracking-[0.4em] uppercase text-muted-foreground/30 font-light select-none"
        >
          Digital Marketer
        </motion.p>
      </div>

      {/* Foreground layer — image ON TOP of text */}
      <motion.div
        className="absolute inset-0 z-10 flex items-end justify-center"
        style={{ y: imageY }}
      >
        <img
          src={heroImage}
          alt="Navya — Digital Marketer"
          className="h-[90vh] sm:h-[92vh] md:h-[95vh] w-auto max-w-none object-contain object-bottom grayscale drop-shadow-[0_-20px_60px_rgba(0,0,0,0.8)]"
          width={1024}
          height={1280}
        />
      </motion.div>

      {/* Gradient overlay at bottom for seamless transition */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Foreground text — visible in front of image at bottom */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col items-center pb-10 md:pb-16 px-6 text-center pointer-events-none">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-none"
        >
          Navya
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={showTitle ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mt-3 md:mt-4 overflow-hidden"
        >
          <motion.p
            initial={{ y: 16 }}
            animate={showTitle ? { y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs md:text-sm tracking-[0.35em] uppercase text-muted-foreground font-light"
          >
            Digital Marketer
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="mt-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
