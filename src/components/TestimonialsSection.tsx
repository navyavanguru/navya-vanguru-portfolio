import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Bloom Studio",
    text: "Working with this team transformed our content strategy completely. Blog traffic tripled and our social engagement has never been higher. Truly a game-changer for our brand.",
  },
  {
    name: "David Chen",
    role: "Marketing Director, TechFlow",
    text: "The video scripts were outstanding — authentic, engaging, and perfectly aligned with our brand voice. Our YouTube channel grew by 200% in just four months.",
  },
  {
    name: "Priya Sharma",
    role: "CEO, NourishBox",
    text: "From content calendars to campaign execution, every deliverable was polished and on time. I finally have a content partner I can trust completely.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 lg:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-primary font-medium mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-500"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-8 text-[15px]">
                "{t.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
