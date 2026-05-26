"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Target, Bell, TrendingUp, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    desc: "Our intelligent algorithm analyzes your skills, experience, and preferences to surface the most relevant opportunities — not just keyword matches.",
    color: "from-violet-600 to-purple-700",
    glow: "rgba(124,58,237,0.25)",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    desc: "Define your ideal role, salary range, and company culture. HireLoop delivers curated listings that align with your career vision.",
    color: "from-blue-600 to-cyan-600",
    glow: "rgba(59,130,246,0.25)",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    desc: "Never miss an opportunity. Get instant notifications when a job matching your profile is posted — before the rush.",
    color: "from-emerald-600 to-teal-600",
    glow: "rgba(16,185,129,0.25)",
  },
  {
    icon: TrendingUp,
    title: "Career Growth Insights",
    desc: "Track market trends, salary benchmarks, and in-demand skills to position yourself ahead of the competition.",
    color: "from-orange-500 to-amber-600",
    glow: "rgba(245,158,11,0.25)",
  },
  {
    icon: Shield,
    title: "Verified Companies",
    desc: "Every company on HireLoop is verified. You only see legitimate opportunities from employers who meet our quality standards.",
    color: "from-pink-600 to-rose-600",
    glow: "rgba(244,63,94,0.25)",
  },
  {
    icon: Zap,
    title: "One-Click Apply",
    desc: "Apply to multiple roles in seconds. Your profile doubles as your resume — no repetitive form-filling ever again.",
    color: "from-violet-500 to-fuchsia-600",
    glow: "rgba(167,139,250,0.25)",
  },
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-glass rounded-2xl p-6 group hover:scale-[1.02] transition-all duration-300 cursor-default"
      style={{
        boxShadow: `0 0 0 1px rgba(30,30,53,0.8)`,
      }}
      whileHover={{
        boxShadow: `0 0 40px ${feature.glow}, 0 0 0 1px rgba(124,58,237,0.3)`,
      }}
    >
      {/* Icon */}
      <div
        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
        style={{ boxShadow: `0 0 20px ${feature.glow}` }}
      >
        <Icon size={20} className="text-white" />
      </div>

      {/* Content */}
      <h3
        className="text-white font-semibold text-lg mb-2"
        style={{ fontFamily: "Syne, sans-serif" }}
      >
        {feature.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>

      {/* Bottom accent line */}
      <div
        className={`mt-5 h-px w-0 group-hover:w-full bg-gradient-to-r ${feature.color} transition-all duration-500 opacity-50`}
      />
    </motion.div>
  );
}

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="how" className="py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 badge-pill rounded-full px-4 py-1.5 text-xs font-semibold text-violet-300 mb-4">
            <Zap size={12} className="text-violet-400" />
            Why HireLoop
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            The smarter way to{" "}
            <span className="gradient-text">find & hire</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            From AI matching to verified companies — every feature is designed
            to save you time and land the right opportunity faster.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}