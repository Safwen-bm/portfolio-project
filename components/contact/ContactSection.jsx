// components/contact/ContactSection.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import { toast } from "sonner";
import { SITE } from "@/lib/site";

const contactInfo = [
  { icon: FiMail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: FiPhone, label: "Phone", value: SITE.phone, href: SITE.phoneHref },
  { icon: FiMapPin, label: "Location", value: SITE.location, href: null },
];

// `website` is a hidden honeypot field: real visitors never see it, spam bots fill it in
const EMPTY_FORM = { firstName: "", lastName: "", email: "", message: "", website: "" };

const ContactSection = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const resetTimer = useRef(null);

  // never leave a pending timer behind when the visitor navigates away
  useEffect(() => () => clearTimeout(resetTimer.current), []);

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
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        toast.error(data.error || "Something went wrong.");
        return;
      }
      setIsSubmitted(true);
      toast.success("Message sent successfully!");
      resetTimer.current = setTimeout(() => {
        setIsSubmitted(false);
        setFormData(EMPTY_FORM);
      }, 3000);
    } catch (err) {
      toast.error("Server error, try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-subtle py-20 md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-dots fade-radial absolute inset-0" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading
          index="08"
          title="Get In Touch"
          subtitle="Open to full-time roles and freelance projects. Let's build something."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-line bg-surface shadow-lift lg:grid-cols-5"
        >
          {/* FORM */}
          <div className="order-1 p-6 md:p-10 lg:order-2 lg:col-span-3">
            <h3 className="font-display text-2xl font-semibold text-ink">Send a Message</h3>
            <p className="mb-6 mt-1 text-sm text-muted">I'll get back to you within a day or two.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                  name="firstName"
                  placeholder="First Name"
                  aria-label="First Name"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <FiMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-muted" />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-11"
                />
              </div>

              <Textarea
                name="message"
                placeholder="Your Message"
                aria-label="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-36 resize-none"
              />

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                variant={isSubmitted ? "dark" : "default"}
                className="h-14 w-full"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <FiCheckCircle /> Sent!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <FiSend /> Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* INFO — themed door panel (zellige stars kept: same motif as the hero + services) */}
          <div className="relative order-2 isolate overflow-hidden bg-gradient-to-br from-accent to-accent-hover p-6 text-onaccent md:p-10 lg:order-1 lg:col-span-2">
            <div className="fade-diagonal pointer-events-none absolute inset-0 -z-10">
              <div
                className="zellige-mask absolute inset-0"
                style={{ "--zellige-color": "var(--c-onaccent)", "--zellige-alpha": 0.2 }}
              />
            </div>
            <div className="pointer-events-none absolute -bottom-24 -right-24 -z-10 h-72 w-72 bg-[radial-gradient(closest-side,rgb(var(--c-glow)/0.45),transparent)]" />

            <div className="relative flex h-full flex-col">
              <h3 className="mb-6 font-display text-2xl font-semibold">Contact Information</h3>

              <div className="space-y-1 text-sm">
                {contactInfo.map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <div className="group -mx-3 flex items-center gap-4 rounded-2xl p-3 transition-colors duration-200 hover:bg-onaccent/10">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-onaccent/15 text-onaccent">
                        <Icon />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-xs uppercase tracking-wide text-onaccent/70">
                          {label}
                        </p>
                        <p className="break-all font-semibold text-onaccent">{value}</p>
                      </div>
                    </div>
                  );
                  return href ? (
                    <a key={label} href={href}>
                      {content}
                    </a>
                  ) : (
                    <div key={label}>{content}</div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-2xl border border-onaccent/25 bg-onaccent/10 p-5 text-center lg:mt-auto">
                <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1 font-mono text-xs font-bold text-ink">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  Available for new projects
                </span>
                <h4 className="mb-2 font-display text-lg font-semibold">Open to Opportunities</h4>
                <p className="text-sm text-onaccent/85">
                  Open to <span className="font-bold text-onaccent">full-time roles</span> and{" "}
                  <span className="font-bold text-onaccent">freelance collaborations</span>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;