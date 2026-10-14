import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Code, Briefcase, Mail, Home, Layers, Sparkles } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Code },
  { label: "Portfolio", href: "#portfolio", icon: Briefcase },
  { label: "Services", href: "#services", icon: Sparkles },
  { label: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`
          relative flex items-center gap-1 p-1.5 rounded-full pointer-events-auto
          transition-all duration-500 ease-[0.22, 1, 0.36, 1]
          ${scrolled 
            ? "bg-black/40 backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
            : "bg-black/20 backdrop-blur-2xl border border-white/5"
          }
        `}
      >
        {/* Desktop Links */}
        <div className="flex items-center">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isHovered = hovered === link.href;
            
            return (
              <a
                key={link.href}
                href={link.href}
                title={link.label}
                onMouseEnter={() => setHovered(link.href)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex items-center px-5 py-4 md:px-4 md:py-2 group overflow-hidden"
              >
                <div className="relative z-10 flex items-center gap-2">
                  <Icon className={`transition-colors duration-300 w-5 h-5 md:w-4 md:h-4 ${isHovered ? "text-white" : "text-white/60"}`} />
                  <span className={`text-xs font-medium tracking-wide transition-all duration-300 hidden md:block ${isHovered ? "text-white" : "text-white/50"}`}>
                    {link.label}
                  </span>
                </div>
                
                {/* macOS Hover Indicator */}
                {isHovered && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-x-1 inset-y-1 bg-white/10 rounded-full -z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Separator */}
        <div className="w-px h-6 bg-white/10 mx-1 hidden md:block" />

        {/* Action Button - Compact */}
        <a
          href="#contact"
          className="relative flex items-center justify-center p-2 md:px-5 md:py-2 rounded-full bg-white transition-all duration-300 hover:scale-105 active:scale-95 group shadow-lg"
        >
          <span className="text-[10px] md:text-xs font-bold text-black uppercase tracking-widest hidden md:block">
            Hire Me
          </span>
          <Mail size={14} className="text-black md:hidden" />
          
          {/* Subtle Glow */}
          <div className="absolute inset-0 rounded-full bg-white blur-md opacity-0 group-hover:opacity-20 transition-opacity" />
        </a>
      </motion.nav>
    </div>
  );
};

export default Navbar;

