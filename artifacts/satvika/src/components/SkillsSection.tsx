import { motion } from "framer-motion";

const skills = [
  "Python",
  "Machine Learning",
  "Data Science",
  "Web Development",
  "AI",
  "SQL",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative w-full py-32 bg-black overflow-hidden bg-noise"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/skills-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />

      <div className="relative z-10 container px-4 md:px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex glass-pill px-4 py-1.5 rounded-full">
            <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">
              Skills
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white leading-tight">
            The tools I use to <br />
            <span className="font-serif italic text-white/80">
              build and explore.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            A toolkit shaped by curiosity — moving fluently between data,
            models, and the products they live inside.
          </p>
        </motion.div>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3 md:gap-4"
        >
          {skills.map((skill) => (
            <motion.li
              key={skill}
              variants={pillVariants}
              className="glass-card px-6 py-3 rounded-full text-sm md:text-base font-light text-white/90 tracking-wide hover:bg-white/[0.06] hover:scale-105 transition-all duration-500 cursor-default"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
