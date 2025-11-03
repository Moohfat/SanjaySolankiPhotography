import React, { useRef, useEffect } from "react";

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // ❄️ Create snowflakes (mix of big + small)
    const numFlakes = 250;
    const flakes = Array.from({ length: numFlakes }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 3.5 + 1.5, // bigger flakes for visibility
      s: Math.random() * 1.2 + 0.6, // fall speed
      drift: Math.random() * 0.8 + 0.3, // sideways drift
      phase: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.5 + 0.8,
    }));

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {
      // 🌑 Pure deep black background (no gray tint)
      ctx.clearRect(0, 0, width, height);
      ctx.fillRect(0, 0, width, height);

      // ✨ Visible subtle shimmer (grain)
      for (let i = 0; i < 60; i++) {
        const gx = Math.random() * width;
        const gy = Math.random() * height;
        const shade = Math.random() * 120 + 80;
        ctx.fillStyle = `rgba(${shade}, ${shade}, ${shade}, 0.06)`;
        ctx.fillRect(gx, gy, 1, 1);
      }

      // ❄️ Snowfall
      for (let i = 0; i < numFlakes; i++) {
        const f = flakes[i];
        f.phase += 0.01;
        f.y += f.s;
        f.x += Math.sin(f.phase) * f.drift;

        if (f.y > height + 5) {
          f.y = -5;
          f.x = Math.random() * width;
          f.r = Math.random() * 3.5 + 1.5;
        }

        // ❄️ Draw glowing snowflake
const gradient = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r * 2.5);
gradient.addColorStop(0, `rgba(255, 255, 255, ${f.opacity})`);
gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

// ✨ Add soft white glow
ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
ctx.shadowBlur = 10;

ctx.beginPath();
ctx.fillStyle = gradient;
ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
ctx.fill();

// reset shadow for next frame (so text or next shapes aren’t affected)
ctx.shadowBlur = 0;

      }

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-50"
      style={{ backgroundColor: "#000" }}
    />
  );
}
