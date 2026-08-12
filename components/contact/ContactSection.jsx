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
          className="bg-white border border-line rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-lg font-bold text-ink mb-6">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-subtle border-line text-ink placeholder:text-muted/70 focus:border-accent focus:ring-accent"
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-subtle border-line text-ink placeholder:text-muted/70 focus:border-accent focus:ring-accent"
              />
            </div>

            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="bg-subtle border-line text-ink placeholder:text-muted/70 focus:border-accent focus:ring-accent"
            />

            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="min-h-36 bg-subtle border-line text-ink placeholder:text-muted/70 focus:border-accent focus:ring-accent resize-none"
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
          <div className="bg-white border border-line rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-ink mb-6">Contact Information</h3>
            <div className="space-y-4 text-sm">
              <a href="mailto:safwenbenmabrouk@gmail.com" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-subtle flex items-center justify-center group-hover:bg-accent-light transition-colors">
                  <FiMail className="text-ink group-hover:text-accent transition-colors" />
                </div>
                <span className="text-muted group-hover:text-ink transition-colors break-all">safwenbenmabrouk@gmail.com</span>
              </a>
              <a href="tel:+21655574559" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-subtle flex items-center justify-center group-hover:bg-accent-light transition-colors">
                  <FiPhone className="text-ink group-hover:text-accent transition-colors" />
                </div>
                <span className="text-muted group-hover:text-ink transition-colors">+216 55 574 559</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-subtle flex items-center justify-center">
                  <FiMapPin className="text-ink" />
                </div>
                <span className="text-muted">Monastir, Tunisia</span>
              </div>
            </div>
          </div>

          <div className="bg-accent-light border border-accent/20 rounded-2xl p-6 md:p-8 text-center">
            <h4 className="font-bold text-ink mb-2">Open to Opportunities</h4>
            <p className="text-sm text-muted">
              Open to <span className="text-ink font-medium">full-time roles</span> and{" "}
              <span className="text-ink font-medium">freelance collaborations</span>.
            </p>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default ContactSection;