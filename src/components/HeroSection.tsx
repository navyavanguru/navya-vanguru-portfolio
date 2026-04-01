import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import heroImage from "@/assets/hero-portrait.png";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

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
    const t1 = setTimeout(() => setPhase(1), 200);
    const t2 = setTimeout(() => setPhase(2), 2200);
    const t3 = setTimeout(() => setPhase(3), 3800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  // Generate spray particles — like paint being flung from both sides
  const particles = useMemo(() => {
    const items: {
      id: number;
      side: "left" | "right";
      startX: number;
      startY: number;
      // Control points for the arc trajectory
      endX: number;
      endY: number;
      size: number;
      color: string;
      delay: number;
      duration: number;
      rotation: number;
      stretch: number;
    }[] = [];

    const greys = [
      "hsl(0, 0%, 95%)",
      "hsl(0, 0%, 85%)",
      "hsl(0, 0%, 75%)",
      "hsl(0, 0%, 65%)",
      "hsl(0, 0%, 55%)",
      "hsl(0, 0%, 45%)",
      "hsl(0, 0%, 35%)",
      "hsl(0, 0%, 25%)",
      "hsl(0, 0%, 15%)",
      "hsl(0, 0%, 10%)",
    ];

    // Create waves of particles from each side
    for (let wave = 0; wave < 4; wave++) {
      const waveDelay = wave * 0.15;
      const particlesPerWave = 30;

      for (let i = 0; i < particlesPerWave; i++) {
        const side: "left" | "right" = i % 2 === 0 ? "left" : "right";
        const originY = 30 + Math.random() * 40; // spray origin roughly center

        // Spray spreads out in a cone from the side
        const spreadAngle = (Math.random() - 0.5) * 120; // degrees spread
        const distance = 30 + Math.random() * 50; // how far it travels (% of viewport)

        const angleRad = (spreadAngle * Math.PI) / 180;
        const endX = side === "left"
          ? distance * Math.cos(angleRad)
          : 100 - distance * Math.cos(angleRad);
        const endY = originY + distance * Math.sin(angleRad) * 0.5;

        items.push({
          id: wave * particlesPerWave + i,
          side,
          startX: side === "left" ? -5 : 105,
          startY: originY + (Math.random() - 0.5) * 15,
          endX: Math.max(5, Math.min(95, endX)),
          endY: Math.max(5, Math.min(95, endY)),
          size: 4 + Math.random() * 24,
          color: greys[Math.floor(Math.random() * greys.length)],
          delay: waveDelay + Math.random() * 0.3,
          duration: 0.4 + Math.random() * 0.5,
          rotation: Math.random() * 360,
          stretch: 1 + Math.random() * 2.5,
        });
      }
    }
    return items;
  }, []);

  // Larger paint globs that splatter
  const globs = useMemo(() => {
    return Array.from({ length: 16 }).map((_, i) => {
      const side: "left" | "right" = i % 2 === 0 ? "left" : "right";
      return {
        id: i,
        side,
        startX: side === "left" ? -8 : 108,
        endX: side === "left" ? 15 + Math.random() * 35 : 50 + Math.random() * 35,
        startY: 25 + Math.random() * 50,
        endY: 20 + Math.random() * 60,
        width: 40 + Math.random() * 100,
        height: 30 + Math.random() * 60,
        color: `hsl(0, 0%, ${10 + Math.random() * 80}%)`,
        delay: 0.1 + Math.random() * 0.5,
        duration: 0.5 + Math.random() * 0.4,
        rotation: Math.random() * 360,
        borderRadius: `${30 + Math.random() * 40}% ${30 + Math.random() * 40}% ${30 + Math.random() * 40}% ${30 + Math.random() * 40}%`,
      };
    });
  }, []);

  // Trailing drip lines
  const trails = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => {
      const side: "left" | "right" = i % 2 === 0 ? "left" : "right";
      return {
        id: i,
        side,
        startX: side === "left" ? -3 : 103,
        endX: side === "left" ? 10 + Math.random() * 40 : 50 + Math.random() * 40,
        y: 20 + Math.random() * 60,
        width: 50 + Math.random() * 150,
        height: 2 + Math.random() * 4,
        color: `hsl(0, 0%, ${20 + Math.random() * 60}%)`,
        delay: Math.random() * 0.4,
        duration: 0.3 + Math.random() * 0.3,
      };
    });
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

      {/* === PAINT SPRAY EFFECT === */}
      <AnimatePresence>
        {(phase === 1 || phase === 2) && (
          <div className="absolute inset-0 z-[15] pointer-events-none overflow-hidden">

            {/* Spray particles — small fast droplets */}
            {particles.map((p) => (
              <motion.div
                key={`p-${p.id}`}
                className="absolute rounded-full"
                style={{
                  width: p.size,
                  height: p.size / p.stretch,
                  background: p.color,
                  rotate: p.rotation,
                  filter: p.size > 15 ? "blur(1px)" : "none",
                }}
                initial={{
                  left: `${p.startX}%`,
                  top: `${p.startY}%`,
                  opacity: 0,
                  scale: 0.2,
                }}
                animate={{
                  left: `${p.endX}%`,
                  top: `${p.endY}%`,
                  opacity: [0, 1, 0.9, 0],
                  scale: [0.2, 1.3, 1, 0.5],
                }}
                transition={{
                  duration: p.duration + 1.2,
                  delay: p.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            ))}

            {/* Paint globs — larger organic shapes */}
            {globs.map((g) => (
              <motion.div
                key={`g-${g.id}`}
                className="absolute"
                style={{
                  width: g.width,
                  height: g.height,
                  background: g.color,
                  borderRadius: g.borderRadius,
                  rotate: g.rotation,
                  filter: "blur(3px)",
                }}
                initial={{
                  left: `${g.startX}%`,
                  top: `${g.startY}%`,
                  opacity: 0,
                  scale: 0.3,
                }}
                animate={{
                  left: `${g.endX}%`,
                  top: `${g.endY}%`,
                  opacity: [0, 0.7, 0.5, 0],
                  scale: [0.3, 1.1, 0.9, 0.6],
                }}
                transition={{
                  duration: g.duration + 1.4,
                  delay: g.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}

            {/* Trail streaks */}
            {trails.map((t) => (
              <motion.div
                key={`t-${t.id}`}
                className="absolute"
                style={{
                  width: t.width,
                  height: t.height,
                  background: `linear-gradient(${t.side === "left" ? "to right" : "to left"}, ${t.color}, transparent)`,
                  top: `${t.y}%`,
                  borderRadius: "999px",
                }}
                initial={{
                  left: `${t.startX}%`,
                  opacity: 0,
                  scaleX: 0.1,
                }}
                animate={{
                  left: `${t.endX}%`,
                  opacity: [0, 0.6, 0.3, 0],
                  scaleX: [0.1, 1, 0.8, 0.3],
                }}
                transition={{
                  duration: t.duration + 1,
                  delay: t.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}

            {/* Center collision mist */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 2.5, 4], opacity: [0, 0.4, 0] }}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              style={{
                width: 400,
                height: 400,
                borderRadius: "50%",
                background: "radial-gradient(circle, hsl(0 0% 60% / 0.5), hsl(0 0% 40% / 0.2), transparent)",
                filter: "blur(40px)",
              }}
            />
          </div>
        )}
      </AnimatePresence>

      {/* === IMAGE — emerges slowly after spray === */}
      <motion.div
        className="absolute inset-0 z-10 flex items-end justify-center"
        style={{ y: imageY }}
      >
        <motion.div
          className="relative h-[90vh] sm:h-[92vh] md:h-[95vh] w-auto flex items-end justify-center"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={
            phase >= 2
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 1.08 }
          }
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto"
        >
          <LiquidButton size="xxl" variant="default" className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-none h-auto px-8 py-4">
            Navya
          </LiquidButton>
        </motion.div>

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
