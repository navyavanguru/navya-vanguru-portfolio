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
          <p className="text-sm tracking-[0.25em] uppercase text-primary font-medium mb-4">
            About Me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Turning Ideas Into
            <br />
            Impactful Content
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a digital marketer and content strategist who believes every brand has a
            story worth telling. With expertise in blog writing, video scripting, and social
            media management, I craft content that doesn't just fill space — it drives engagement,
            builds trust, and converts audiences into loyal customers.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My approach combines data-driven strategy with creative storytelling, ensuring
            every piece of content serves a purpose and delivers measurable results for the
            brands I work with.
          </p>
          <div className="flex gap-12 pt-4">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "20+", label: "Happy Clients" },
              { number: "2M+", label: "Content Reach" },
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
