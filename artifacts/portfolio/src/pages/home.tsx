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

export default function Home() {
  return (
    <Layout>
      <motion.div {...pageTransition} className="flex-grow flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-12 py-20 max-w-7xl mx-auto w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.p variants={fadeUp} className="text-primary font-medium tracking-wider uppercase text-sm mb-6">
              Alexandra Rivera
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] mb-8 text-foreground">
              Advocacy & <br className="hidden md:block"/> Communications Director
            </motion.h1>
            <motion.div variants={fadeUp} className="max-w-2xl">
              <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed mb-12 font-light">
                I build campaigns that shape public narrative and shift policy. 
                Bridging the gap between grassroots urgency and institutional strategy to drive enduring change.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-6 items-center">
              <Link 
                href="/work" 
                className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 rounded-none hover:bg-primary transition-colors duration-300 text-lg font-medium"
                data-testid="link-hero-work"
              >
                View My Work
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 border-b border-foreground pb-1 text-lg hover:text-primary hover:border-primary transition-colors duration-300 px-4"
                data-testid="link-hero-contact"
              >
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Marquee Section */}
        <div className="w-full overflow-hidden border-y border-border py-4 bg-card whitespace-nowrap flex">
          <motion.div 
            className="flex gap-12 text-sm uppercase tracking-widest text-muted-foreground"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                <span>Strategic Communications</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Public Affairs</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Media Relations</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Coalition Building</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Crisis Management</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
            ))}
          </motion.div>
        </div>

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
                  Featured <br/> Campaigns
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
                    title: "The Clean Water Coalition Initiative",
                    role: "Lead Strategist",
                    description: "United 40+ grassroots organizations and policy tanks to pass comprehensive state-level water protection legislation. Managed media relations, earning coverage in top-tier national outlets and shifting public sentiment."
                  },
                  {
                    title: "Fair Housing Now",
                    role: "Communications Director",
                    description: "Designed a multi-channel advocacy campaign that reframed the housing debate. Produced rapid-response messaging, legislative briefings, and a digital narrative strategy that reached 2M+ residents."
                  }
                ].map((work, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeUp} 
                    className="group cursor-default"
                    data-testid={`card-home-work-${i}`}
                  >
                    <div className="flex flex-col gap-4">
                      <span className="text-primary text-sm font-medium uppercase tracking-wider">{work.role}</span>
                      <h3 className="text-3xl md:text-4xl font-serif group-hover:text-primary transition-colors duration-300">
                        {work.title}
                      </h3>
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
