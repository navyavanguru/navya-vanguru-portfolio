import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    tag: "Blog Writing",
    title: "Tech Startup Content Strategy",
    problem: "A SaaS startup struggled with organic visibility and low blog engagement despite a quality product.",
    solution: "Developed a 12-week SEO content plan with pillar articles, keyword clusters, and internal linking strategy.",
    result: "180% increase in organic traffic and 3x more inbound leads within 3 months.",
  },
  {
    tag: "Video Scripting",
    title: "Brand Story Video Series",
    problem: "An e-commerce brand needed a compelling video series to humanize their brand on social media.",
    solution: "Wrote 10 short-form scripts blending storytelling with product highlights, optimized for reels and shorts.",
    result: "Videos garnered 500K+ combined views and a 40% boost in brand awareness surveys.",
  },
  {
    tag: "Social Media",
    title: "Restaurant Chain Launch Campaign",
    problem: "A new restaurant chain needed buzz before their grand opening across three cities.",
    solution: "Created a 30-day social media campaign with influencer collaborations, countdown content, and UGC strategy.",
    result: "Sold out opening week reservations, gained 15K followers, and earned local press coverage.",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 lg:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-primary font-medium mb-4">
            Featured Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Case Studies
          </h2>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-12 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
            >
              <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {project.tag}
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-4 mb-8">
                {project.title}
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { label: "Problem", text: project.problem },
                  { label: "Solution", text: project.solution },
                  { label: "Result", text: project.result },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-2">
                      {item.label}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
