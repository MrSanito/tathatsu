"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop", alt: "Clinic Interior" },
    { src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop", alt: "Treatment Room" },
    { src: "https://images.unsplash.com/photo-1598256989800-fea5f062a4ae?w=800&auto=format&fit=crop", alt: "Advanced Equipment" },
    { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop", alt: "Happy Smiles" },
  ];

  return (
    <section className="py-20 px-6 bg-light border-y border-gray-100" id="gallery">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-dark mb-2">Our Clinic</h2>
            <p className="text-gray-600">A look inside our state-of-the-art facility.</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-primary font-medium bg-blue-50 px-4 py-2 rounded-lg"
          >
            <Camera size={18} /> View All Photos
          </motion.button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-sm bg-blue-100/50 flex items-center justify-center cursor-pointer group"
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition duration-300 z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
