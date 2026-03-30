import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Video, Megaphone, Lightbulb } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Content Writing",
    description: "SEO-optimized blogs, articles, and web copy that educate, engage, and drive organic growth for your brand.",
  },
  {
    icon: Video,
    title: "Video Script Writing",
    description: "Compelling scripts for YouTube, reels, ads, and branded videos that capture attention and tell your story.",
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    description: "End-to-end social media strategy, content calendars, posting, and analytics to grow your online presence.",
  },
  {
    icon: Lightbulb,
    title: "Content Strategy",
    description: "Data-driven content roadmaps that align with your business goals, audience needs, and market trends.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 px-6 lg:px-12 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-primary font-medium mb-4">
            What I Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Services
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-10 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
