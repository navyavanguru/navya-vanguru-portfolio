import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PenLine, Share2, BarChart3, Code } from "lucide-react";

const categories = [
  {
    icon: PenLine,
    title: "Strategic Writing",
    skills: ["Performance Copywriting", "Video Scripting", "B2B Blogging", "SEO Content Design", "Newsletter Strategy"],
  },
  {
    icon: Share2,
    title: "Growth & Narrative",
    skills: ["IG/LinkedIn Strategy", "Community Building", "Brand Storytelling", "Content Calendars", "Retention Tactics"],
  },
  {
    icon: BarChart3,
    title: "Digital Strategy",
    skills: ["AI Workflow Design", "Google Analytics 4", "Meta Business Suite", "Market Research", "Conversion Audits"],
  },
  {
    icon: Code,
    title: "Creative Tech",
    skills: ["Midjourney/DALL-E", "HTML & CSS", "WordPress/Webflow", "Video Editing Basics", "CMS Management"],
  },
];


const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 lg:px-12 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground font-medium mb-4">
            What I Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6">
                <cat.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {cat.title}
              </h3>

              <ul className="mt-4 space-y-2.5">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-foreground" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
