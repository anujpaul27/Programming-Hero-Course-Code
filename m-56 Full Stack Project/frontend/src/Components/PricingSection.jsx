"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@heroui/react";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    desc: "Perfect for early-career professionals and casual job seekers.",
    features: [
      "Up to 10 job applications/mo",
      "Basic AI match suggestions",
      "Email job alerts",
      "Public profile",
      "Community access",
    ],
    cta: "Get Started Free",
    variant: "bordered",
    highlight: false,
  },
  {
    name: "Pro",
    price: { monthly: 29, annual: 19 },
    desc: "For serious job seekers who want every advantage.",
    features: [
      "Unlimited applications",
      "Priority AI matching",
      "Real-time alerts & insights",
      "Salary benchmarking",
      "Profile boost & featured badge",
      "Direct recruiter messaging",
      "Interview prep tools",
    ],
    cta: "Start Pro Trial",
    variant: "solid",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Teams",
    price: { monthly: 99, annual: 79 },
    desc: "For companies building world-class teams at scale.",
    features: [
      "Post unlimited jobs",
      "ATS dashboard",
      "AI candidate shortlisting",
      "Branded company profile",
      "Team collaboration tools",
      "Analytics & reports",
      "Dedicated account manager",
    ],
    cta: "Start Hiring",
    variant: "bordered",
    highlight: false,
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-96 h-64 bg-violet-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <span className="inline-flex items-center gap-2 badge-pill rounded-full px-4 py-1.5 text-xs font-semibold text-violet-300 mb-4">
            <Zap size={12} className="text-violet-400" />
            Pricing
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="text-slate-400 mb-6">
            No hidden fees. Cancel anytime. Start free.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 card-glass rounded-xl p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                !annual ? "bg-violet-600 text-white" : "text-slate-400"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                annual ? "bg-violet-600 text-white" : "text-slate-400"
              }`}
            >
              Annual
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full font-semibold">
                −35%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12 }}
              className={`rounded-2xl p-6 relative ${
                plan.highlight
                  ? "bg-gradient-to-b from-violet-900/50 to-purple-950/40 border border-violet-500/40 glow-purple"
                  : "card-glass"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-violet-600 to-purple-700 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan info */}
              <div className="mb-6">
                <h3
                  className="text-white font-bold text-xl mb-1"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {plan.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {plan.desc}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span
                    className="text-4xl font-bold text-white"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {plan.price[annual ? "annual" : "monthly"] === 0
                      ? "Free"
                      : `$${plan.price[annual ? "annual" : "monthly"]}`}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-slate-400 text-sm mb-1.5">/mo</span>
                  )}
                </div>
                {annual && plan.price.annual > 0 && (
                  <p className="text-slate-500 text-xs mt-1">
                    Billed annually (${plan.price.annual * 12}/yr)
                  </p>
                )}
              </div>

              {/* CTA */}
              <Button
                size="md"
                className={`w-full rounded-xl font-semibold h-11 border-0 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-violet-600 to-purple-700 text-white glow-purple"
                    : "bg-white/5 hover:bg-white/10 text-slate-300"
                }`}
              >
                {plan.cta}
              </Button>

              {/* Divider */}
              <div className="my-5 border-t border-[var(--brand-border)]" />

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={14}
                      className={`mt-0.5 flex-shrink-0 ${
                        plan.highlight ? "text-violet-400" : "text-slate-500"
                      }`}
                    />
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}