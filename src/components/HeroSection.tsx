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

  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);   // slashes start
    const t2 = setTimeout(() => setPhase(2), 2000);   // image emerges
    const t3 = setTimeout(() => setPhase(3), 3200);   // text appears
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
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

      {/* === DIAGONAL SLASH REVEAL === */}
      {phase < 3 && (
        <div className="absolute inset-0 z-[25] pointer-events-none overflow-hidden">
          {/* Black cover that gets slashed away */}
          <motion.div
            className="absolute inset-0 bg-background"
            initial={{ opacity: 1 }}
            animate={phase >= 2 ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          />

          {/* Diagonal slashes - soft grey strokes */}
          {[
            { rotate: -25, x: "-120%", xEnd: "120%", y: "30%", delay: 0, w: "200%", h: "8vh", opacity: 0.4 },
            { rotate: -20, x: "120%", xEnd: "-120%", y: "45%", delay: 0.15, w: "200%", h: "12vh", opacity: 0.25 },
            { rotate: -30, x: "-120%", xEnd: "120%", y: "55%", delay: 0.25, w: "200%", h: "6vh", opacity: 0.35 },
            { rotate: -15, x: "120%", xEnd: "-120%", y: "65%", delay: 0.35, w: "200%", h: "15vh", opacity: 0.2 },
            { rotate: -22, x: "-120%", xEnd: "120%", y: "40%", delay: 0.1, w: "200%", h: "20vh", opacity: 0.15 },
            { rotate: -28, x: "120%", xEnd: "-120%", y: "50%", delay: 0.2, w: "200%", h: "10vh", opacity: 0.3 },
          ].map((slash, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                width: slash.w,
                height: slash.h,
                top: slash.y,
                rotate: slash.rotate,
                background: `linear-gradient(90deg, transparent, hsl(var(--foreground) / ${slash.opacity}), hsl(var(--foreground) / ${slash.opacity * 1.5}), hsl(var(--foreground) / ${slash.opacity}), transparent)`,
                filter: "blur(8px)",
              }}
              initial={{ x: slash.x, opacity: 0 }}
              animate={phase >= 1
                ? { x: slash.xEnd, opacity: [0, 1, 1, 0] }
                : { x: slash.x, opacity: 0 }
              }
              transition={{
                duration: 1.6,
                delay: slash.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          ))}

          {/* Subtle center glow as slashes cross */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "60vw",
              height: "60vh",
              borderRadius: "50%",
              background: "radial-gradient(circle, hsl(var(--foreground) / 0.08), transparent 70%)",
              filter: "blur(40px)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={phase >= 1 ? { scale: [0, 1.5, 2], opacity: [0, 0.6, 0] } : {}}
            transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
          />
        </div>
      )}

      {/* === IMAGE === */}
      <motion.div
        className="absolute inset-0 z-10 flex items-end justify-center"
        style={{ y: imageY }}
      >
        <motion.div
          className="relative h-[90vh] sm:h-[92vh] md:h-[95vh] w-auto flex items-end justify-center"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={phase >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.06 }}
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
