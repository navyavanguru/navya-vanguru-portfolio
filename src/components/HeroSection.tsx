import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import heroImage from "@/assets/hero-portrait.png";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  // Mouse tracking for interactive image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), springConfig);
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-6, 6]), springConfig);

  // Hair movement — stronger shift
  const hairX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), { damping: 20, stiffness: 80 });
  const hairY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), { damping: 20, stiffness: 80 });
  const hairSkew = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), { damping: 20, stiffness: 80 });

  // Eye blink state
  const [blinking, setBlinking] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const blinkTimeout = useRef<ReturnType<typeof setTimeout>>();
  const moveAccumulator = useRef(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);

    // Calculate movement speed for blink trigger
    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;
    const speed = Math.sqrt(dx * dx + dy * dy);
    lastMousePos.current = { x: e.clientX, y: e.clientY };

    moveAccumulator.current += speed;

    // Blink when accumulated movement exceeds threshold
    if (moveAccumulator.current > 250 && !blinking) {
      setBlinking(true);
      moveAccumulator.current = 0;
      if (blinkTimeout.current) clearTimeout(blinkTimeout.current);
      blinkTimeout.current = setTimeout(() => setBlinking(false), 180);
    }
  }, [mouseX, mouseY, blinking]);

  // Periodic natural blink
  useEffect(() => {
    const interval = setInterval(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 150);
    }, 4000 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
      >
        {/* Interactive container */}
        <div
          className="relative w-full h-full"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: "1200px" }}
        >
          {/* Base image with 3D tilt */}
          <motion.img
            src={heroImage}
            alt="Portrait"
            className="absolute inset-0 w-full h-full object-cover object-top grayscale"
            width={1024}
            height={1280}
            style={{
              rotateX,
              rotateY,
              translateX,
              translateY,
            }}
          />

          {/* Hair movement overlay — duplicated image shifted more */}
          <motion.div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{
              translateX: hairX,
              translateY: hairY,
              skewX: hairSkew,
            }}
          >
            <div
              className="absolute inset-0 grayscale"
              style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                maskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 50%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 50%)",
                opacity: 0.6,
                mixBlendMode: "lighten",
              }}
            />
          </motion.div>

          {/* Eye blink overlays — positioned over eyes */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "32%",
              left: "38%",
              width: "7%",
              height: "3.5%",
            }}
          >
            <div
              className="w-full h-full rounded-full bg-[#2a2a2a] transition-all"
              style={{
                transform: blinking ? "scaleY(1)" : "scaleY(0)",
                transformOrigin: "center",
                transitionDuration: blinking ? "80ms" : "100ms",
                transitionTimingFunction: "ease-in-out",
              }}
            />
          </div>
          <div
            className="absolute pointer-events-none"
            style={{
              top: "32%",
              left: "55%",
              width: "7%",
              height: "3.5%",
            }}
          >
            <div
              className="w-full h-full rounded-full bg-[#2a2a2a] transition-all"
              style={{
                transform: blinking ? "scaleY(1)" : "scaleY(0)",
                transformOrigin: "center",
                transitionDuration: blinking ? "80ms" : "100ms",
                transitionTimingFunction: "ease-in-out",
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20 pointer-events-none" />

      {/* Hero text */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="absolute bottom-0 left-0 right-0 px-6 lg:px-12 pb-20 lg:pb-28 max-w-7xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-primary font-medium mb-4"
        >
          Digital Marketer & Content Strategist
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] tracking-tight"
        >
          Crafting Stories
          <br />
          That <span className="text-gradient">Convert</span>
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
      </motion.div>
    </section>
  );
};

export default HeroSection;
