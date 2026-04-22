import { motion } from "framer-motion";

const skills = [
  "Python", "Machine Learning", "Data Science", "Web Development", "AI", "SQL",
  "Python", "Machine Learning", "Data Science", "Web Development", "AI", "SQL"
];

export function IntroSection() {
  return (
    <section id="skills" className="relative w-full py-32 bg-black overflow-hidden bg-noise">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/intro-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

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

        {/* Marquee Row */}
        <div className="w-full overflow-hidden mt-24 relative">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            className="flex whitespace-nowrap gap-12 items-center"
          >
            {skills.map((skill, index) => (
              <span key={index} className="text-2xl md:text-3xl font-serif italic text-white/40 px-6">
                {skill}
                <span className="mx-12 text-white/20 font-sans not-italic text-sm align-middle">·</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
