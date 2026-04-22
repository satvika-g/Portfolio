import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image with Ken Burns & Parallax */}
      <motion.div
        animate={{
          x: mousePosition.x * -30,
          y: mousePosition.y * -30,
          scale: 1.05,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        {/* Soft vignette */}
        <div className="absolute inset-0 bg-black/40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: "100vh",
              x: `${Math.random() * 100}vw`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: "-10vh",
              x: `${Math.random() * 100}vw`,
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 rounded-full bg-white/40 blur-[1px]"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container px-4 md:px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 md:space-y-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-sans font-light tracking-tight text-white leading-tight">
            Hi, my name is{" "}
            <span className="font-serif italic text-white/90">Satvika</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            AI & ML student crafting data-driven solutions, predictive systems, and full-stack applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <a
              href="#projects"
              className="bg-white text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full sm:w-auto"
            >
              View Projects
            </a>
            <a
              href="#"
              className="border border-white/20 bg-black/20 backdrop-blur-sm text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              View GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
