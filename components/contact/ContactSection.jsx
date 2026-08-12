// components/contact/ContactSection.jsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AmbientGlow from "@/components/AmbientGlow";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "safwenbenmabrouk@gmail.com",
    href: "mailto:safwenbenmabrouk@gmail.com",
    gradient: "linear-gradient(135deg, #3B82F6, #2563EB)",
    solid: "#2563EB",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+216 55 574 559",
    href: "tel:+21655574559",
    gradient: "linear-gradient(135deg, #14B8A6, #0D9488)",
    solid: "#0D9488",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Monastir, Tunisia",
    href: null,
    gradient: "linear-gradient(135deg, #A855F7, #7C3AED)",
    solid: "#7C3AED",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Something went wrong.");
        setIsSubmitting(false);
        return;
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Message sent successfully!");
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      }, 3000);
    } catch (err) {
      toast.error("Server error, try again later.");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative isolate overflow-hidden py-20 md:py-28 border-t border-line">
      <AmbientGlow variant="right" />
      <div className="relative z-10">
      <div className="text-center mb-14">
        <h2 className="h2 text-ink">Get In Touch</h2>
        <p className="mt-3 text-muted max-w-xl mx-auto">
          Open to full-time roles and freelance projects. Let's build something.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-line rounded-2xl p-6 md:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
        >
          <h3 className="text-lg font-bold text-ink mb-1">Send a Message</h3>
          <p className="text-sm text-muted mb-6">I'll get back to you within a day or two.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full h-12 bg-subtle border-line text-ink placeholder:text-muted/70 focus:border-accent focus:ring-accent rounded-xl"
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full h-12 bg-subtle border-line text-ink placeholder:text-muted/70 focus:border-accent focus:ring-accent rounded-xl"
              />
            </div>

            <div className="relative">
              <FiMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted/70 text-base" />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 pl-11 bg-subtle border-line text-ink placeholder:text-muted/70 focus:border-accent focus:ring-accent rounded-xl"
              />
            </div>

            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full min-h-36 bg-subtle border-line text-ink placeholder:text-muted/70 focus:border-accent focus:ring-accent resize-none rounded-xl"
            />

            <Button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full py-6 rounded-xl font-semibold transition-colors ${
                isSubmitted ? "bg-emerald-600 hover:bg-emerald-700" : "bg-ink hover:bg-ink/90"
              } text-white`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.div
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  Sending...
                </span>
              ) : isSubmitted ? (
                <span className="flex items-center justify-center gap-2"><FiCheckCircle /> Sent!</span>
              ) : (
                <span className="flex items-center justify-center gap-2"><FiSend /> Send Message</span>
              )}
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <div className="bg-white border border-line rounded-2xl p-6 md:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
            <h3 className="text-lg font-bold text-ink mb-6">Contact Information</h3>
            <div className="space-y-2 text-sm">
              {contactInfo.map(({ icon: Icon, label, value, href, gradient, solid }) => {
                const content = (
                  <div
                    className="group flex items-center gap-4 rounded-xl p-3 -mx-3 transition-colors duration-300 hover:bg-[var(--row-tint)]"
                    style={{ "--row-tint": `${solid}0D`, "--icon-gradient": gradient }}
                  >
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-subtle flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:bg-[image:var(--icon-gradient)]">
                      <Icon className="text-ink group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted uppercase tracking-wide">{label}</p>
                      <p className="text-ink font-medium break-all">{value}</p>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href}>{content}</a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden bg-accent-light border border-accent/20 rounded-2xl p-6 md:p-8 text-center">
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for new projects
              </span>
              <h4 className="font-bold text-ink mb-2">Open to Opportunities</h4>
              <p className="text-sm text-muted">
                Open to <span className="text-ink font-medium">full-time roles</span> and{" "}
                <span className="text-ink font-medium">freelance collaborations</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default ContactSection;