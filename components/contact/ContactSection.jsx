// components/contact/ContactSection.jsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      }, 3000);

    } catch (err) {
      toast.error("Server error, try again later.");
      setIsSubmitting(false);
    }
  };


  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#0a0e17] via-[#0b1426] to-[#0a0e17] overflow-hidden relative">
      {/* Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-56 h-56 md:w-80 md:h-80 bg-gradient-to-tr from-purple-500/15 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20 pt-16 md:pt-0"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 leading-tight">
            Get In Touch
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Open to full-time roles and freelance projects. Let's build something amazing.
          </p>
        </motion.div>

        {/* 1 COLUMN ON MOBILE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 md:mb-8 text-center">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                {/* First & Last Name — CENTERED */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                  <div className="relative group mx-auto w-full max-w-xs sm:max-w-none">
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 text-sm md:text-base focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300 w-full"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 opacity-0 group-focus-within:opacity-20 blur-xl -z-10"
                      initial={false}
                      animate={{ scale: formData.firstName ? 1.05 : 1 }}
                    />
                  </div>
                  <div className="relative group mx-auto w-full max-w-xs sm:max-w-none">
                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 text-sm md:text-base focus:border-purple-500 focus:ring-purple-500 transition-all duration-300 w-full"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-focus-within:opacity-20 blur-xl -z-10"
                      initial={false}
                      animate={{ scale: formData.lastName ? 1.05 : 1 }}
                    />
                  </div>
                </div>

                {/* Email — CENTERED */}
                <div className="relative group mx-auto w-full max-w-md">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 text-sm md:text-base focus:border-pink-500 focus:ring-pink-500 transition-all duration-300 w-full"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 opacity-0 group-focus-within:opacity-20 blur-xl -z-10"
                    initial={false}
                    animate={{ scale: formData.email ? 1.05 : 1 }}
                  />
                </div>

                {/* Message */}
                <div className="relative group">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-40 md:min-h-48 bg-white/10 border-white/20 text-white placeholder:text-gray-500 text-sm md:text-base focus:border-rose-500 focus:ring-rose-500 transition-all duration-300 resize-none w-full"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 opacity-0 group-focus-within:opacity-20 blur-xl -z-10"
                    initial={false}
                    animate={{ scale: formData.message ? 1.05 : 1 }}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`
                    w-full max-w-md mx-auto text-base md:text-lg py-5 md:py-7 rounded-2xl font-bold transition-all duration-500 transform
                    ${isSubmitted 
                      ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700" 
                      : "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                    }
                    ${isSubmitting ? "animate-pulse" : "hover:scale-105"}
                    shadow-2xl hover:shadow-cyan-500/50
                  `}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <motion.div
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center justify-center gap-3">
                      <FiCheckCircle className="text-xl" />
                      Sent!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      <FiSend className="text-xl" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Contact Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-6 md:mb-8">
                Contact Information
              </h3>
              <div className="space-y-5 md:space-y-6 text-gray-300 text-sm md:text-base">
                <motion.a
                  href="mailto:safwenbenmabrouk@gmail.com"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2.5 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                    <FiMail className="text-lg md:text-xl" />
                  </div>
                  <span className="group-hover:text-cyan-400 transition-colors break-all">safwenbenmabrouk@gmail.com</span>
                </motion.a>

                <motion.a
                  href="tel:+21655574559"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2.5 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl group-hover:scale-110 transition-transform">
                    <FiPhone className="text-lg md:text-xl" />
                  </div>
                  <span className="group-hover:text-purple-400 transition-colors">+216 55 574 559</span>
                </motion.a>

                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2.5 bg-gradient-to-br from-rose-500 to-orange-600 rounded-xl group-hover:scale-110 transition-transform">
                    <FiMapPin className="text-lg md:text-xl" />
                  </div>
                  <span className="group-hover:text-rose-400 transition-colors">Monastir, Tunisia</span>
                </motion.div>
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 text-center text-sm md:text-base"
            >
              <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Open to Opportunities</h4>
              <p className="text-gray-300 leading-relaxed">
                Open to <span className="text-cyan-400 font-semibold">full-time roles</span> and
                <span className="text-purple-400 font-semibold"> freelance collaborations</span>.
              </p>
              <div className="mt-4 md:mt-6 flex justify-center gap-1.5 md:gap-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-2.5 h-2.5 md:w-3 md:h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FINAL CTA — ONE LINE + CENTERED */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 md:mt-32"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8">
            Let's Build the Future Together
          </h2>
          <div className="flex justify-center">
            <Button className="
              bg-gradient-to-r from-purple-600 to-pink-600 
              hover:from-purple-700 hover:to-pink-700 
              text-white 
              text-sm md:text-xl 
              px-6 md:px-16 
              py-3 md:py-9 
              rounded-full 
              shadow-2xl hover:shadow-purple-500/50 
              transform hover:scale-105 
              transition-all
            ">
              Start a Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
