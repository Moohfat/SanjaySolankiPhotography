import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import m1 from "../assets/marriage1.jpg";
import m2 from "../assets/marriage2.jpg";
import m3 from "../assets/marriage3.jpg";
import m4 from "../assets/marriage4.jpg";

export default function FeaturedWeddings() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const weddings = [
    { id: 1, img: m1, title: "Marriage 1" },
    { id: 2, img: m2, title: "Marriage 2" },
    { id: 3, img: m3, title: "Marriage 3" },
    { id: 4, img: m4, title: "Marriage 4" },
  ];

  const toggleBox = () => setIsOpen(!isOpen);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-transparent text-white overflow-hidden pb-32 backdrop-blur-sm">

      {/* ✨ Section Title (always visible now) */}
      <h2 className="text-5xl font-[Cinzel] font-bold text-center text-white mt-40 mb-40">
        Featured Weddings
      </h2>

      {/* 🎁 Gift Box */}
      <motion.div
        className="relative flex flex-col items-center justify-center cursor-pointer"
        onClick={toggleBox}
      >
        <motion.div
          className="w-64 h-64 bg-gradient-to-b from-[#6e0000] to-[#b30000] rounded-xl shadow-[0_0_40px_rgba(255,0,0,0.6)] relative overflow-hidden"
          animate={{
            opacity: isOpen ? 0 : 1,
            scale: isOpen ? 0.9 : 1,
          }}
          transition={{ duration: 0.6 }}
        >
          {/* Ribbon */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-gradient-to-b from-[#ffcccc] to-[#990000]" />
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-8 bg-gradient-to-r from-[#ffcccc] to-[#990000]" />
        </motion.div>

        {/* Lid */}
        <motion.div
          className="w-72 h-16 bg-gradient-to-r from-[#990000] to-[#cc0000] rounded-t-2xl absolute top-0 left-1/2 -translate-x-1/2 origin-bottom"
          animate={{
            rotateX: isOpen ? 160 : 0,
            y: isOpen ? -100 : 0,
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        ></motion.div>
      </motion.div>

      {/* 🖼️ Wedding Cards */}
      <motion.div
        className="flex flex-wrap justify-center gap-8 px-4 mt-16"
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? -250 : 100,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          staggerChildren: 0.1,
          delayChildren: isOpen ? 0.2 : 0,
        }}
      >
        {weddings.map((w, i) => (
          <motion.div
            key={w.id}
            className={`relative w-72 h-96 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,0,0,0.5)] cursor-pointer transition-all duration-500 ${
              hovered !== null && hovered !== i ? "blur-sm scale-95 opacity-70" : ""
            }`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            initial={{ scale: 0, y: 100 }}
            animate={isOpen ? { scale: 1, y: 0 } : { scale: 0, y: 100 }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 18,
              delay: i * 0.1,
            }}
            whileHover={{
              scale: 1.1,
              rotateY: 360, // 🌀 tornado spin
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
          >
            <img
              src={w.img}
              alt={w.title}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent py-4 text-center">
              <p className="text-lg font-semibold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
                {w.title}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export function WeddingGallery({ title = "Wedding", images = [] }) {
  return (
    <div className="pt-24 pb-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${title} ${i + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition"
          />
        ))}
      </div>
    </div>
  );
}
