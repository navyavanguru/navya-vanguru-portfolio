import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, ExternalLink, FileText, Video, BarChart3, PenTool, Instagram, Youtube } from "lucide-react";

const portfolioItems = [
  {
    type: "video" as const,
    icon: Video,
    tag: "Video Script",
    title: "Brand Story — SaaS Product Launch",
    description: "Scripted a 3-minute brand film for a SaaS startup that drove 200K+ views in the first week.",
    metric: "200K+ Views",
  },
  {
    type: "article" as const,
    icon: FileText,
    tag: "Blog / SEO",
    title: "10-Part Content Pillar Series",
    description: "Wrote a comprehensive SEO blog series that ranked #1 for 7 target keywords within 90 days.",
    metric: "#1 Rankings",
  },
  {
    type: "social" as const,
    icon: Instagram,
    tag: "Social Media",
    title: "Restaurant Chain Launch Campaign",
    description: "Created a 30-day social blitz with UGC strategy that sold out opening week across 3 cities.",
    metric: "15K Followers",
  },
  {
    type: "video" as const,
    icon: Youtube,
    tag: "YouTube Script",
    title: "Educational Series — Finance Simplified",
    description: "Scripted 12 explainer videos that grew a finance channel from 0 to 50K subscribers.",
    metric: "50K Subs",
  },
  {
    type: "article" as const,
    icon: PenTool,
    tag: "Copywriting",
    title: "E-Commerce Conversion Copy",
    description: "Rewrote product pages and email sequences, lifting conversion rate by 35% in one quarter.",
    metric: "+35% CVR",
  },
  {
    type: "social" as const,
    icon: BarChart3,
    tag: "Campaign",
    title: "B2B LinkedIn Thought Leadership",
    description: "Built a personal brand strategy for a CEO that generated 500+ inbound connections monthly.",
    metric: "500+ Leads/mo",
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-32 px-6 lg:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground font-medium mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Selected Work
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-foreground/20 hover:shadow-lg transition-all duration-500"
            >
              {/* Thumbnail placeholder */}
              <div className="relative h-48 bg-accent/50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-accent opacity-60" />
                <item.icon className="relative z-10 w-12 h-12 text-foreground/30 group-hover:text-foreground/50 transition-colors duration-500 group-hover:scale-110 transform" />

                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-foreground/90 flex items-center justify-center">
                      <Play className="w-6 h-6 text-background ml-0.5" />
                    </div>
                  </div>
                )}

                {item.type !== "video" && (
                  <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-foreground/10 backdrop-blur flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-foreground" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-muted-foreground bg-accent px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <span className="text-xs font-bold text-foreground tracking-wide">
                    {item.metric}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
