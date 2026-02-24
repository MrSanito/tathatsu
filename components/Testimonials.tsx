"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul M.",
      text: "Got my root canal done here. Dr. Avneesh was extremely professional and the procedure was completely painless. Highly recommend!",
      rating: 5
    },
    {
      name: "Priya S.",
      text: "Very clean clinic. They explained the entire implant process patiently. The result is just perfect and looks absolutely natural.",
      rating: 5
    },
    {
      name: "Amit Patel",
      text: "Affordable and transparent pricing. Modern equipment and no long waiting times. Best dental clinic in the Gotri area.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6 bg-white" id="testimonials">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Loved by Our Patients</h2>
          <div className="flex justify-center items-center gap-2 text-gray-600">
            <span className="font-semibold text-dark text-xl">4.9/5</span> 
            <div className="flex text-accent">
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
            </div>
            <span>Google Reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-light p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex text-accent mb-4">
                {[...Array(r.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} className="mr-1" />)}
              </div>
              <p className="text-gray-600 italic mb-6">"{r.text}"</p>
              <div className="font-bold text-dark">{r.name}</div>
              <div className="text-sm text-gray-400">Verified Patient</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
