"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message
    const msg = `Hello ${siteData.clinicName} Clinic,\n\nI would like to book an appointment.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service || "General"}\n*Date:* ${formData.date}\n*Time:* ${formData.time}\n*Message:* ${formData.message || "N/A"}`;
    
    const whatsappLink = `https://wa.me/91${siteData.phone}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-light" id="appointment">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row"
        >
          {/* Left panel - Info */}
          <div className="bg-primary text-white p-10 md:w-[40%] flex flex-col justify-center bg-[url('/pattern.svg')] bg-cover bg-blend-soft-light">
            <h2 className="text-3xl font-bold mb-4">Book Your Visit Today</h2>
            <p className="text-blue-100 mb-8">
              Skip the queue. Select your preferred time and get instant confirmation via WhatsApp.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-2 rounded-lg">🗓️</div>
                <p className="font-medium">{siteData.workingDays}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-2 rounded-lg">⏰</div>
                <p className="font-medium">{siteData.workingHours}</p>
              </div>
            </div>
          </div>

          {/* Right panel - Form */}
          <div className="p-10 md:w-[60%]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input required name="name" onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input required type="tel" name="phone" onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" placeholder={siteData.displayPhone} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                <select name="service" onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition bg-white">
                  <option value="">Select a service</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Root Canal">Root Canal</option>
                  <option value="Braces">Braces & Orthodontics</option>
                  <option value="Cosmetic">Cosmetic Dentistry</option>
                  <option value="General">General Consultation</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input required type="date" name="date" onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                  <select required name="time" onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition bg-white">
                    <option value="">Select slot</option>
                    <option value="Morning">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon">Afternoon (2 PM - 5 PM)</option>
                    <option value="Evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                <textarea rows={3} name="message" onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition resize-none" placeholder="Any specific issue you'd like to mention..."></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 transition-all mt-4"
              >
                Send Request via WhatsApp
                <Send size={18} />
              </motion.button>
              <p className="text-center text-sm text-gray-400 mt-2">No advance payment required. Chat safely.</p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
