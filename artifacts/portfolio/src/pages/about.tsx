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

const orgs = [
  { name: "Oxfam International", logo: "/images/logo-oxfam.png" },
  { name: "Medair", logo: "/images/logo-medair.png" },
  { name: "Japan Tobacco International", logo: "/images/logo-jti.png" },
  { name: "Plan International", logo: "/images/logo-plan.png" },
  { name: "FCDO UK", logo: null },
  { name: "Sun International Hotels", logo: null },
];

const education = [
  { institution: "London School of Hygiene & Tropical Medicine", credential: "Certificate, Epidemiology & Research Methods", logo: "/images/logo-university-london.png" },
  { institution: "Johns Hopkins University", credential: "Certificate, Health Communications & Advocacy", logo: "/images/logo-johns-hopkins.png" },
  { institution: "University of Michigan", credential: "Master's Fellow, Communications and Policy Development", logo: "/images/logo-university-michigan.png" },
  { institution: "University of Namibia", credential: "Diploma, Public Administration", logo: "/images/logo-unam.png" },
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
          <div className="lg:col-span-4">
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif mb-8">
              About
            </motion.h1>
            <motion.div variants={fadeUp} className="lg:sticky top-32">
              <div className="headshot-wrap">
                <img
                  src="/images/headshot.jpg"
                  alt="Lute Maekaeka Kazembe"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="headshot-placeholder" />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8 text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
            <motion.p variants={fadeUp}>
              With over 15 years of global leadership experience, Lute Maekaeka Kazembe has shaped narratives, led high-performing multicultural teams, and driven policy and brand transformation across Africa, the Middle East, Asia, and South America. Bringing lived experience from low- and middle-income countries alongside an executive perspective on navigating complex international systems, Lute transforms communications into catalysts for systemic change.
            </motion.p>
            <motion.p variants={fadeUp}>
              From directing global advocacy campaigns at Oxfam International — unifying 30+ affiliates under a single communications architecture — to stewarding a $20M humanitarian portfolio across eight countries at Medair, Lute has consistently operated at the intersection of strategic leadership and field-level urgency. This rare combination produces communications that are both institutionally credible and deeply human.
            </motion.p>

            <motion.blockquote variants={fadeUp} className="my-10 pl-6 border-l-2 border-primary text-3xl md:text-4xl font-serif italic text-foreground leading-snug">
              "The most powerful communications don't just reach audiences — they move institutions."
            </motion.blockquote>

            <motion.p variants={fadeUp}>
              Whether advising C-suite executives, coordinating UN field missions, or launching regional brand campaigns from crisis contexts, Lute brings an unwavering commitment to equity, precision, and results. Open to Executive Director-level roles across international development, humanitarian affairs, and global advocacy.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="group relative p-8 border-[0.5px] border-border overflow-hidden bg-background"
                data-testid={`skill-cell-${idx}`}
              >
                <div className="absolute inset-0 bg-card translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
                <h4 className="relative z-10 text-base font-medium tracking-wide group-hover:text-primary transition-colors duration-300">
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
          className="mb-32"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif mb-12">
            Education
          </motion.h2>
          <div className="flex flex-col divide-y divide-border border-y border-border">
            {education.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col md:flex-row md:items-center justify-between py-8 gap-4"
                data-testid={`education-item-${i}`}
              >
                <div className="flex items-center gap-5">
                  {item.logo && (
                    <div className="w-12 h-12 flex items-center justify-center shrink-0">
                      <img
                        src={item.logo}
                        alt={`${item.institution} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <h4 className="text-xl font-serif">{item.institution}</h4>
                </div>
                <p className="text-muted-foreground text-sm font-medium tracking-wide md:text-right">{item.credential}</p>
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <motion.h3 variants={fadeUp} className="text-xl font-serif text-muted-foreground whitespace-nowrap">
              Experience with
            </motion.h3>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-start md:justify-end gap-8 md:gap-10 items-center">
              {orgs.map((org, i) => (
                org.logo ? (
                  <div key={i} className="h-8 flex items-center opacity-90 hover:opacity-100 transition-opacity duration-300">
                    <img
                      src={org.logo}
                      alt={org.name}
                      className="h-full w-auto max-w-[120px] object-contain"
                    />
                  </div>
                ) : (
                  <span key={i} className="text-lg font-medium text-muted-foreground/60 hover:text-foreground transition-colors duration-300 cursor-default">
                    {org.name}
                  </span>
                )
              ))}
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </Layout>
  );
}
