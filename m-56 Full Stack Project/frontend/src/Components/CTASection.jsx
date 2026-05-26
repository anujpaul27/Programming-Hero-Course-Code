"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@heroui/react";
import { ArrowRight, Zap } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-24 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-violet-800/25 via-purple-700/20 to-blue-800/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="card-glass rounded-3xl p-12 text-center border border-violet-500/20"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(124,58,237,0.1), rgba(13,13,26,0.9))",
          }}
        >
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center mx-auto mb-6 glow-purple">
            <Zap size={24} className="text-white" />
          </div>

          {/* Headline */}
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Your next opportunity
            <br />
            is <span className="gradient-text">already waiting</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Join over 50,000 professionals who've found their dream roles
            through HireLoop. It only takes 2 minutes to get started.
          </p>

          {/* Email input + CTA */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 bg-white/5 border border-[var(--brand-border)] rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-violet-500/60 transition-colors"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            />
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold rounded-xl glow-purple border-0 h-[46px] px-6 whitespace-nowrap"
              endContent={<ArrowRight size={16} />}
            >
              Get Started
            </Button>
          </div>

          <p className="text-slate-600 text-xs">
            Free forever · No credit card needed · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
