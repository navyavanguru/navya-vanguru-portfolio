import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 lg:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground font-medium mb-4">
            About Me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Where Strategy Meets 
            <br />
            <span className="text-gradient">Meaningful Storytelling</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            I’m Navya, a digital strategist who believes that every brand has a pulse, 
            and every pulse has a story waiting to be told. I specialize in bridging 
            the gap between complex data and human emotion—crafting content that 
            doesn't just fill space, but builds deep, lasting loyalty.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            My approach combines the precision of SEO with the nuance of creative 
            direction. Whether it's a high-retention video script or a thought-leadership 
            blog, I focus on the 'why' behind the scroll.
          </p>
          <div className="flex gap-12 pt-4">
            {[
              { number: "50+", label: "Portfolios Directed" },
              { number: "2M+", label: "Content Reach" },
              { number: "3+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-display font-bold text-foreground">{stat.number}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
