import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const campaigns = [
  {
    title: "Oxfam International",
    subtitle: "Global Advocacy & Brand Transformation",
    role: "Deputy Director, Advocacy, Campaigns & Engagement / Head of Brand & Communications",
    period: "Feb 2023 – Aug 2025",
    tag: "Global Advocacy",
    description: "Directed global communications strategy across 30+ country affiliates, protecting trademark compliance and engineering data-driven storytelling frameworks that transformed donor confidence and organizational coherence.",
    outcomes: [
      "Unified 30+ global affiliates under a single shared communications engine",
      "Boosted organizational decision-making efficiency by 50% through systems redesign",
      "Engineered data-driven storytelling frameworks enhancing donor confidence and retention",
      "Protected and enforced global trademark compliance across all affiliate markets"
    ]
  },
  {
    title: "Medair",
    subtitle: "Middle East Humanitarian Portfolio",
    role: "Regional Communications Manager, Middle East",
    period: "Sep 2021 – Dec 2022",
    tag: "Humanitarian Affairs",
    description: "Managed 11 direct reports across 8 countries, stewarding a $20M communications and engagement portfolio. Coordinated high-level UN and media field missions to maximize stakeholder trust in complex crisis environments.",
    outcomes: [
      "Stewarded a $20M humanitarian communications portfolio across 8 countries",
      "Managed and developed a team of 11 direct reports across the region",
      "Produced award-winning campaigns driving a 60% increase in regional brand visibility",
      "Coordinated UN and international media field missions in active crisis contexts"
    ]
  },
  {
    title: "Japan Tobacco International",
    subtitle: "Corporate & ESG Communications",
    role: "Corporate Communications Manager, Southern Africa",
    period: "Jul 2019 – Dec 2020",
    tag: "Corporate Communications",
    description: "Spearheaded regional ILO-aligned campaigns that drove a 60% surge in digital visibility. Oversaw a $2M sustainable social enterprise fund, aligning corporate ESG commitments with community impact and brand credibility.",
    outcomes: [
      "Drove a 60% surge in digital visibility through targeted ILO-aligned campaigns",
      "Oversaw a $2M sustainable social enterprise fund with measurable community outcomes",
      "Aligned corporate ESG strategy with Southern African regulatory and reputational standards",
      "Strengthened stakeholder relationships across government, civil society, and media"
    ]
  },
  {
    title: "Plan International Zambia",
    subtitle: "Country Advocacy & Fundraising",
    role: "Country Communications Manager",
    period: "Sep 2010 – Sep 2013",
    tag: "Development & Fundraising",
    description: "Achieved a 200% increase in national visibility and generated over $500K in 6 months through international fundraising broadcast content. Built the communications infrastructure that positioned Plan International as a leading voice in Zambian child rights advocacy.",
    outcomes: [
      "Generated over $500K in international fundraising revenue within 6 months",
      "Achieved a 200% increase in national organizational visibility",
      "Produced fundraising broadcast content distributed across international donor networks",
      "Established the communications infrastructure for long-term country advocacy presence"
    ]
  }
];

const allTags = ["All", ...Array.from(new Set(campaigns.map(c => c.tag)))];

export default function Work() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredCampaigns = campaigns.filter(c => activeTag === "All" || c.tag === activeTag);

  return (
    <Layout>
      <motion.div {...pageTransition} className="flex-grow flex flex-col py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="mb-16"
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif mb-6">
            Work & Experience
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-muted-foreground max-w-2xl font-light">
            A record of executive-level communications and advocacy leadership across international development, humanitarian affairs, and global advocacy.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-16 border-b border-border pb-6"
        >
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                activeTag === tag
                  ? "bg-foreground text-background"
                  : "bg-transparent text-foreground hover:bg-muted"
              }`}
              data-testid={`filter-btn-${tag.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <div className="flex flex-col gap-24">
          <AnimatePresence mode="popLayout">
            {filteredCampaigns.map((campaign, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={campaign.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
                data-testid={`work-card-${idx}`}
              >
                <div className="lg:col-span-4 flex flex-col gap-4 lg:sticky top-32">
                  <div className="inline-flex max-w-fit px-3 py-1 bg-card border border-border text-xs uppercase tracking-widest text-primary">
                    {campaign.tag}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif leading-tight">
                    {campaign.title}
                  </h2>
                  <p className="text-base font-serif italic text-muted-foreground">
                    {campaign.subtitle}
                  </p>
                  <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    {campaign.role}
                  </p>
                  <p className="text-sm text-muted-foreground/70 tracking-wide">
                    {campaign.period}
                  </p>
                </div>

                <div className="lg:col-span-8 flex flex-col gap-8 bg-card border border-border overflow-hidden">
                  <div className="work-img-wrap">
                    <img
                      src={`/images/campaign-${idx + 1}.jpg`}
                      alt={`${campaign.title} campaign image`}
                      onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.background = 'hsl(40 20% 90%)'; (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col gap-8">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">
                    {campaign.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                      Key Outcomes
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {campaign.outcomes.map((outcome, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="text-primary mt-1.5 shrink-0">•</span>
                          <span className="text-foreground/90">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </Layout>
  );
}
