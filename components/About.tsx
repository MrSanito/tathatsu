"use client";

import { motion } from "framer-motion";
import { Stethoscope, HeartHandshake, ShieldCheck } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Stethoscope size={32} className="text-primary mb-4" />,
      title: "Modern Equipment",
      desc: "Latest digital technology for precision.",
    },
    {
      icon: <HeartHandshake size={32} className="text-secondary mb-4" />,
      title: "Comfortable Treatment",
      desc: "Painless and stress-free care.",
    },
    {
      icon: <ShieldCheck size={32} className="text-accent mb-4" />,
      title: "Affordable Care",
      desc: "Premium quality options for every budget.",
    }
  ];

  return (
    <section className="py-20 px-6 bg-white" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Expert Care by <span className="text-primary">Dr. Avneesh Saxena</span> & Team
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Tathastu Dental Clinic and Implant Center in Gotri, Vadodara provides comprehensive dental care focusing on tooth preservation, modern technology, and patient comfort.
            </p>
            <p className="text-gray-500 mb-8">
              We understand that visiting the dentist can be daunting. That&apos;s why our team is dedicated to providing a comfortable, painless, and transparent experience from the moment you walk through our doors.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {cards.map((card, i) => (
              <motion.div 
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-light p-6 rounded-2xl border border-gray-100 ${i === 2 ? 'md:col-span-2' : ''}`}
              >
                {card.icon}
                <h3 className="text-xl font-bold text-dark mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
