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

  const [phase, setPhase] = useState(0); // 0=nothing, 1=circle, 2=expand, 3=full

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);   // circle appears
    const t2 = setTimeout(() => setPhase(2), 1400);   // circle expands
    const t3 = setTimeout(() => setPhase(3), 2600);   // full reveal
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
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
          animate={phase >= 3 ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mt-2 text-base sm:text-lg md:text-xl tracking-[0.4em] uppercase text-muted-foreground/30 font-light select-none"
        >
          Digital Marketer
        </motion.p>
      </div>

      {/* MAGICAL IMAGE REVEAL */}
      <motion.div
        className="absolute inset-0 z-10 flex items-end justify-center"
        style={{ y: imageY }}
      >
        {/* Clip-path animated container */}
        <motion.div
          className="relative h-[90vh] sm:h-[92vh] md:h-[95vh] w-auto flex items-end justify-center"
          initial={{ clipPath: "circle(0% at 50% 45%)" }}
          animate={
            phase >= 3
              ? { clipPath: "circle(75% at 50% 45%)" }
              : phase >= 2
              ? { clipPath: "circle(35% at 50% 45%)" }
              : phase >= 1
              ? { clipPath: "circle(12% at 50% 30%)" }
              : { clipPath: "circle(0% at 50% 45%)" }
          }
          transition={{
            duration: phase === 1 ? 1.0 : phase === 2 ? 1.2 : 1.0,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img
            src={heroImage}
            alt="Navya — Digital Marketer"
            className="h-full w-auto max-w-none object-contain object-bottom grayscale"
            width={1024}
            height={1280}
          />

          {/* Glow ring during reveal */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={phase >= 1 && phase < 3 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              background: "radial-gradient(circle at 50% 45%, transparent 30%, hsl(0 0% 95% / 0.04) 50%, transparent 70%)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Particle/dust effect during reveal */}
      {phase >= 1 && phase < 3 && (
        <div className="absolute inset-0 z-[11] pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-foreground/40 rounded-full"
              initial={{
                x: `${45 + Math.random() * 10}%`,
                y: `${35 + Math.random() * 20}%`,
                scale: 0,
                opacity: 0,
              }}
              animate={{
                x: `${20 + Math.random() * 60}%`,
                y: `${10 + Math.random() * 70}%`,
                scale: [0, Math.random() * 3 + 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: 0.5 + Math.random() * 1.5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Gradient overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Foreground text */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col items-center pb-10 md:pb-16 px-6 text-center pointer-events-none">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-none"
        >
          Navya
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mt-3 md:mt-4 overflow-hidden"
        >
          <motion.p
            initial={{ y: 16 }}
            animate={phase >= 3 ? { y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs md:text-sm tracking-[0.35em] uppercase text-muted-foreground font-light"
          >
            Digital Marketer
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
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
