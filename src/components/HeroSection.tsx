import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import heroImage from "@/assets/hero-portrait.png";

const PARTICLE_COUNT = 40;

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const [phase, setPhase] = useState(0);
  // 0=black, 1=color blast, 2=blast fading + image emerging, 3=fully revealed

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1600);
    const t3 = setTimeout(() => setPhase(3), 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  // Generate random burst particles
  const particles = useRef(
    Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
      id: i,
      angle: (i / PARTICLE_COUNT) * 360 + (Math.random() - 0.5) * 30,
      distance: 30 + Math.random() * 50,
      size: 4 + Math.random() * 12,
      color: [
        "hsl(0, 0%, 100%)",
        "hsl(0, 0%, 85%)",
        "hsl(0, 0%, 70%)",
        "hsl(0, 0%, 95%)",
        "hsl(0, 0%, 60%)",
      ][Math.floor(Math.random() * 5)],
      delay: Math.random() * 0.3,
      duration: 0.8 + Math.random() * 0.8,
    }))
  ).current;

  // Shockwave rings
  const rings = [
    { delay: 0, scale: 2.5, duration: 1.2 },
    { delay: 0.15, scale: 2, duration: 1.0 },
    { delay: 0.3, scale: 1.5, duration: 0.8 },
  ];

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-background">
      {/* Background text BEHIND image */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={phase >= 3 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          style={{ scale: textScale }}
          className="font-display text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] font-bold text-foreground/10 leading-none tracking-tighter select-none"
        >
          Navya
        </motion.h1>
      </div>

      {/* === COLOR BLAST EFFECT === */}
      <AnimatePresence>
        {(phase === 1 || phase === 2) && (
          <div className="absolute inset-0 z-[15] flex items-center justify-center pointer-events-none">
            {/* Central flash */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 3], opacity: [0, 1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute w-40 h-40 rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(0 0% 100% / 0.9), hsl(0 0% 80% / 0.5), transparent)",
                filter: "blur(20px)",
              }}
            />

            {/* Shockwave rings */}
            {rings.map((ring, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ scale: ring.scale, opacity: 0 }}
                transition={{ duration: ring.duration, delay: ring.delay, ease: "easeOut" }}
                className="absolute w-64 h-64 rounded-full border-2 border-foreground/30"
              />
            ))}

            {/* Burst particles */}
            {particles.map((p) => {
              const rad = (p.angle * Math.PI) / 180;
              const endX = Math.cos(rad) * p.distance + "vw";
              const endY = Math.sin(rad) * p.distance + "vh";
              return (
                <motion.div
                  key={p.id}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                  animate={{
                    x: endX,
                    y: endY,
                    scale: [0, 1.5, 0],
                    opacity: [1, 0.8, 0],
                  }}
                  transition={{
                    duration: p.duration,
                    delay: p.delay,
                    ease: "easeOut",
                  }}
                  className="absolute rounded-full"
                  style={{
                    width: p.size,
                    height: p.size,
                    background: p.color,
                    filter: "blur(1px)",
                    boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
                  }}
                />
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Screen flash overlay */}
      <motion.div
        className="absolute inset-0 z-[14] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={
          phase >= 1
            ? { opacity: [0, 0.6, 0], background: "hsl(0 0% 100%)" }
            : {}
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* === IMAGE — fades in slowly after blast === */}
      <motion.div
        className="absolute inset-0 z-10 flex items-end justify-center"
        style={{ y: imageY }}
      >
        <motion.div
          className="relative h-[90vh] sm:h-[92vh] md:h-[95vh] w-auto flex items-end justify-center"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={
            phase >= 2
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 1.1 }
          }
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={heroImage}
            alt="Navya — Digital Marketer"
            className="h-full w-auto max-w-none object-contain object-bottom grayscale"
            width={1024}
            height={1280}
          />
        </motion.div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Foreground text */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col items-center pb-10 md:pb-16 px-6 text-center pointer-events-none">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-none"
        >
          Navya
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="mt-3 md:mt-4 overflow-hidden"
        >
          <motion.p
            initial={{ y: 16 }}
            animate={phase >= 3 ? { y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-xs md:text-sm tracking-[0.35em] uppercase text-muted-foreground font-light"
          >
            Digital Marketer
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
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
