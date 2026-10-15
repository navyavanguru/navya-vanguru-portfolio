import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { DottedSurface } from "@/components/ui/dotted-surface";
import heroImage from "@/assets/hero-portrait.png";
import { Sparkles, ArrowRight } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [show, setShow] = useState(true);
  const [touchPos, setTouchPos] = useState<{ x: number; y: number } | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Normalized touch coordinates (-1 to 1)
  const touchX = useMotionValue(0);
  const touchY = useMotionValue(0);

  // Organic spring physics for smooth, lifelike head and eye gaze
  const springConfig = { stiffness: 140, damping: 18, mass: 0.5 };
  const springX = useSpring(touchX, springConfig);
  const springY = useSpring(touchY, springConfig);

  // 3D Perspective Gaze Transforms
  // Yaw (looking left/right towards touch)
  const rotateY = useTransform(springX, [-1, 1], [-24, 24]);
  // Pitch (looking up/down towards touch)
  const rotateX = useTransform(springY, [-1, 1], [18, -18]);
  // Subtle roll
  const rotateZ = useTransform(springX, [-1, 1], [-4, 4]);
  // Neck & head translation
  const translateX = useTransform(springX, [-1, 1], [-32, 32]);
  const translateY = useTransform(springY, [-1, 1], [-22, 22]);

  // Dynamic light reflection that moves with user touch
  const lightX = useTransform(springX, [-1, 1], ["25%", "75%"]);
  const lightY = useTransform(springY, [-1, 1], ["20%", "65%"]);

  const updateCoordinates = (clientX: number, clientY: number) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    // Anchor center near portrait face (~42% from top)
    const normX = Math.max(-1, Math.min(1, (clientX - width / 2) / (width / 2)));
    const normY = Math.max(-1, Math.min(1, (clientY - height * 0.42) / (height / 2)));
    
    touchX.set(normX);
    touchY.set(normY);
    setTouchPos({ x: clientX, y: clientY });
    if (!hasInteracted) setHasInteracted(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    updateCoordinates(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches && e.touches.length > 0) {
      updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches && e.touches.length > 0) {
      updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleFinish = () => {
    setShow(false);
    setTimeout(onComplete, 700);
  };

  // Optional auto-dismiss timer after 8 seconds if user doesn't click Enter
  useEffect(() => {
    const autoDismiss = setTimeout(() => {
      handleFinish();
    }, 8500);
    return () => clearTimeout(autoDismiss);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key="splash"
          ref={containerRef}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          onPointerMove={handlePointerMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          className="fixed inset-0 z-[120] bg-[#070707] flex flex-col items-center justify-between overflow-hidden cursor-crosshair select-none touch-none"
        >
          {/* Three.js dynamic background wave */}
          <DottedSurface className="opacity-35 pointer-events-none" />

          {/* Dynamic Light Follower / Glow on Touch */}
          {touchPos && (
            <motion.div
              className="pointer-events-none fixed z-30 rounded-full"
              style={{
                left: touchPos.x,
                top: touchPos.y,
                x: "-50%",
                y: "-50%",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 rounded-full bg-white/10 blur-xl animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-white/80 shadow-[0_0_15px_rgba(255,255,255,0.9)] mx-auto -mt-10" />
            </motion.div>
          )}

          {/* Top Brand Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="z-20 pt-8 md:pt-10 text-center pointer-events-none px-4"
          >
            <p className="text-white/40 text-[10px] md:text-xs tracking-[0.5em] uppercase font-light">
              Interactive Cinematic Experience
            </p>
            <h2 className="text-white font-display text-xl md:text-2xl font-bold tracking-[0.2em] uppercase mt-1">
              Navya Vanguru
            </h2>
          </motion.div>

          {/* Center 3D Portrait with Interactive Touch Gaze */}
          <div 
            className="relative z-10 flex-1 w-full max-w-2xl flex items-center justify-center overflow-visible"
            style={{ perspective: 1200 }}
          >
            {/* Ambient Background Aura behind the portrait */}
            <div className="absolute w-[320px] md:w-[480px] h-[320px] md:h-[480px] rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

            {/* 3D Gaze Container */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                rotateZ,
                translateX,
                translateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center w-full h-[60vh] md:h-[65vh]"
            >
              <img
                src={heroImage}
                alt="Navya Vanguru"
                draggable={false}
                className="h-full w-auto max-w-[85vw] object-contain object-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter grayscale contrast-110 brightness-95"
              />

              {/* Dynamic Eye & Specular Lighting Overlay that follows user touch */}
              <motion.div
                className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-60"
                style={{
                  background: useTransform(
                    [lightX, lightY],
                    ([lx, ly]) =>
                      `radial-gradient(circle 280px at ${lx} ${ly}, rgba(255,255,255,0.4) 0%, transparent 70%)`
                  ),
                }}
              />

              {/* Bottom gradient fade for seamless integration */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070707] via-[#070707]/60 to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Bottom Interactive Touch Instructions & Enter Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="z-20 pb-8 md:pb-10 flex flex-col items-center gap-4 px-6 text-center"
          >
            {/* Interactive hint badge */}
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-white/70 animate-spin" style={{ animationDuration: "6s" }} />
              <span className="text-[11px] md:text-xs text-white/70 font-light tracking-wider">
                {hasInteracted ? "Tracking your touch in real time" : "Touch anywhere to guide her gaze"}
              </span>
            </div>

            {/* Enter Portfolio Button */}
            <button
              onClick={handleFinish}
              className="group relative flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.45)] cursor-pointer"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
