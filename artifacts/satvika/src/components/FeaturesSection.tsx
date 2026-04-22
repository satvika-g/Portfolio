import { motion } from "framer-motion";
import { Activity, TrendingUp, ShieldAlert, Dna } from "lucide-react";

const projects = [
  {
    title: "COVID-19 Prediction System",
    description: "Time-series forecasting using Linear Regression, SVR, and Bayesian Ridge models with data visualization for trend analysis.",
    icon: Activity
  },
  {
    title: "Stock Price Prediction using Sentiment",
    description: "NLP-based sentiment analysis using VADER and spaCy combined with machine learning models like SVM and Random Forest.",
    icon: TrendingUp
  },
  {
    title: "Fraud Shipment Detection",
    description: "Anomaly detection system using Isolation Forest with feature engineering and Flask-based deployment.",
    icon: ShieldAlert
  },
  {
    title: "Protein Family Classification",
    description: "Deep learning model using CNN and RNN architectures to classify protein sequences into functional families.",
    icon: Dna
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export function FeaturesSection() {
  return (
    <section id="projects" className="relative w-full py-32 bg-black overflow-hidden bg-noise">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/features-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black" />

      <div className="relative z-10 container px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 mb-20 text-center md:text-left"
        >
          <div className="inline-flex glass-pill px-4 py-1.5 rounded-full">
            <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Projects</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white leading-tight">
            Selected work <br />
            <span className="font-serif italic text-white/80">and systems I've built</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card p-8 md:p-10 rounded-2xl group hover:bg-white/[0.03] transition-all duration-500 overflow-hidden relative cursor-pointer"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                <div className="shrink-0 p-4 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <project.icon className="w-6 h-6 text-gray-200" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-sans font-medium text-white tracking-wide">{project.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
