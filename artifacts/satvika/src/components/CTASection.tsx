import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section id="contact" className="relative w-full py-32 bg-black overflow-hidden flex items-center justify-center">
      {/* Radial pastel glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
        <div className="absolute w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
      </div>

      <div className="relative z-10 container px-4 md:px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex glass-pill px-4 py-1.5 rounded-full">
            <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Let's Connect</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-light text-white leading-tight">
            Let's build something <br />
            <span className="font-serif italic text-white/90">meaningful.</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Open to internships, collaborations, and opportunities in AI, ML, and software development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="#"
              className="bg-white text-black px-10 py-4 rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full sm:w-auto"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="border border-white/20 bg-black/20 backdrop-blur-sm text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
