import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const menuItems = [
    "Home",
    "Prewedding",
    "Wedding",
    "Newborn & Baby",
    "Maternity",
    "Other Portfolio",
    "Our YouTube",
    "Contact Us",
  ];

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-12 py-4 bg-black/60 backdrop-blur-lg z-50 shadow-lg">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-28 h-auto" />
      </div>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-8 text-white text-lg font-light tracking-wide">
        {menuItems.map((item, i) => (
          <a
            key={i}
            href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
            className="hover:text-yellow-400 transition-all duration-300"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
