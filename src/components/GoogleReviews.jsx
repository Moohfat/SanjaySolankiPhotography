import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Amit Sharma",
      text: "Absolutely amazing experience! The photos captured every emotion beautifully.",
      rating: 5,
    },
    {
      name: "Priya Mehta",
      text: "Professional, creative, and punctual — truly the best photographer in Udaipur!",
      rating: 5,
    },
    {
      name: "Rohit Singh",
      text: "They made our pre-wedding shoot so comfortable and magical. Highly recommend!",
      rating: 4,
    },
    {
      name: "Sneha Patel",
      text: "Beautiful shots and a very friendly team. The editing was top-notch.",
      rating: 5,
    },
    {
      name: "Vikas Yadav",
      text: "Loved their cinematic touch and storytelling approach. Great work!",
      rating: 5,
    },
    {
      name: "Neha Jain",
      text: "They captured our wedding day perfectly. Couldn’t ask for better!",
      rating: 5,
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-[Cinzel] font-bold text-center mb-12">
        What Our Clients Say
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((rev, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-[#1a0000] border border-red-700/40 rounded-xl p-6 shadow-[0_0_30px_rgba(255,0,0,0.2)] hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] transition-all duration-300"
          >
            <p className="text-gray-200 italic mb-4">“{rev.text}”</p>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-amber-500">{rev.name}</span>
              <div className="flex">
                {[...Array(rev.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={18}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://www.google.com/search?q=sanjaysolankiphotography&oq=sanjaysolankiphotography&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgkIAhAAGA0YgAQyCggDEAAYgAQYogQyBwgEEAAY7wUyBwgFEAAY7wUyBggGEEUYPDIGCAcQRRg80gEINDM4NmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 transition-all shadow-[0_0_20px_rgba(255,0,0,0.4)]"
        >
          View More on Google ★
        </a>
      </div>
    </section>
  );
}
