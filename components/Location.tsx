"use client";

import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Location() {
  return (
    <section className="py-20 px-6 bg-white" id="location">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Visit Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conveniently located in Gotri with dedicated parking for a stress-free experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-light p-4 md:p-8 rounded-3xl shadow-sm border border-gray-100">
          
          {/* Contact Details */}
          <div className="space-y-8 p-4">
            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 text-primary p-3 rounded-xl mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Location</h3>
                <p className="text-gray-600 leading-relaxed max-w-[300px]">
                  {siteData.address}
                </p>
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  href={siteData.googleMapsLink}
                  target="_blank"
                  className="mt-4 inline-flex items-center gap-2 text-primary font-medium bg-blue-50 px-4 py-2 rounded-lg"
                >
                  <Navigation size={18} /> Get Directions
                </motion.a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 text-primary p-3 rounded-xl mt-1">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Hours</h3>
                <p className="text-gray-600">{siteData.workingDays}</p>
                <p className="text-dark font-medium">{siteData.workingHours}</p>
                <p className="text-sm text-gray-500 mt-1">{siteData.weekendHours}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 text-primary p-3 rounded-xl mt-1">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Call Us</h3>
                <p className="text-gray-600">{siteData.displayPhone}</p>
                <p className="text-sm text-gray-500 mt-1">For immediate assistance</p>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="w-full h-[350px] md:h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-inner relative">
            <iframe 
              src={siteData.googleMapsEmbedUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
