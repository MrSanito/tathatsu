"use client";

import { motion } from "framer-motion";
import { MessageSquare, Calendar } from "lucide-react";
import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function Hero() {
  const scrollToAppointment = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full pt-32 pb-20 px-6 lg:min-h-[90vh] flex items-center overflow-hidden bg-linear-to-br from-[#E0F7FA]/10 to-light">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            {siteData.heroHeadline}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            {siteData.heroSubheadline}
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAppointment}
              className="bg-primary hover:bg-blue-700 text-white rounded-xl px-6 py-4 font-semibold shadow-lg shadow-blue-500/30 flex items-center gap-2 transition"
            >
              <Calendar size={20} />
              Book Appointment
            </motion.button>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/91${siteData.phone}?text=${encodeURIComponent(siteData.whatsappMessageDetails)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#1EBE55] text-white rounded-xl px-6 py-4 font-semibold shadow-lg shadow-green-500/30 flex items-center gap-2 transition"
            >
              <MessageSquare size={20} />
              Chat on WhatsApp
            </motion.a>
          </div>
        </motion.div>

        {/* Image right side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image 
            src="/hero-image.png" 
            alt="Tathastu Dental Clinic - Professional Care"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
