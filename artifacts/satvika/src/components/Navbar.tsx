import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="glass-pill px-6 py-3 rounded-full flex items-center justify-between w-full max-w-4xl mx-auto shadow-2xl">
        <a href="#" className="text-xl font-serif italic text-white tracking-wide">
          Satvika
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="/satvika-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}
