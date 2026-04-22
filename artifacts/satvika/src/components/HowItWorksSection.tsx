import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, Zap } from "lucide-react";

const steps = [
  {
    title: "Understand",
    description: "Analyzing the core problem, defining objectives, and identifying the right data sources.",
    icon: Search
  },
  {
    title: "Explore",
    description: "Cleaning data, feature engineering, and uncovering hidden patterns through EDA.",
    icon: Lightbulb
  },
  {
    title: "Build",
    description: "Training models, optimizing hyperparameters, and developing the core intelligence.",
    icon: Rocket
  },
  {
    title: "Deploy",
    description: "Integrating the model into a full-stack application for real-world usability.",
    icon: Zap
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export function HowItWorksSection() {
  return (
    <section id="approach" className="relative w-full py-32 bg-black overflow-hidden">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6 mb-20"
        >
          <div className="inline-flex glass-pill px-4 py-1.5 rounded-full">
            <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Approach</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white leading-tight">
            How I build <br />
            <span className="font-serif italic text-white/80">intelligent systems</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            From understanding the problem to deploying a working solution, I follow a structured approach focused on data, experimentation, and iteration.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="glass-card p-8 rounded-2xl flex flex-col relative group hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 text-6xl font-serif italic text-white group-hover:opacity-20 transition-opacity duration-500">
                0{index + 1}
              </div>
              <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/30 transition-colors duration-500">
                <step.icon className="w-5 h-5 text-gray-300" />
              </div>
              <h3 className="text-xl font-sans font-medium text-white mb-3">{step.title}</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
