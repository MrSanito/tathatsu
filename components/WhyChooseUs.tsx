"use client";

import { motion } from "framer-motion";
import { Zap, HeartPulse, MapPin, CreditCard } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "High Precision Technology",
      desc: "Advanced imaging and top-tier instruments.",
      icon: <Zap size={32} />
    },
    {
      title: "Painless Procedures",
      desc: "Comfort-first approach to all treatments.",
      icon: <HeartPulse size={32} />
    },
    {
      title: "On-Site Parking",
      desc: "Hassle-free visits with dedicated parking.",
      icon: <MapPin size={32} />
    },
    {
      title: "Digital Payments Accepted",
      desc: "Easy checkout with multiple payment options.",
      icon: <CreditCard size={32} />
    }
  ];

  return (
    <section className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="container mx-auto max-w-6xl text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-primary to-blue-600 rounded-3xl p-10 md:p-16 text-white overflow-hidden relative shadow-2xl shadow-blue-500/20"
        >
          {/* Background pattern */}
          <div className="absolute top-0 right-0 opacity-10 blur-xl w-64 h-64 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative z-10">Why Choose Tathastu?</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {reasons.map((r, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center"
              >
                <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm mb-4">
                  {r.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{r.title}</h3>
                <p className="text-blue-100 text-sm max-w-[200px] mx-auto">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
