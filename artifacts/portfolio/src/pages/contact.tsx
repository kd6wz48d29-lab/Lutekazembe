import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Mail } from "lucide-react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
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

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Form data:", data);
    setIsSuccess(true);
  };

  return (
    <Layout>
      <motion.div {...pageTransition} className="flex-grow flex flex-col py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center flex flex-col items-center mb-24"
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 max-w-4xl">
            Let's shape the next narrative.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-muted-foreground max-w-2xl font-light">
            Open to leadership roles in advocacy, communications, and public affairs.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.a 
              href="mailto:hello@example.com"
              variants={fadeUp}
              className="flex items-center justify-between p-8 border border-border bg-card hover:border-primary group transition-colors duration-300"
              data-testid="link-contact-email"
            >
              <div className="flex items-center gap-6">
                <Mail className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-xl font-medium tracking-wide">Email</span>
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </motion.a>
            
            <motion.a 
              href="https://linkedin.com" target="_blank" rel="noreferrer"
              variants={fadeUp}
              className="flex items-center justify-between p-8 border border-border bg-card hover:border-primary group transition-colors duration-300"
              data-testid="link-contact-linkedin"
            >
              <div className="flex items-center gap-6">
                <FaLinkedin className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-xl font-medium tracking-wide">LinkedIn</span>
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </motion.a>
            
            <motion.a 
              href="https://twitter.com" target="_blank" rel="noreferrer"
              variants={fadeUp}
              className="flex items-center justify-between p-8 border border-border bg-card hover:border-primary group transition-colors duration-300"
              data-testid="link-contact-twitter"
            >
              <div className="flex items-center gap-6">
                <FaXTwitter className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-xl font-medium tracking-wide">Twitter / X</span>
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-card border border-border p-8 md:p-12"
          >
            <h3 className="text-3xl font-serif mb-8">Send a message</h3>
            
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center"
                  data-testid="contact-success"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-serif mb-4">Message Received</h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-sm font-medium text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-6"
                  data-testid="contact-form"
                >
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Name</label>
                    <input 
                      id="name"
                      type="text" 
                      {...register("name")}
                      className={`bg-background border ${errors.name ? 'border-destructive' : 'border-border'} p-4 focus:outline-none focus:border-primary transition-colors`}
                      data-testid="input-contact-name"
                    />
                    {errors.name && <span className="text-sm text-destructive">{errors.name.message}</span>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Email</label>
                    <input 
                      id="email"
                      type="email" 
                      {...register("email")}
                      className={`bg-background border ${errors.email ? 'border-destructive' : 'border-border'} p-4 focus:outline-none focus:border-primary transition-colors`}
                      data-testid="input-contact-email"
                    />
                    {errors.email && <span className="text-sm text-destructive">{errors.email.message}</span>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Message</label>
                    <textarea 
                      id="message"
                      rows={5}
                      {...register("message")}
                      className={`bg-background border ${errors.message ? 'border-destructive' : 'border-border'} p-4 focus:outline-none focus:border-primary transition-colors resize-none`}
                      data-testid="input-contact-message"
                    />
                    {errors.message && <span className="text-sm text-destructive">{errors.message.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-foreground text-background py-4 px-8 font-medium text-lg hover:bg-primary transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                    data-testid="btn-contact-submit"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
}
