"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    title: "Senior Engineer @ Vercel",
    avatar: "AC",
    color: "from-violet-600 to-indigo-700",
    stars: 5,
    quote:
      "HireLoop found me a role I wasn't even actively looking for. The AI matched me to Vercel's team within 3 days. I went from passive candidate to signed offer in under two weeks.",
  },
  {
    name: "Priya Sharma",
    title: "Product Designer @ Figma",
    avatar: "PS",
    color: "from-pink-600 to-rose-700",
    stars: 5,
    quote:
      "After months on other platforms with zero traction, HireLoop connected me with Figma in my first week. The quality of matches is genuinely different — it felt like having a personal recruiter.",
  },
  {
    name: "Marcus Johnson",
    title: "Head of Talent @ Linear",
    avatar: "MJ",
    color: "from-blue-600 to-cyan-700",
    stars: 5,
    quote:
      "As a hiring manager, HireLoop cut our time-to-hire by 40%. The candidates we see are pre-qualified and genuinely interested. It's the only platform we use now for senior roles.",
  },
  {
    name: "Sarah Kim",
    title: "ML Engineer @ OpenAI",
    avatar: "SK",
    color: "from-emerald-600 to-teal-700",
    stars: 5,
    quote:
      "The market insights feature alone is worth it. I knew exactly what salary to negotiate before my first interview. Ended up with a 30% higher offer than I would have asked for.",
  },
];

function TestimonialCard({ t, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-glass rounded-2xl p-6 flex flex-col gap-4 group hover:border-violet-500/30 transition-all duration-300"
      whileHover={{ y: -4 }}
    >
      {/* Quote icon */}
      <Quote size={20} className="text-violet-500/60" />

      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(t.stars)].map((_, i) => (
          <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
        ))}
      </div>

      {/* Text */}
      <p className="text-slate-300 text-sm leading-relaxed flex-1">
        {t.quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-[var(--brand-border)]">
        <div
          className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold`}
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {t.avatar}
        </div>
        <div>
          <p className="text-white font-semibold text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
            {t.name}
          </p>
          <p className="text-slate-500 text-xs">{t.title}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Glow bg */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 badge-pill rounded-full px-4 py-1.5 text-xs font-semibold text-violet-300 mb-4">
            <Star size={12} className="text-amber-400 fill-amber-400" />
            Loved by Professionals
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Real stories from{" "}
            <span className="gradient-text">real people</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Thousands of professionals have found their next chapter through
            HireLoop. Here  what they say.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>

        {/* Bottom rating */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-6 mt-12 flex-wrap"
        >
          {[
            { label: "Product Hunt", score: "#1 of the Day", icon: "🏆" },
            { label: "G2 Rating", score: "4.9 / 5.0", icon: "⭐" },
            { label: "App Store", score: "4.8 / 5.0", icon: "📱" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="card-glass rounded-xl px-5 py-3 flex items-center gap-3"
            >
              <span className="text-xl">{badge.icon}</span>
              <div>
                <p className="text-slate-400 text-xs">{badge.label}</p>
                <p className="text-white font-semibold text-sm" style={{ fontFamily: "Syne, sans-serif" }}>
                  {badge.score}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}