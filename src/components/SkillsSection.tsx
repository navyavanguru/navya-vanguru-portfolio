import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PenLine, Share2, BarChart3, Code } from "lucide-react";

const categories = [
  {
    icon: PenLine,
    title: "Content Creation",
    skills: ["Blog Writing", "Video Scripting", "Copywriting", "SEO Content", "Email Campaigns"],
  },
  {
    icon: Share2,
    title: "Social Media",
    skills: ["Instagram Strategy", "LinkedIn Growth", "Content Calendars", "Community Building", "Analytics"],
  },
  {
    icon: BarChart3,
    title: "Marketing Tools",
    skills: ["Google Analytics", "Canva Pro", "Meta Business Suite", "Mailchimp", "Hootsuite"],
  },
  {
    icon: Code,
    title: "Basic Tech",
    skills: ["HTML & CSS", "WordPress", "Notion", "AI Tools", "Basic SEO"],
    badge: "Learning",
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
          <p className="text-sm tracking-[0.25em] uppercase text-primary font-medium mb-4">
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
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <cat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {cat.title}
              </h3>
              {cat.badge && (
                <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-4">
                  {cat.badge}
                </span>
              )}
              <ul className="mt-4 space-y-2.5">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
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
