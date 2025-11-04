import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Background from "./components/Background";
import logo from "./assets/logo.png";
import logoSmall from "./assets/logoSmall.png";
import './index.css';
import w1 from "./assets/wedding1.jpg";
import w2 from "./assets/wedding2.jpg";
import w3 from "./assets/wedding3.jpg";
import w4 from "./assets/wedding4.jpg";
import w5 from "./assets/wedding5.jpg";
import aboutImg from "./assets/about.jpg";
import FeaturedWeddings, { WeddingGallery } from "./components/FeaturedWeddings";
import m1 from "./assets/marriage1.jpg";
import m2 from "./assets/marriage2.jpg";
import m3 from "./assets/marriage3.jpg";
import m4 from "./assets/marriage4.jpg";
import GlimpseOfWorld from "./components/GlimpseOfWorld";
import GoogleReviews from "./components/GoogleReviews";
import Footer from "./components/Footer";




const pages = [
  { name: "Home", path: "/" },
  { name: "Prewedding", path: "/prewedding" },
  { name: "Wedding", path: "/wedding" },
  { name: "Maternity", path: "/maternity" },
  { name: "Kid & New Born", path: "/kids" },
  { name: "Contact Us", path: "/contact" },
  { name: "Our YouTube", path: "/youtube" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔧 Customize sizes here:
  const LogoSize = { width: "180px", height: "180px" };   // 👈 Big logo size
  const smallLogoSize = { width: "70px", height: "70px" };   // 👈 Small logo size

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 transition-all duration-500">

        {/* ✅ Logo that changes and resizes */}
        <Link to="/">
          <img
            src={isScrolled ? logoSmall : logo}
            alt="Sanjay Solanki Photography Logo"
            style={isScrolled ? smallLogoSize : LogoSize}  // 👈 manual size control
            className="object-contain drop-shadow-lg transition-all duration-500"
          />
        </Link>

        {/* ✅ Navigation Links */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-white font-medium text-sm md:text-base">
          {pages.map((p) => (
            <Link
              key={p.path}
              to={p.path}
              className="hover:text-amber-400 transition"
            >
              {p.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

function HeroSlideshow() {
  const slides = [w1, w2, w3, w4, w5];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-black/40">
      {slides.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`slide-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ))}

      <div className="absolute inset-0 bg-black/40">
        <div
  className="text-white text-center relative"
  style={{
    position: "absolute",
    top: "80%",
    left: "70%",
    transform: "translate(-10%, -65%)",
  }}
>
  {/* 🔥 Soft Red Glow Behind Text */}
  <div className="absolute inset-0 blur-3xl bg-red-600/40 rounded-full scale-150 -z-10"></div>

          <motion.h2
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-[GreatVibes] mb-4 tracking-wide"
          >
            Capturing Love Stories
          </motion.h2>
          <p className="text-xl md:text-2xl mb-6 italic">
            Udaipur, Rajasthan & Beyond
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 px-6 md:px-8 py-3 rounded-full text-white font-semibold shadow-lg transition">
            View Gallery
          </button>
        </div>
      </div>
    </div>
  );
}

// ✅ FIX: Missing closing tag for HeroSlideshow container was added above.



function Home() {
  return (
    <section className="m-0 p-0">
      <HeroSlideshow />
      <FeaturedWeddings />
      <AboutUs />
      <GlimpseOfWorld />
      <GoogleReviews />	
    </section>
  );
}

function AboutUs() {
  return (
    <section className="py-20 mt-[-15rem] bg-black/30 text-white relative overflow-hidden backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 px-6 md:px-6">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <img
            src={aboutImg}
            alt="About Sanjay Solanki Photography"
            className="rounded-3xl shadow-[0_0_40px_rgba(255,0,0,0.3)] object-cover w-full h-[400px]"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-500">
            About Us
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            At <span className="text-red-500 font-semibold">Sanjay Solanki Photography</span>, we specialize in capturing life’s most meaningful moments with precision and artistry. 
            Based in Udaipur, Rajasthan, our expertise spans wedding and pre-wedding photography, maternity shoots, 
            and kids & newborn portraits. With a focus on quality, creativity, and timeless storytelling, 
            we ensure every frame reflects the beauty and emotions of your special day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}




function SimplePage({ title }) {
  return <div className="pt-24 p-8 text-center text-2xl text-gray-800">{title} Page Coming Soon...</div>;
}

function Contact() {
  return (
    <div className="pt-24 px-8 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Contact Us</h2>
      <p className="text-gray-700 mb-6 text-lg md:text-xl">
        We’d love to hear from you! Fill out the form below to get in touch.
      </p>
      <form className="grid gap-4">
        <input className="border p-3 rounded" placeholder="Your Name" />
        <input className="border p-3 rounded" placeholder="Email or Phone" />
        <textarea className="border p-3 rounded" placeholder="Message" rows="4"></textarea>
        <button className="bg-amber-600 hover:bg-amber-700 text-white py-3 rounded text-lg">
          Send Message
        </button>
      </form>
    </div>
  );
}

function Youtube() {
  return (
    <div className="pt-24 px-8">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10">Our YouTube Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((v) => (
          <div key={v} className="aspect-video bg-gray-200 animate-pulse rounded-xl"></div>
        ))}
      </div>
    </div>
  );
}




function App() {
  return (
    <>
      {/* 🌌 Fullscreen Background (Always Behind Everything) */}
      <div className="fixed inset-0 -z-20">
        <Background />
      </div>

      {/* 🧭 Foreground Content */}
      <div className="relative z-10 text-white">
        <>
          <Navbar />
          <main className="bg-black/10 backdrop-blur-sm min-h-screen">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prewedding" element={<SimplePage title="Prewedding" />} />
            <Route path="/wedding" element={<SimplePage title="Wedding" />} />
            <Route path="/maternity" element={<SimplePage title="Maternity" />} />
            <Route path="/kids" element={<SimplePage title="Kid & New Born" />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/youtube" element={<Youtube />} />
            <Route
              path="/wedding1"
              element={<WeddingGallery title="Marriage 1" images={[m1, m2, m3, m4]} />}
            />
            <Route
              path="/wedding2"
              element={<WeddingGallery title="Marriage 2" images={[m2, m3, m4, m1]} />}
            />
            <Route
              path="/wedding3"
              element={<WeddingGallery title="Marriage 3" images={[m3, m4, m1, m2]} />}
            />
            <Route
              path="/wedding4"
              element={<WeddingGallery title="Marriage 4" images={[m4, m1, m2, m3]} />}
            />
          </Routes>
</main>
          <Footer />

          {/* ☎️ Floating Call Button */}
          <a
            href="tel:+918302337329"
            className="fixed bottom-28 right-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110 z-50 backdrop-blur-md bg-opacity-60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 8.81 19.79 19.79 0 010 0a2 2 0 012-2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.1 6.1a16 16 0 007.45 7.45l1.46-1.15a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          </a>

          {/* 💬 Floating WhatsApp Button */}
          <a
            href="https://wa.me/918302337329"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-12 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110 z-50 backdrop-blur-md bg-opacity-60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.472 13.37c-.278-.139-1.64-.808-1.894-.9-.255-.093-.441-.139-.628.14-.186.278-.72.9-.883 1.086-.163.186-.326.209-.604.07-.278-.139-1.174-.433-2.235-1.38-.826-.737-1.384-1.65-1.547-1.928-.163-.278-.017-.429.123-.567.126-.126.278-.326.417-.488.139-.163.186-.279.278-.465.093-.186.046-.349-.023-.488-.07-.14-.628-1.511-.86-2.073-.226-.543-.456-.469-.628-.478l-.54-.01c-.186 0-.488.07-.744.349s-.977.954-.977 2.32 1 2.688 1.14 2.873c.14.186 1.97 3.008 4.778 4.213.668.289 1.19.462 1.595.593.67.213 1.28.183 1.762.111.537-.08 1.64-.671 1.872-1.32.232-.65.232-1.209.162-1.32-.069-.11-.255-.176-.533-.315z" />
              <path d="M20.52 3.48A11.928 11.928 0 0012 0C5.372 0 0 5.373 0 12c0 2.12.554 4.173 1.605 5.978L0 24l6.207-1.595A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12 0-3.193-1.244-6.197-3.48-8.52zM12 22c-1.9 0-3.735-.497-5.355-1.437l-.383-.222-3.68.945.984-3.584-.249-.37A9.958 9.958 0 012 12C2 6.486 6.486 2 12 2c2.673 0 5.183 1.042 7.071 2.929A9.958 9.958 0 0122 12c0 5.514-4.486 10-10 10z" />
            </svg>
          </a>     
       </>
     </div>
    </>  
  );
}


export default App;
