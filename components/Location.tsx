"use client";

import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { motion } from "framer-motion";

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
                <p className="text-gray-600 leading-relaxed">
                  E 201, Kalpvrukhsh Complex, <br />
                  near Gotri GEB Substation, besides GMERS Medical College, <br />
                  Gotri Road, Vadodara.
                </p>
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  href="https://maps.google.com/?q=Tathastu+Dental+Clinic+Gotri"
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
                <p className="text-gray-600">Monday - Saturday</p>
                <p className="text-dark font-medium">10:00 AM – 8:00 PM</p>
                <p className="text-sm text-gray-500 mt-1">Sunday: Closed / By Appointment</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 text-primary p-3 rounded-xl mt-1">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Call Us</h3>
                <p className="text-gray-600">+91 00000 00000</p>
                <p className="text-sm text-gray-500 mt-1">For immediate assistance</p>
              </div>
            </div>
          </div>

          {/* Map Embed Placeholder */}
          <div className="w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-inner relative group">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-500 p-6 text-center">
              <MapPin size={48} className="mb-4 text-gray-400 group-hover:text-primary transition-colors" />
              <p className="font-medium text-lg text-gray-600">Google Map Placeholder</p>
              <p className="text-sm mt-2">Replace with actual iframe in production.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
