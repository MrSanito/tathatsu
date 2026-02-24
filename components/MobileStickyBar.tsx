"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Calendar } from "lucide-react";

export default function MobileStickyBar() {
  const scrollToAppointment = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1 }}
      className="md:hidden fixed bottom-0 w-full bg-white shadow-[0_-4px_15px_rgba(0,0,0,0.1)] z-40 border-t border-gray-100 p-2 pb-safe flex justify-between gap-2"
    >
      <a 
        href="tel:+918200872831" 
        className="flex-1 flex flex-col items-center justify-center py-2 text-primary font-medium text-xs rounded-xl bg-blue-50 active:bg-blue-100 transition-colors"
      >
        <Phone size={20} className="mb-1" />
        Call
      </a>
      
      <a 
        href="https://wa.me/918200872831?text=Hello%20Tathastu%20Dental%20Clinic,%20I%20want%20to%20book%20an%20appointment."
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-2 text-[#25D366] font-medium text-xs rounded-xl bg-green-50 active:bg-green-100 transition-colors"
      >
        <MessageSquare size={20} className="mb-1" />
        WhatsApp
      </a>

      <button 
        onClick={scrollToAppointment}
        className="flex-1 flex flex-col items-center justify-center py-2 text-white font-medium text-xs rounded-xl bg-primary active:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
      >
        <Calendar size={20} className="mb-1" />
        Book
      </button>
    </motion.div>
  );
}
