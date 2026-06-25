import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Layout } from "@/components/layout";

const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const marqueeSkills = [
  "Strategic Communications",
  "Global Advocacy",
  "International Development",
  "Campaign Strategy",
  "Stakeholder Engagement",
  "Crisis Communication",
  "Reputation Management",
  "Executive Leadership",
  "Brand Strategy",
  "Public Affairs",
  "Donor Relations",
  "Policy Influence",
  "Media Relations",
  "Cross-Cultural Leadership",
  "Digital Engagement",
  "Risk Management",
];

export default function Home() {
  return (
    <Layout>
      <motion.div {...pageTransition} className="flex-grow flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
          {/* Background image + overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-bg.jpg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-foreground/65" />
          </div>
          {/* Content */}
          <div className="relative z-10 px-6 md:px-12 py-20 max-w-7xl mx-auto w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-5xl"
            >
              <motion.p variants={fadeUp} className="text-primary font-medium tracking-wider uppercase text-sm mb-6">
                Lute Maekaeka Kazembe — Nairobi, Kenya
              </motion.p>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.08] mb-8 text-background">
                Driving Global Influence, Visibility, and Impact Across International Development Networks.
              </motion.h1>
              <motion.div variants={fadeUp} className="max-w-2xl">
                <p className="text-lg md:text-xl leading-relaxed mb-12 font-light text-background/75">
                  Visionary Strategic Communications & Global Advocacy Leader. Executive Director-Level Advisor with 15+ years shaping narratives and driving policy transformation across Africa, the Middle East, Asia, and South America.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-6 items-center">
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-3 bg-background text-foreground px-8 py-4 rounded-none hover:bg-primary hover:text-background transition-colors duration-300 text-lg font-medium"
                  data-testid="link-hero-work"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border-b border-background/70 pb-1 text-lg text-background hover:text-primary hover:border-primary transition-colors duration-300 px-4"
                  data-testid="link-hero-contact"
                >
                  Get in Touch <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Marquee Section */}
        <div className="w-full overflow-hidden border-y border-border py-4 bg-card whitespace-nowrap flex">
          <motion.div
            className="flex gap-12 text-sm uppercase tracking-widest text-muted-foreground"
            animate={{ x: [0, -2400] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center shrink-0">
                {marqueeSkills.map((skill, j) => (
                  <span key={j} className="flex items-center gap-12 shrink-0">
                    {skill}
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Featured In — Media Logo Strip */}
        <section className="py-12 px-6 md:px-12 border-b border-border bg-background">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
            >
              <motion.p variants={fadeUp} className="text-xs uppercase tracking-widest text-muted-foreground whitespace-nowrap shrink-0">
                Featured in
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-8 md:gap-12">
                {[
                  { name: "Devex", logo: "/images/logo-devex.png" },
                  { name: "The New Humanitarian", logo: "/images/logo-new-humanitarian.png" },
                  { name: "Alliance Magazine", logo: "/images/logo-alliance.png" },
                  { name: "African Development Bank", logo: "/images/logo-afdb.png" },
                  { name: "ILO", logo: "/images/logo-ilo.png" },
                ].map((outlet, i) => (
                  <div key={i} className="h-7 flex items-center opacity-50 hover:opacity-90 transition-opacity duration-300 grayscale hover:grayscale-0">
                    <img
                      src={outlet.logo}
                      alt={outlet.name}
                      className="h-full w-auto max-w-[110px] object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="py-24 px-6 md:px-12 bg-background flex-grow">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col md:flex-row gap-12 md:gap-24"
            >
              <div className="md:w-1/3 flex flex-col items-start">
                <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-serif mb-8 md:sticky top-32">
                  Featured <br /> Campaigns
                </motion.h2>
                <motion.div variants={fadeUp}>
                  <Link href="/work" className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium hover:text-primary hover:border-primary transition-colors duration-300" data-testid="link-featured-work">
                    See All Work <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>

              <div className="md:w-2/3 flex flex-col gap-16">
                {[
                  {
                    title: "Oxfam International",
                    role: "Deputy Director, Advocacy, Campaigns & Engagement",
                    description: "Unified 30+ global affiliates under a shared communications engine. Strengthened global crisis systems and boosted organizational decision-making efficiency by 50%.",
                    img: "/images/campaign-1.jpg",
                    logo: "/images/logo-oxfam.png"
                  },
                  {
                    title: "Medair — Middle East Humanitarian Portfolio",
                    role: "Regional Communications Manager",
                    description: "Directed a humanitarian portfolio across eight countries, producing award-winning campaigns that drove a 60% increase in regional brand visibility.",
                    img: "/images/campaign-2.jpg",
                    logo: "/images/logo-medair.png"
                  }
                ].map((work, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="group cursor-default"
                    data-testid={`card-home-work-${i}`}
                  >
                    <div className="home-campaign-img-wrap mb-6">
                      <img
                        src={work.img}
                        alt={work.title}
                        onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.background = 'hsl(40 20% 90%)'; (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <span className="text-primary text-sm font-medium uppercase tracking-wider">{work.role}</span>
                      <div className="flex items-center gap-4">
                        {work.logo && (
                          <img
                            src={work.logo}
                            alt={`${work.title} logo`}
                            className="h-7 w-auto max-w-[120px] object-contain"
                          />
                        )}
                        <h3 className="text-3xl md:text-4xl font-serif group-hover:text-primary transition-colors duration-300">
                          {work.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed mt-2 max-w-xl">
                        {work.description}
                      </p>
                    </div>
                    <div className="h-px w-full bg-border mt-10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
}
