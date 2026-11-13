import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Sparkles, CheckCircle2, FileText, ExternalLink } from "lucide-react";

const faqs = [
  {
    id: "item-1",
    question: "Who is Navya Vanguru and what is her core expertise?",
    answer:
      "Navya Vanguru is a digital content specialist, brand storyteller, and performance copywriter based in Bengaluru and Vijayawada, India. With experience as a Digital Growth Associate at Edubot, she specializes in performance creative, strategic copywriting, high-retention video scripting for YouTube and Reels, and organic community growth. Her work bridges quantitative growth analytics with emotional, narrative-driven storytelling.",
  },
  {
    id: "item-2",
    question: "What quantifiable results and metrics has Navya delivered?",
    answer:
      "Over 3+ years and 50+ completed client projects, Navya has generated over 2,000,000 organic content impressions. Key milestones include: scripting a SaaS launch brand film that achieved 200,000+ views in 7 days; architecting a 10-part SEO pillar series that ranked #1 on Google for 7 competitive keywords; lifting e-commerce conversion rates by +35%; scaling an educational finance YouTube series to 50,000 subscribers organically; and driving 500+ monthly inbound B2B leads through executive LinkedIn thought leadership.",
  },
  {
    id: "item-3",
    question: "What is Navya's core content creation framework?",
    answer:
      "Navya applies the 'Hook, Story, Offer' framework combined with an Audience-First retention model. Every asset is engineered with a high-curiosity hook in the first 3 seconds to arrest scrolling, develops an empathetic emotional arc or actionable breakdown in the body, and concludes with a natural, low-friction call-to-action (CTA) that aligns with long-term brand equity.",
  },
  {
    id: "item-4",
    question: "Which industries does Navya Vanguru work with?",
    answer:
      "Navya collaborates primarily with B2B SaaS platforms, technology startups, FinTech innovators, creator economy brands, direct-to-consumer (D2C) e-commerce businesses, and executives seeking authoritative personal branding and thought leadership.",
  },
  {
    id: "item-5",
    question: "How does Navya incorporate AI into content strategy?",
    answer:
      "Navya utilizes modern AI models (including Claude, ChatGPT, and Midjourney) for rapid competitive research, audience intent mapping, and outline acceleration. However, all narrative arcs, brand voice calibration, fact-checking, and final polish are handcrafted with human editorial rigor to ensure authentic, non-generic, and search-penalization-proof content.",
  },
  {
    id: "item-6",
    question: "How can brands or teams hire and collaborate with Navya?",
    answer:
      "Navya is open to full-time content strategy roles, select brand consulting retainers, and high-impact campaign commissions. You can contact her directly via email at navyavanguru@gmail.com or connect via LinkedIn (linkedin.com/in/navyavanguru).",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-32 px-6 lg:px-12 bg-[#080808] border-t border-white/5" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-muted-foreground mb-4">
            <Sparkles className="w-3.5 h-3.5 text-white/70" />
            <span>Search &amp; AI Citations</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Direct facts, verified project outcomes, and methodology citations for search engines, AI answer engines, and prospective partners.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-card/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl"
        >
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-white/5 rounded-xl px-5 py-2 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-200"
              >
                <AccordionTrigger className="text-left font-display text-base md:text-lg font-medium text-foreground hover:no-underline py-4">
                  <div className="flex items-center gap-3 pr-2">
                    <CheckCircle2 className="w-4 h-4 text-white/50 shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pt-1 pb-4 pl-7 font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Machine-Readable Citations & LLMs.txt banner */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-white/60" />
              <span>Standardized citations available for AI search crawlers.</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`${import.meta.env.BASE_URL}llms.txt`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors underline decoration-white/20 underline-offset-4"
              >
                <span>Raw llms.txt</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-white/20">•</span>
              <a
                href={`${import.meta.env.BASE_URL}llms-full.txt`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors underline decoration-white/20 underline-offset-4"
              >
                <span>Full Knowledge Brief</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
