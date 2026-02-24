"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/918200872831?text=Hello%20Tathastu%20Dental%20Clinic,%20I%20want%20to%20book%20an%20appointment."
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-24 md:bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center animate-bounce hover:animate-none group"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-dark text-sm px-3 py-1.5 rounded-lg shadow-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat With Us
      </span>
    </motion.a>
  );
}
