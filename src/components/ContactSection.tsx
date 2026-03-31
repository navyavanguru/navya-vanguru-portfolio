import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, FileDown } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-secondary" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground font-medium mb-4">
            Let's Connect
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Open to Opportunities
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-12">
            I'm currently exploring new roles in digital marketing and content strategy. 
            If you think I'd be a great fit for your team, let's talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:navya@example.com"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:bg-accent transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="#"
            className="flex items-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:bg-accent transition-colors"
          >
            <FileDown className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
