import { motion } from "framer-motion";

const skills = [
  "Python",
  "Machine Learning",
  "Data Science",
  "Web Development",
  "AI",
  "SQL",
  "NLP",
  "scikit-learn",
  "Java",
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
];

export function SkillsSection() {
  const loop = [...skills, ...skills];

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
        </motion.div>
      </div>

      <div className="relative z-10 mt-20 w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          className="flex gap-4 md:gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loop.map((skill, i) => (
            <div
              key={`${skill}-${i}`}
              className="glass-card px-6 py-3 rounded-full text-sm md:text-base font-light text-white/90 tracking-wide whitespace-nowrap"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
