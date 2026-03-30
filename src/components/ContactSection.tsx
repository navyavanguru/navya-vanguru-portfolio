import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-secondary" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-primary font-medium mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Let's Work Together
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-lg mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something great.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border border-border bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-border bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              placeholder="Project inquiry"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Message</label>
            <textarea
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-border bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 glow-purple"
          >
            {submitted ? "Message Sent!" : (
              <>
                Send Message <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
