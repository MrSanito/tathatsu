"use client";

import { motion } from "framer-motion";
import { BadgePlus, Activity, Smile, Sparkles, Layers, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Dental Implants",
      desc: "Permanent, natural-looking tooth replacements for a full smile.",
      icon: <BadgePlus size={40} className="text-accent" />
    },
    {
      title: "Root Canal Treatment",
      desc: "Painless procedure to save infected or damaged teeth.",
      icon: <Activity size={40} className="text-primary" />
    },
    {
      title: "Braces & Orthodontics",
      desc: "Straighten your teeth and improve your bite effectively.",
      icon: <Smile size={40} className="text-secondary" />
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Veneers, teeth whitening, and complete smile makeovers.",
      icon: <Sparkles size={40} className="text-primary" />
    },
    {
      title: "Prosthodontics",
      desc: "Crowns, bridges, and dentures for restorative care.",
      icon: <Layers size={40} className="text-accent" />
    },
    {
      title: "General Dentistry",
      desc: "Routine checkups, cleanings, and preventative care.",
      icon: <CheckCircle size={40} className="text-secondary" />
    }
  ];

  return (
    <section className="py-20 px-6 bg-light" id="services">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Premium Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental care tailored to your needs. We combine expertise with advanced technology for the best outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-50 cursor-pointer group"
            >
              <div className="bg-blue-50/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              
              <div className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <span className="text-lg">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
