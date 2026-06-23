import { motion } from "framer-motion";
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

const skills = [
  "Strategic Communications",
  "Public Affairs",
  "Media Relations",
  "Coalition Building",
  "Policy Analysis",
  "Crisis Management",
  "Narrative Strategy",
  "Grassroots Organizing",
  "Stakeholder Engagement"
];

const orgs = [
  "Global Policy Institute", 
  "Center for Civic Action", 
  "National Housing Trust", 
  "Urban Future Coalition"
];

export default function About() {
  return (
    <Layout>
      <motion.div {...pageTransition} className="flex-grow flex flex-col py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32"
        >
          <div className="lg:col-span-5">
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif mb-8 sticky top-32">
              About
            </motion.h1>
          </div>
          
          <div className="lg:col-span-7 flex flex-col gap-8 text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
            <motion.p variants={fadeUp}>
              I am an advocacy and communications strategist with over a decade of experience driving policy change through narrative power. My work is rooted in the belief that effective policy doesn't happen in a vacuum—it happens when we connect institutional levers with grassroots urgency.
            </motion.p>
            <motion.p variants={fadeUp}>
              I have directed campaigns that shift public sentiment on complex issues spanning environmental justice, housing equity, and digital rights. From managing rapid-response war rooms to crafting long-term coalition strategies, I specialize in distilling complicated policy into compelling stories that motivate action.
            </motion.p>
            
            <motion.blockquote variants={fadeUp} className="my-10 pl-6 border-l-2 border-primary text-3xl md:text-4xl font-serif italic text-foreground leading-snug">
              "The most enduring policy victories begin by changing what the public believes is possible."
            </motion.blockquote>
            
            <motion.p variants={fadeUp}>
              Whether partnering with community organizers, advising elected officials, or speaking on national media platforms, my approach centers on authenticity, precise messaging, and unwavering strategic focus.
            </motion.p>
          </div>
        </motion.div>

        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif mb-12">
            Core Expertise
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
            {skills.map((skill, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="group relative p-8 border-[0.5px] border-border overflow-hidden bg-background"
                data-testid={`skill-cell-${idx}`}
              >
                <div className="absolute inset-0 bg-card translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
                <h4 className="relative z-10 text-xl font-medium tracking-wide group-hover:text-primary transition-colors duration-300">
                  {skill}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-12 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <motion.h3 variants={fadeUp} className="text-xl font-serif text-muted-foreground whitespace-nowrap">
              Trusted by
            </motion.h3>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12 text-lg font-medium text-muted-foreground/60">
              {orgs.map((org, i) => (
                <span key={i} className="hover:text-foreground transition-colors duration-300 cursor-default">
                  {org}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </Layout>
  );
}
