import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-10 backdrop-blur-50xl bg-white/2 text-white py-6 px-8 border-t border-white/10 shadow-[0_8px_32px_rgba(255,255,255,0.1)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Text */}
        <p className="text-sm md:text-base text-gray-300 md:w-1/3 text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">
            Sanjay Solanki Photography
          </span>. All rights reserved.
        </p>

        {/* Center Social Icons */}
        <div className="flex justify-center space-x-8 text-2xl md:w-1/3">
          <a
            href="https://www.instagram.com/sanjaysolankiphotography/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/SanjaySolankiPhotography/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com/@sanjaysolankiphotography592"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-transform transform hover:scale-110"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Right Text */}
        <p className="text-sm md:text-base text-gray-300 md:w-1/3 text-center md:text-right">
  Created by{" "}
  <span className="text-sky-400 font-semibold drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] animate-pulse">
    Unsolved
  </span>
</p>

      </div>
    </footer>
  );
}
