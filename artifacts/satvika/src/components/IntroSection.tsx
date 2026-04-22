import { motion } from "framer-motion";

export function IntroSection() {
  return (
    <section id="about" className="relative w-full py-32 bg-black overflow-hidden bg-noise">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-85"
        style={{
          backgroundImage: "url('/intro-bg.jpg')",
          filter: "contrast(1.1) brightness(1.05)",
        }}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="relative z-10 container px-4 md:px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex glass-pill px-4 py-1.5 rounded-full">
            <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">About Me</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white leading-tight">
            Turning data into <br />
            <span className="font-serif italic text-white/80">meaningful systems.</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            I work on machine learning models, data-driven applications, and full-stack systems that solve real-world problems. From prediction systems to anomaly detection, I focus on building things that actually work outside the classroom.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
