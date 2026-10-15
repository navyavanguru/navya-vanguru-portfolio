import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import heroImage from "@/assets/hero-portrait.png";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scroll Parallax
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgTextY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smoothness
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Transforms for mouse movement
  const mouseMoveImageX = useTransform(springX, [-0.5, 0.5], ["-20px", "20px"]);
  const mouseMoveImageY = useTransform(springY, [-0.5, 0.5], ["-20px", "20px"]);
  const mouseMoveTextX = useTransform(springX, [-0.5, 0.5], ["-10px", "10px"]);
  const mouseMoveTextY = useTransform(springY, [-0.5, 0.5], ["-10px", "10px"]);

  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Quick reveal after Splash
    const timers = [
      setTimeout(() => setPhase(1), 50),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX / width) - 0.5;
    const y = (e.clientY / height) - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={ref} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen w-full overflow-hidden bg-[#0A0A0A] selection:bg-white selection:text-black"
    >
      {/* Background Floating Name (Extra depth layer) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
        <motion.h1
          style={{ y: bgTextY, x: mouseMoveTextX }}
          className="font-display text-[25vw] font-bold text-white/[0.02] leading-none tracking-tighter"
        >
          NAVYA
        </motion.h1>
      </div>

      {/* 1. INITIAL BLACK COVER & SLASH REVEAL */}
      <AnimatePresence>
        {phase < 3 && (
          <motion.div 
            className="absolute inset-0 z-[50] flex items-center justify-center pointer-events-none"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <motion.div 
              className="absolute inset-0 bg-black"
              animate={phase >= 2 ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. BACKGROUND IMAGE REVEAL (Parallax Layer) */}
      <motion.div
        className="absolute inset-x-0 top-0 z-10 h-full flex items-center justify-center pt-[2vh]"
        style={{ 
          y: imageY, 
          scale: imageScale,
          translateX: mouseMoveImageX,
          translateY: mouseMoveImageY
        }}
      >
        <motion.div
          className="relative h-full w-full flex items-start justify-center"
          initial={{ opacity: 0, filter: "blur(10px) brightness(0.5) grayscale(1)" }}
          animate={phase >= 2 ? { 
            opacity: 1, 
            filter: "blur(0px) brightness(1) grayscale(1)",
          } : {}}
          transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={heroImage}
            alt="Navya"
            className="h-[80vh] md:h-[85vh] w-auto object-contain object-top opacity-80"
          />
          {/* Enhanced bottom fade to clear space for text */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        </motion.div>
      </motion.div>

      {/* 3. TEXT ANIMATIONS (Parallax Layer) */}
      <motion.div 
        className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-[2vh] md:pb-[4vh] px-6 text-center pointer-events-none"
        style={{ y: textY, x: mouseMoveTextX }}
      >
        <div className="relative overflow-hidden">
          <motion.h1
            className="font-display text-[15vw] md:text-[12vw] font-bold leading-none tracking-tighter text-white/90 mix-blend-difference"
            initial={{ y: "110%", skewY: 10 }}
            animate={phase >= 3 ? { y: 0, skewY: 0 } : {}}
            transition={{ 
              duration: 1.8, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2 
            }}
          >
            Navya
          </motion.h1>
          <motion.h1
            className="absolute inset-0 font-display text-[15vw] md:text-[12vw] font-bold leading-none tracking-tighter text-white/10 blur-[2px]"
            initial={{ y: "110%", skewY: 10 }}
            animate={phase >= 3 ? { y: 0, skewY: 0 } : {}}
            transition={{ 
              duration: 2, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.25 
            }}
          >
            Navya
          </motion.h1>
        </div>

        <motion.div
          className="mt-4 overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 1.5, 
            ease: "easeOut", 
            delay: 1.2 
          }}
        >
          <span className="text-xs md:text-sm tracking-[0.6em] uppercase text-white/40 font-light">
            Digital Content Specialist & Storyteller
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={phase >= 3 ? { opacity: 1, height: 60 } : {}}
          transition={{ delay: 2.2, duration: 1.5 }}
          className="mt-12 w-px bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>

      {/* Background Ambience Layer */}
      <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)`
        }} />
      </div>
    </section>
  );
};

export default HeroSection;


