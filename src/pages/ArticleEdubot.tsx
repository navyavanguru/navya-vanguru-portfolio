import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  Share2,
  Linkedin,
  Mail,
  ChevronRight,
  TrendingUp,
  Brain,
  Compass,
  Repeat,
  Quote,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DottedSurface } from "@/components/ui/dotted-surface";

const ArticleEdubot = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Digital Marketing and Creative Thinking: Lessons from Edubot | Navya Vanguru";
  }, []);

  const articleFaqs = [
    {
      id: "faq-1",
      question: "How do you balance creative freedom with strict CAC targets?",
      answer:
        "Creative freedom exists during the ideation phase, but economic reality governs the distribution phase. You allow wild, diverse hypotheses in your creative angles, but you allocate test budgets strictly (e.g., 80% to proven controls, 20% to radical creative experiments). If an experiment fails to hit the target CAC threshold, it is retired without sentimentality.",
    },
    {
      id: "faq-2",
      question: "What tools does a modern Digital Growth Associate actually need?",
      answer:
        "At minimum, you need four core tools: Analytics (GA4 or Mixpanel for tracking user paths), Distribution (Meta Ads Manager and Google Ads for paid distribution), Friction tracking (Hotjar or Microsoft Clarity to watch where scrollers hesitate), and Prototyping (Figma or Canva to turn new creative angles around fast).",
    },
    {
      id: "faq-3",
      question: "Can creative thinking in marketing be taught, or is it an innate gift?",
      answer:
        "Creative thinking in growth marketing is a structured skill, not an innate personality trait. It is learned by regularly reviewing customer support tickets, listening to sales calls, studying why past campaigns failed, and breaking down winning ads across diverse industries. Creativity is simply pattern recognition applied to human problems.",
    },
    {
      id: "faq-4",
      question: "What should early-stage companies look for when hiring a growth marketer?",
      answer:
        "Look for comfort with ambiguity and intellectual humility. A candidate who claims they have a foolproof marketing playbook will struggle when consumer behavior shifts. The best growth professionals possess equal curiosity for user psychology and analytical discipline.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://navyavanguru.github.io/navya-vanguru-portfolio/digital-marketing-creative-thinking-edubot#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://navyavanguru.github.io/navya-vanguru-portfolio/#website",
          "name": "Navya Vanguru Portfolio",
          "url": "https://navyavanguru.github.io/navya-vanguru-portfolio/"
        },
        "headline": "Digital Marketing and Creative Thinking: Lessons from Edubot",
        "description": "How transitioning from beginner to Digital Growth Associate at Edubot in Vijayawada taught me to pair creative thinking with performance data.",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://navyavanguru.github.io/navya-vanguru-portfolio/digital-marketing-creative-thinking-edubot",
        "datePublished": "2026-11-13T10:00:00+05:30",
        "dateModified": "2026-11-13T10:00:00+05:30",
        "author": {
          "@type": "Person",
          "name": "Navya Vanguru",
          "jobTitle": "Digital Growth Associate",
          "url": "https://navyavanguru.github.io/navya-vanguru-portfolio/",
          "sameAs": [
            "https://www.linkedin.com/in/navyavanguru",
            "https://www.instagram.com/navya_vanguru"
          ]
        },
        "publisher": {
          "@type": "Person",
          "name": "Navya Vanguru",
          "url": "https://navyavanguru.github.io/navya-vanguru-portfolio/"
        },
        "keywords": [
          "digital marketing and creative thinking",
          "digital growth associate",
          "EdTech marketing strategy",
          "performance creative",
          "marketing learnings",
          "Edubot",
          "Vijayawada marketing"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://navyavanguru.github.io/navya-vanguru-portfolio/digital-marketing-creative-thinking-edubot#faq",
        "mainEntity": articleFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://navyavanguru.github.io/navya-vanguru-portfolio/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Articles",
            "item": "https://navyavanguru.github.io/navya-vanguru-portfolio/#portfolio"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Digital Marketing and Creative Thinking: Lessons from Edubot",
            "item": "https://navyavanguru.github.io/navya-vanguru-portfolio/digital-marketing-creative-thinking-edubot"
          }
        ]
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-[#070707] text-foreground selection:bg-white selection:text-black">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <DottedSurface className="opacity-20 fixed inset-0 pointer-events-none" />

      {/* Header Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/5 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-white/70 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="hidden sm:inline">Navya Vanguru</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-white/60">Digital Growth Associate</span>
          </div>
        </div>
      </header>

      {/* Main Article Container */}
      <main className="relative z-10 max-w-3xl mx-auto px-6 py-12 md:py-20">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-white/30" />
          <Link to="/#portfolio" className="hover:text-foreground transition-colors">Case Studies</Link>
          <ChevronRight className="w-3 h-3 text-white/30" />
          <span className="text-foreground truncate max-w-[200px] md:max-w-none">Edubot Learnings</span>
        </nav>

        {/* Article Meta Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-muted-foreground mb-6">
            <Sparkles className="w-3.5 h-3.5 text-white/70" />
            <span>Case Study &amp; Strategy Essay</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.15] tracking-tight">
            Digital Marketing and Creative Thinking: Lessons from Edubot
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mt-6">
            How combining digital marketing and creative thinking transformed my approach to growth at Edubot in Vijayawada.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-8 pt-6 border-t border-white/10 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center font-display font-bold text-foreground">
                N
              </div>
              <span className="font-medium text-foreground">Navya</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <time dateTime="2026-11-13">November 13, 2026</time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>6 min read</span>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/navyavanguru"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </header>

        {/* AEO Citation Block / Answer Block */}
        <section aria-label="Direct Citation Summary" className="my-10 p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/15 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/90 mb-3">
            <Quote className="w-4 h-4 text-white/70" />
            <span>Core Answer &amp; Strategic Thesis (AEO Summary)</span>
          </div>
          <p className="text-base md:text-lg text-foreground font-medium leading-relaxed italic">
            “Creative thinking in digital marketing is not about generating artistic ideas or catchy slogans. It is the process of formulating sharp psychological hypotheses about why an audience hesitates, building creative assets to address that tension, and using performance data to prove or discard the angle.”
          </p>
        </section>

        {/* Key Takeaways Box */}
        <section className="my-10 p-6 md:p-8 rounded-2xl bg-card border border-white/10">
          <h2 className="font-display text-xl font-bold text-foreground mb-5 flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-white/80" />
            <span>Key Takeaways</span>
          </h2>
          <ul className="space-y-4 text-sm md:text-base text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
              <span>
                <strong className="text-foreground">Aesthetic design is decoration; creative thinking is problem-solving:</strong> An ad must resolve user friction within three seconds, not win design awards.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
              <span>
                <strong className="text-foreground">Data doesn’t kill creativity—it validates it:</strong> Creative intuition builds the hypothesis; analytics delivers the verdict.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
              <span>
                <strong className="text-foreground">Regional audiences demand radical clarity:</strong> Marketing outside Tier-1 metros requires addressing trust, affordability, and practical outcomes without corporate jargon.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
              <span>
                <strong className="text-foreground">Seniority is emotional detachment from your ideas:</strong> The faster you let performance metrics challenge your assumptions, the faster your campaigns scale.
              </span>
            </li>
          </ul>
        </section>

        {/* Narrative Article Content */}
        <article className="space-y-8 text-base md:text-lg text-muted-foreground leading-relaxed font-light">
          <p>
            When I joined Edubot as a Digital Growth Associate in Vijayawada, I arrived with a head full of aesthetic ideas and zero understanding of why people actually click. I treated marketing like an art contest rather than an empirical science. The ad dashboard cured me of that illusion in two weeks.
          </p>

          <p>
            I spent my first week polishing color palettes, refining font pairings, and drafting what I thought were clever puns for an upcoming campaign. I hit launch, expecting inquiries to surge. Instead, the dashboard flatlined: impressions were weak, and the cost-per-click climbed by the hour. Nobody was reading the clever copy. Nobody was admiring the color palette.
          </p>

          <p className="text-foreground font-normal border-l-2 border-white/30 pl-4 italic">
            When the dashboard turned red, no amount of aesthetic polish could explain the silence.
          </p>

          {/* Section 1 */}
          <section className="pt-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why does aesthetic marketing fail to drive real digital growth?
            </h2>
            <p>
              Aesthetic marketing fails because searchers and scrollers do not browse social feeds to evaluate visual art. Visual polish attracts passive glances, but emotional resonance and friction reduction drive conversions.
            </p>
            <p className="mt-4">
              As a beginner, I conflated graphic design with marketing communication. Graphic design asks: <em>Does this look balanced and visually appealing?</em> Growth marketing asks: <em>Does this headline make a student stop scrolling because it mirrors their private anxiety about their career?</em>
            </p>
            <p className="mt-4">
              At Edubot, our audience includes ambitious students, young professionals, and anxious parents. Early on, our ads focused on modern gradients and generic slogans like <em>“Upskill for the Future.”</em> The result was predictable: low click-through rates and high acquisition costs. The moment we swapped the generic creative for a direct message addressing resume anxiety, engagement shifted immediately.
            </p>
            <p className="mt-4 text-foreground font-normal">
              The design was simpler, but the psychological tension was real. Which meant learning to look outside the marketing department entirely.
            </p>
          </section>

          {/* Section 2: The 4-Step Loop */}
          <section className="pt-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              How does creative thinking actually operate inside performance data?
            </h2>
            <p>
              Creative thinking operates inside performance data as an iterative hypothesis engine. Data tells you exactly where users drop off, but only creative empathy can deduce why they left and what will bring them back.
            </p>
            <p className="mt-4">
              Many growth teams treat performance marketing as a spreadsheet exercise: increase bid, decrease bid, duplicate ad set, swap CTA button. That approach hits a ceiling quickly. When ad fatigue sets in or acquisition costs spike, spreadsheet tweaks cannot rescue a campaign. You need a fresh angle.
            </p>
            <p className="mt-4">
              Here is the four-step loop I developed at Edubot to unite creative ideation with performance tracking:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8 not-prose">
              <div className="p-5 rounded-xl bg-card border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider mb-2">
                  <TrendingUp className="w-4 h-4 text-white/70" />
                  <span>1. Friction Diagnosis</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Look at the drop-off metrics. If impressions are high but CTR is low, the creative hook failed. If CTR is high but conversion on the landing page is low, the promise made in the ad broke upon landing.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-card border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider mb-2">
                  <Brain className="w-4 h-4 text-white/70" />
                  <span>2. Behavioral Hypothesis</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Instead of guessing randomly, ask what the prospect doubted. Did they think the program was too long? Too theoretical? Too expensive?
                </p>
              </div>

              <div className="p-5 rounded-xl bg-card border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider mb-2">
                  <Compass className="w-4 h-4 text-white/70" />
                  <span>3. Angle Production</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Build three distinct creative angles aimed directly at that doubt: one proof-led (alumni outcomes), one objection-led (time commitment), and one transformation-led (day-in-the-life).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-card border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider mb-2">
                  <Repeat className="w-4 h-4 text-white/70" />
                  <span>4. Data Verification</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Spend a disciplined test budget to let audience behavior declare the winner. Creative thinking supplies the spark; data supplies the guardrails.
                </p>
              </div>
            </div>

            <p className="text-foreground font-normal border-l-2 border-white/30 pl-4 italic">
              Yet the hardest part wasn't learning the metrics—it was what happened to my ego when the numbers arrived.
            </p>
          </section>

          {/* Section 3: Vijayawada & Regional Insights */}
          <section className="pt-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              What did working at Edubot in Vijayawada teach me that tier-1 playbooks miss?
            </h2>
            <p>
              Marketing in Vijayawada taught me that regional audiences have zero patience for borrowed Silicon Valley buzzwords. When marketing to audiences outside tier-1 metros, trust is built on tangible proof, local relatability, and immediate practical utility.
            </p>
            <p className="mt-4">
              Most mainstream digital marketing playbooks are written by agencies in Bengaluru, Mumbai, or San Francisco. They assume a baseline digital familiarity and disposable income that rarely matches tier-2 and tier-3 realities.
            </p>
            <p className="mt-4">
              Working on growth at Edubot in Andhra Pradesh forced me to unlearn textbook assumptions:
            </p>

            <ul className="space-y-4 my-6 pl-2">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                <span>
                  <strong className="text-foreground">Jargon breeds suspicion:</strong> High-concept marketing words like “synergy,” “disruption,” or “next-gen pedagogy” create distance. Plain language in clear English or bilingual messaging creates trust.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                <span>
                  <strong className="text-foreground">Parents are the silent stakeholders:</strong> Even when marketing to college students, parental validation often governs the final transaction. Creative angles must respect familial investment concerns.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                <span>
                  <strong className="text-foreground">Proof must be concrete:</strong> Rather than saying “recognized certifications,” highlighting specific hiring partner counts and verified placement outcomes delivered an immediate uplift in qualified inquiries.
                </span>
              </li>
            </ul>

            <p className="text-foreground font-normal">
              This transformed how I view my role today.
            </p>
          </section>

          {/* Section 4: Mindset Shifts */}
          <section className="pt-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              What are the 4 mindset shifts from newbie to growth professional?
            </h2>
            <p>
              The transition from a marketing beginner to an experienced growth associate is defined by four fundamental mindset reversals:
            </p>

            <div className="space-y-6 my-8 not-prose">
              <div className="p-6 rounded-2xl bg-card border border-white/10">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  1. From “What looks pretty?” to “What friction am I removing?”
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  A beginner asks how to make a campaign look impressive. A professional asks what objection is preventing the user from taking the next step. Every visual element, word, and spacing choice exists only to make comprehension effortless.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-white/10">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  2. From “Protecting my idea” to “Celebrating being proven wrong”
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Early in my career, seeing an ad angle fail felt like a personal critique of my taste. Today, a losing ad is valuable intelligence. It eliminates a false hypothesis quickly, allowing budget to flow into verified angles.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-white/10">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  3. From “Chasing vanity virality” to “Protecting conversion intent”
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Getting 100,000 views on a video that attracts users who will never enroll is a net loss for the business. A professional growth marketer values 500 targeted impressions from genuine prospects over empty viral reach.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-white/10">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  4. From “Tool operator” to “Audience psychologist”
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Knowing how to configure conversions in Meta Ads Manager or set up events in Google Analytics is the baseline barrier to entry. The actual moat is understanding how human desire, doubt, and social proof interact inside a customer's mind.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Accordion Component */}
          <section className="pt-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              FAQ: Real questions on creative digital growth
            </h2>
            <p className="mb-6">
              Frequently asked questions on performance creative, testing frameworks, and team building.
            </p>

            <Accordion type="single" collapsible defaultValue="faq-1" className="w-full space-y-4 not-prose">
              {articleFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-white/10 rounded-xl px-5 py-2 bg-card"
                >
                  <AccordionTrigger className="text-left font-display text-base md:text-lg font-medium text-foreground hover:no-underline py-4">
                    <span>{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pt-1 pb-4 font-light">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Conclusion */}
          <section className="pt-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Where does creative growth go from here?
            </h2>
            <p>
              When I look back at that first glowing red ad dashboard at Edubot, I no longer see a failure. I see the exact moment my career in growth actually started.
            </p>
            <p className="mt-4">
              Digital marketing will continue to shift as AI tools generate hundreds of ad variants in seconds and bidding algorithms become more automated. But automation only accelerates execution; it cannot synthesize human empathy. The marketers who thrive will not be those who cling to aesthetic intuition, nor those who hide behind cold spreadsheets.
            </p>
            <p className="mt-4">
              They will be the ones who treat creative thinking as a disciplined hypothesis and performance data as their most honest collaborator.
            </p>
            <p className="mt-4 text-foreground font-normal">
              True creative thinking was never about finding a sudden lightning bolt of inspiration. It was about building the discipline to listen when the data talks back.
            </p>
          </section>
        </article>

        {/* Author Bio & Citation Callout Card */}
        <footer className="mt-16 pt-10 border-t border-white/10">
          <div className="p-8 rounded-2xl bg-card border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-white/20 to-white/5 border border-white/20 flex items-center justify-center font-display text-2xl font-bold text-white shrink-0">
              N
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-display text-xl font-bold text-foreground">
                Navya Vanguru
              </h3>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-mono mt-1">
                Digital Growth Associate • Performance Creative &amp; Growth Strategy • Vijayawada
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3 font-light">
                I’m Navya, a Digital Growth Associate based in Vijayawada, focused on performance creative and growth strategy. If you’re building in EdTech or want to trade notes on testing creative angles that actually convert, connect with me on LinkedIn or reach out directly.
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-5">
                <a
                  href="mailto:navyavanguru@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Me</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/navyavanguru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-foreground text-xs font-medium hover:bg-white/5 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors ml-auto"
                >
                  <span>Explore Full Portfolio</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ArticleEdubot;
