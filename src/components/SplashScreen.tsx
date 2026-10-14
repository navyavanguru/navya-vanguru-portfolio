import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { DottedSurface } from "@/components/ui/dotted-surface";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Keep it short as requested (2.5s total)
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 800);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Use the new Dotted Surface for a tech-focused feel */}
          <DottedSurface className="opacity-40" />

          {/* Centered Minimalist Text Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="z-10 text-center"
          >
            <h1 className="text-white font-display text-[3vw] md:text-lg tracking-[1.2em] uppercase whitespace-nowrap">
              Digital Storyteller
            </h1>
            <div className="h-px w-full max-w-[200px] bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-4" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;

