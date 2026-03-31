import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import heroImage from "@/assets/hero-portrait.png";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 2000);
    const t3 = setTimeout(() => setPhase(3), 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  // Paint splashes from left and right sides
  const splashes = useMemo(() => {
    const items: {
      id: number;
      side: "left" | "right";
      startX: string;
      endX: string;
      startY: string;
      endY: string;
      width: number;
      height: number;
      rotation: number;
      color: string;
      delay: number;
      duration: number;
      borderRadius: string;
    }[] = [];

    const greys = [
      "hsl(0 0% 20%)",
      "hsl(0 0% 30%)",
      "hsl(0 0% 40%)",
      "hsl(0 0% 50%)",
      "hsl(0 0% 60%)",
      "hsl(0 0% 70%)",
      "hsl(0 0% 80%)",
      "hsl(0 0% 15%)",
      "hsl(0 0% 90%)",
      "hsl(0 0% 25%)",
    ];

    for (let i = 0; i < 28; i++) {
      const side = i % 2 === 0 ? "left" : "right";
      const startX = side === "left" ? "-10%" : "110%";
      const endX = `${20 + Math.random() * 60}%`;
      const startY = `${10 + Math.random() * 80}%`;
      const endY = `${(parseFloat(startY) + (Math.random() - 0.5) * 20)}%`;

      items.push({
        id: i,
        side,
        startX,
        endX,
        startY,
        endY,
        width: 60 + Math.random() * 180,
        height: 40 + Math.random() * 120,
        rotation: Math.random() * 360,
        color: greys[Math.floor(Math.random() * greys.length)],
        delay: Math.random() * 0.6,
        duration: 0.6 + Math.random() * 0.6,
        borderRadius: `${30 + Math.random() * 40}% ${30 + Math.random() * 40}% ${30 + Math.random() * 40}% ${30 + Math.random() * 40}%`,
      });
    }
    return items;
  }, []);

  // Smaller splatter drips
  const drips = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      side: i % 2 === 0 ? "left" : "right",
      startX: i % 2 === 0 ? "-5%" : "105%",
      endX: `${15 + Math.random() * 70}%`,
      y: `${5 + Math.random() * 90}%`,
      size: 8 + Math.random() * 30,
      color: `hsl(0 0% ${15 + Math.random() * 70}%)`,
      delay: 0.1 + Math.random() * 0.8,
      duration: 0.5 + Math.random() * 0.5,
    }));
  }, []);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-background">
      {/* Background text */}
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

      {/* === PAINT SPLASH EFFECT === */}
      <AnimatePresence>
        {(phase === 1 || phase === 2) && (
          <div className="absolute inset-0 z-[15] pointer-events-none overflow-hidden">
            {/* Large paint splashes */}
            {splashes.map((s) => (
              <motion.div
                key={s.id}
                className="absolute"
                style={{
                  top: s.startY,
                  width: s.width,
                  height: s.height,
                  borderRadius: s.borderRadius,
                  background: s.color,
                  rotate: s.rotation,
                  filter: "blur(2px)",
                }}
                initial={{ left: s.startX, opacity: 0, scale: 0.3 }}
                animate={{
                  left: s.endX,
                  top: s.endY,
                  opacity: [0, 0.85, 0.7, 0],
                  scale: [0.3, 1.2, 1, 0.8],
                }}
                transition={{
                  duration: s.duration + 1,
                  delay: s.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}

            {/* Smaller splatter dots */}
            {drips.map((d) => (
              <motion.div
                key={`drip-${d.id}`}
                className="absolute rounded-full"
                style={{
                  top: d.y,
                  width: d.size,
                  height: d.size,
                  background: d.color,
                }}
                initial={{ left: d.startX, opacity: 0, scale: 0 }}
                animate={{
                  left: d.endX,
                  opacity: [0, 1, 0.6, 0],
                  scale: [0, 1.5, 1, 0],
                }}
                transition={{
                  duration: d.duration + 0.8,
                  delay: d.delay,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* Center wash — big grey splash where they meet */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 2, 3.5], opacity: [0, 0.5, 0] }}
              transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
              style={{
                width: 300,
                height: 300,
                borderRadius: "40% 60% 55% 45%",
                background: "radial-gradient(circle, hsl(0 0% 50% / 0.6), hsl(0 0% 30% / 0.3), transparent)",
                filter: "blur(30px)",
              }}
            />
          </div>
        )}
      </AnimatePresence>

      {/* === IMAGE — emerges slowly after splash === */}
      <motion.div
        className="absolute inset-0 z-10 flex items-end justify-center"
        style={{ y: imageY }}
      >
        <motion.div
          className="relative h-[90vh] sm:h-[92vh] md:h-[95vh] w-auto flex items-end justify-center"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={
            phase >= 2
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 1.05 }
          }
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
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
