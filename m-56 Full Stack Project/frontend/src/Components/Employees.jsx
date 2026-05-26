"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@heroui/react";
import {
  CheckCircle2,
  ArrowRight,
  Users,
  ClipboardList,
  BarChart3,
} from "lucide-react";

const benefits = [
  "Access 50k+ pre-vetted candidates",
  "AI-assisted shortlisting in hours",
  "Branded company profile & job posts",
  "Detailed candidate analytics",
  "Applicant tracking dashboard",
  "Dedicated account manager",
];

const logos = [
  { name: "Stripe", letter: "S", color: "from-indigo-700 to-purple-800" },
  { name: "Vercel", letter: "V", color: "from-slate-700 to-gray-800" },
  { name: "Linear", letter: "L", color: "from-violet-700 to-indigo-800" },
  { name: "Notion", letter: "N", color: "from-slate-600 to-neutral-800" },
  { name: "Figma", letter: "F", color: "from-pink-700 to-rose-800" },
  { name: "OpenAI", letter: "O", color: "from-teal-700 to-emerald-800" },
  { name: "Loom", letter: "L", color: "from-orange-700 to-amber-800" },
  { name: "Retool", letter: "R", color: "from-blue-700 to-cyan-800" },
];

const steps = [
  {
    icon: Users,
    step: "01",
    title: "Post Your Role",
    desc: "Create a detailed job listing in minutes with our smart form. AI auto-optimizes for discoverability.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Review Matches",
    desc: "Receive a ranked shortlist of qualified candidates within 24 hours, not weeks.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Hire With Confidence",
    desc: "Track pipeline, schedule interviews, and extend offers — all within HireLoop.",
  },
];

export default function ForCompaniesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="companies" className="py-24 relative">
      {/* Glow */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 badge-pill rounded-full px-4 py-1.5 text-xs font-semibold text-blue-300 mb-4">
            <Users size={12} className="text-blue-400" />
            For Companies
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Hire smarter, <span className="gradient-text-blue">faster</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Join hundreds of forward-thinking companies that have cut their
            time-to-hire in half with HireLoops talent intelligence platform.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: benefits list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3
              className="text-2xl font-bold text-white mb-6"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Everything you need to build an
              <br />
              <span className="gradient-text">exceptional team</span>
            </h3>
            <ul className="space-y-3 mb-8">
              {benefits.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="flex items-center gap-3 text-slate-300 text-sm"
                >
                  <CheckCircle2
                    size={16}
                    className="text-violet-400 flex-shrink-0"
                  />
                  {b}
                </motion.li>
              ))}
            </ul>
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold px-8 rounded-xl glow-purple border-0 h-12"
              endContent={<ArrowRight size={16} />}
            >
              Start Hiring Today
            </Button>
          </motion.div>

          {/* Right: process steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="card-glass rounded-2xl p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/30 to-purple-700/20 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-violet-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs font-mono text-violet-500"
                        style={{ fontFamily: "JetBrains Mono, monospace" }}
                      >
                        {step.step}
                      </span>
                      <h4
                        className="text-white font-semibold text-sm"
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                      >
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Company logo wall */}
        <div className="text-center">
          <p className="text-slate-500 text-sm mb-6">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center gap-3">
            {logos.map((logo, i) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.06 }}
                className="flex items-center gap-2 card-glass rounded-xl px-4 py-2.5"
              >
                <div
                  className={`w-6 h-6 rounded-md bg-gradient-to-br ${logo.color} flex items-center justify-center text-white text-xs font-bold`}
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {logo.letter}
                </div>
                <span
                  className="text-slate-400 text-sm font-medium"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
