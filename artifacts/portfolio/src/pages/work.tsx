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
    title: "The Clean Water Coalition Initiative",
    role: "Lead Strategist",
    tag: "Environmental Advocacy",
    description: "United 40+ grassroots organizations and policy tanks to pass comprehensive state-level water protection legislation. Managed media relations, earning coverage in top-tier national outlets and shifting public sentiment.",
    outcomes: [
      "Passed landmark state legislation with bipartisan support",
      "Secured 50+ media placements including NYT and Washington Post",
      "Mobilized over 10,000 constituent contacts to legislators"
    ]
  },
  {
    title: "Fair Housing Now",
    role: "Communications Director",
    tag: "Housing Policy",
    description: "Designed a multi-channel advocacy campaign that reframed the housing debate. Produced rapid-response messaging, legislative briefings, and a digital narrative strategy that reached 2M+ residents.",
    outcomes: [
      "Shifted narrative frame from 'property rights' to 'community stability'",
      "Grew digital organizing list by 300% over 6 months",
      "Resulted in $50M state budget allocation for affordable housing"
    ]
  },
  {
    title: "Youth Civic Engagement Project",
    role: "Advisory Board & Campaign Lead",
    tag: "Civic Engagement",
    description: "Launched an initiative to increase voter turnout among underrepresented youth. Built the communication infrastructure that trained 500+ student organizers and resulted in a 15% increase in youth voter registration.",
    outcomes: [
      "Trained 500+ student organizers across 20 campuses",
      "Achieved 15% YoY increase in youth voter registration",
      "Produced award-winning digital video campaign"
    ]
  },
  {
    title: "Tech For Good Coalition",
    role: "Public Affairs Consultant",
    tag: "Digital Rights",
    description: "Guided a coalition of civil rights groups advocating for ethical technology legislation. Coordinated stakeholder meetings, drafted policy memos, and organized a widely-covered press conference.",
    outcomes: [
      "Drafted key language adopted into final committee bill",
      "Organized press conference with 15+ participating lawmakers",
      "Established ongoing advisory relationship with legislative staff"
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
            Work & Campaigns
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-muted-foreground max-w-2xl font-light">
            A selection of campaigns and initiatives focused on narrative shift and policy impact.
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
                <div className="lg:col-span-4 flex flex-col gap-4 sticky top-32">
                  <div className="inline-flex max-w-fit px-3 py-1 bg-card border border-border text-xs uppercase tracking-widest text-primary">
                    {campaign.tag}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif leading-tight">
                    {campaign.title}
                  </h2>
                  <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Role: {campaign.role}
                  </p>
                </div>
                
                <div className="lg:col-span-8 flex flex-col gap-8 bg-card p-8 md:p-12 border border-border">
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
                          <span className="text-primary mt-1.5">•</span>
                          <span className="text-foreground/90">{outcome}</span>
                        </li>
                      ))}
                    </ul>
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
