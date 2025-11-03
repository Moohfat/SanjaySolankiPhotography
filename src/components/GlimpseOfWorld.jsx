import React, { useEffect, useRef } from "react";

export default function GlimpseOfWorld() {
  const videos = [
    "https://www.youtube.com/embed/DF8U-WxSCXg",
    "https://www.youtube.com/embed/O8sKJDXLWN0",
    "https://www.youtube.com/embed/IHU5nfdxkZo",
    "https://www.youtube.com/embed/n-2Ft21qeAQ",
    "https://www.youtube.com/embed/69cvqYTWL-Y",
    "https://www.youtube.com/embed/69cvqYTWL-Y",
  ];

  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const iframe = entry.target;
          const baseSrc = iframe.getAttribute("data-src");

          if (entry.isIntersecting) {
            iframe.src = `${baseSrc}?autoplay=1&mute=1`;
          } else {
            iframe.src = `${baseSrc}?autoplay=0&mute=1`;
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((iframe) => {
      if (iframe) observer.observe(iframe);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black text-white py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-[Cinzel] font-bold text-center mb-18">
        A Glimpse of Our World
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {videos.map((url, i) => (
          <div
            key={i}
            className="aspect-video rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:scale-105 transition-transform duration-300"
          >
            <iframe
              ref={(el) => (videoRefs.current[i] = el)}
              data-src={url}
              title={`Video ${i + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
}
