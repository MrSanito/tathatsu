"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export default function Gallery() {
  const images = [
    { src: "/placeholder.jpg", alt: "Clinic Interior" },
    { src: "/placeholder.jpg", alt: "Treatment Room" },
    { src: "/placeholder.jpg", alt: "Advanced Equipment" },
    { src: "/placeholder.jpg", alt: "Happy Smiles" },
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
              {/* Replace with actual Next Image when assets are ready */}
              <div className="text-blue-400 font-medium text-center p-4">
                {img.alt}
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
