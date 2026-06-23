import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

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
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-primary-foreground">
        <div className="font-serif text-xl tracking-tight">AR.</div>
        <div className="flex gap-6 text-sm font-medium tracking-wide">
          <a href="#work" className="hover:opacity-70 transition-opacity" data-testid="link-nav-work">Work</a>
          <a href="#about" className="hover:opacity-70 transition-opacity" data-testid="link-nav-about">About</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity" data-testid="link-nav-contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 max-w-7xl mx-auto">
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
          <motion.div variants={fadeUp}>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 border-b border-foreground pb-1 text-lg hover:text-primary hover:border-primary transition-colors duration-300"
              data-testid="link-hero-contact"
            >
              Let's connect <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-32 px-6 md:px-12 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row gap-12 md:gap-24"
          >
            <div className="md:w-1/3">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-serif mb-6 sticky top-32">
                Featured <br/> Campaigns
              </motion.h2>
            </div>
            
            <div className="md:w-2/3 flex flex-col gap-20">
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
                },
                {
                  title: "Youth Civic Engagement Project",
                  role: "Advisory Board & Campaign Lead",
                  description: "Launched an initiative to increase voter turnout among underrepresented youth. Built the communication infrastructure that trained 500+ student organizers and resulted in a 15% increase in youth voter registration."
                }
              ].map((work, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUp} 
                  className="group cursor-default"
                  data-testid={`card-work-${i}`}
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
                  <div className="h-px w-full bg-border mt-12 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-20">
            <h2 className="text-3xl md:text-5xl font-serif">Core Expertise</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {[
              "Strategic Communications",
              "Public Affairs",
              "Media Relations",
              "Coalition Building",
              "Policy Analysis",
              "Crisis Management",
              "Narrative Strategy",
              "Grassroots Organizing",
              "Stakeholder Engagement"
            ].map((skill, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                className="border-t border-border pt-6"
                data-testid={`item-skill-${i}`}
              >
                <h4 className="text-xl font-medium tracking-wide">{skill}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Organizations */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-border overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row justify-between items-center gap-12"
        >
          <motion.h3 variants={fadeUp} className="text-xl font-serif text-muted-foreground whitespace-nowrap">Trusted by</motion.h3>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center md:justify-end gap-12 text-lg font-medium text-muted-foreground/60">
            {["Global Policy Institute", "Center for Civic Action", "National Housing Trust", "Urban Future Coalition"].map((org, i) => (
              <span key={i} className="hover:text-foreground transition-colors duration-300 cursor-default">{org}</span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Press & Media */}
      <section className="py-32 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-serif text-background">
                In The News
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted text-lg max-w-md">
                Selected op-eds, interviews, and features discussing policy shifts and campaign strategies.
              </motion.p>
            </div>

            <div className="flex flex-col">
              {[
                { pub: "The National Times", title: "Why Grassroots Organizing is Outpacing Traditional Lobbying", date: "Oct 2023" },
                { pub: "Policy Weekly", title: "Reframing the Climate Debate for Bipartisan Appeal", date: "Aug 2023" },
                { pub: "Civic Action Podcast", title: "Interview: Building Coalitions that Last", date: "May 2023" },
              ].map((article, i) => (
                <motion.a 
                  href="#"
                  key={i} 
                  variants={fadeUp}
                  className="flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-background/20 group hover:border-primary transition-colors duration-300"
                  data-testid={`link-press-${i}`}
                >
                  <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:items-center">
                    <span className="text-primary font-medium tracking-widest uppercase text-sm w-48 shrink-0">
                      {article.pub}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-serif group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h4>
                  </div>
                  <span className="text-muted mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                    Read <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto min-h-[60vh] flex flex-col justify-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center flex flex-col items-center"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-7xl font-serif mb-8 max-w-3xl">
            Ready to shape the next narrative?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-muted-foreground mb-12 max-w-2xl">
            Currently open to new opportunities for leadership roles in advocacy, communications, and public affairs.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <a 
              href="mailto:hello@example.com" 
              className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 rounded-none hover:bg-primary transition-colors duration-300 text-lg font-medium"
              data-testid="btn-contact-email"
            >
              <Mail className="w-5 h-5" /> Get in touch
            </a>
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-4 border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                data-testid="link-social-linkedin"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-4 border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                data-testid="link-social-twitter"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground max-w-7xl mx-auto w-full">
        <p>&copy; {new Date().getFullYear()} Alexandra Rivera.</p>
        <p>Advocacy & Communications</p>
      </footer>
    </div>
  );
}
