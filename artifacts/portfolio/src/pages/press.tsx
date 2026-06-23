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

const pressItems = [
  { pub: "Devex", title: "How Global INGOs Are Rethinking Brand Coherence Across Affiliates", date: "Jun 2024" },
  { pub: "The New Humanitarian", title: "Crisis Communications in the Field: Lessons from the Middle East", date: "Nov 2022" },
  { pub: "Alliance Magazine", title: "Donor Relations in the Age of Radical Transparency", date: "Apr 2022" },
  { pub: "Comms2Point0", title: "Cross-Cultural Leadership and the Future of International Development Communications", date: "Sep 2021" },
  { pub: "Africa Development Bank Insights", title: "From Visibility to Influence: Building Advocacy Infrastructure That Lasts", date: "Mar 2020" },
  { pub: "ILO Regional Forum", title: "Panel: Corporate ESG Communications in Emerging Markets", date: "Oct 2019" },
];

export default function Press() {
  return (
    <Layout>
      <motion.div {...pageTransition} className="flex-grow flex flex-col py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 gap-8">
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif">
              Press & Media
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-md font-light">
              Selected features, op-eds, and speaking engagements across international development, humanitarian affairs, and global advocacy.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col mb-32"
        >
          {pressItems.map((article, i) => (
            <motion.a
              href="#"
              key={i}
              variants={fadeUp}
              className="flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-border group hover:border-primary transition-all duration-500"
              data-testid={`link-press-item-${i}`}
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:items-center w-full">
                <span className="text-primary font-medium tracking-widest uppercase text-sm w-52 shrink-0">
                  {article.pub}
                </span>
                <h4 className="text-2xl md:text-3xl font-serif group-hover:translate-x-2 transition-transform duration-500">
                  {article.title}
                </h4>
              </div>
              <div className="flex items-center gap-6 mt-6 md:mt-0">
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {article.date}
                </span>
                <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-card border border-border p-12 md:p-20 text-center flex flex-col items-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-serif mb-6">
            Looking for a speaker or strategic advisor?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-10 max-w-xl">
            Available for executive panels, podcast interviews, keynotes, and expert commentary on international development communications, humanitarian affairs, and global advocacy strategy.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 rounded-none hover:bg-primary transition-colors duration-300 text-lg font-medium"
              data-testid="btn-press-contact"
            >
              Invite me to speak <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
