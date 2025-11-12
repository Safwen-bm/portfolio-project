// app/contact/page.jsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen py-16 bg-gradient-to-b from-[#0a0e17] to-[#0b1426]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Contactez-moi
          </h1>
          <p className="text-xl text-gray-400 mt-4">Disponible pour un stage PFE ou collaboration</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.form initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input placeholder="Prénom" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500" />
              <Input placeholder="Nom" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500" />
            </div>
            <Input placeholder="Email" type="email" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500" />
            <Textarea placeholder="Votre message" className="min-h-40 bg-white/5 border-white/10 text-white placeholder:text-gray-500" />
            <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg py-6 rounded-2xl">
              Envoyer
            </Button>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Coordonnées</h3>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-center gap-3"><FiMail /> safwenbenmabrouk@gmail.com</p>
                <p className="flex items-center gap-3"><FiPhone /> +216 55 574 559</p>
                <p className="flex items-center gap-3"><FiMapPin /> Monastir, Tunisie</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;