"use client";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { ArrowRight, Sparkles } from "lucide-react";

const stats = [
  { value: "12k+", label: "Active Jobs" },
  { value: "8.4k", label: "Companies" },
  { value: "94%", label: "Hire Rate" },
  { value: "47%", label: "Faster Hiring" },
];

function GlobeIllustration() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto select-none pointer-events-none">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-violet-600/20 to-blue-600/10 blur-3xl scale-110" />

      {/* Main globe SVG */}
      <svg
        viewBox="0 0 500 500"
        className="w-full drop-shadow-2xl animate-float"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Earth gradient */}
          <radialGradient id="earthGrad" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="40%" stopColor="#1e40af" />
            <stop offset="70%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>

          {/* Atmosphere glow */}
          <radialGradient id="atmoGrad" cx="50%" cy="50%" r="55%">
            <stop offset="85%" stopColor="transparent" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4" />
          </radialGradient>

          {/* Purple overlay glow */}
          <radialGradient id="purpleGlow" cx="70%" cy="70%" r="50%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Land patch gradient */}
          <radialGradient id="landGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#166534" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#14532d" stopOpacity="0.7" />
          </radialGradient>

          <clipPath id="globeClip">
            <circle cx="250" cy="250" r="200" />
          </clipPath>

          {/* Latitude lines blur filter */}
          <filter id="softBlur">
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
        </defs>

        {/* Atmosphere halo */}
        <circle cx="250" cy="250" r="215" fill="url(#atmoGrad)" />

        {/* Globe body */}
        <circle cx="250" cy="250" r="200" fill="url(#earthGrad)" />

        {/* Ocean shimmer */}
        <circle
          cx="250"
          cy="250"
          r="200"
          fill="url(#purpleGlow)"
          clipPath="url(#globeClip)"
        />

        {/* Land masses (stylized) */}
        <g clipPath="url(#globeClip)" fill="url(#landGrad)" opacity="0.85">
          {/* North America */}
          <path d="M160 130 Q190 110 220 125 Q240 135 245 150 Q250 165 235 175 Q220 185 200 180 Q175 175 165 165 Q155 155 160 130 Z" />
          {/* South America */}
          <path d="M195 230 Q215 220 230 235 Q240 250 235 275 Q225 300 210 305 Q195 300 185 285 Q180 265 185 245 Q190 235 195 230 Z" />
          {/* Europe */}
          <path d="M280 120 Q300 115 315 125 Q325 135 320 150 Q310 160 295 158 Q280 155 275 142 Q272 130 280 120 Z" />
          {/* Africa */}
          <path d="M290 175 Q315 165 330 180 Q340 200 335 230 Q325 255 310 265 Q295 265 285 250 Q278 230 280 205 Q282 188 290 175 Z" />
          {/* Asia */}
          <path d="M330 115 Q370 100 390 115 Q405 128 400 150 Q390 168 365 172 Q340 170 328 155 Q320 140 330 115 Z" />
          {/* Australia */}
          <path d="M370 250 Q395 240 410 255 Q415 270 405 285 Q390 295 375 290 Q360 280 360 265 Q360 255 370 250 Z" />
        </g>

        {/* Latitude grid lines */}
        <g
          clipPath="url(#globeClip)"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="0.4"
          opacity="0.25"
          filter="url(#softBlur)"
        >
          {[90, 130, 170, 210, 250, 290, 330, 370, 410].map((y, i) => (
            <ellipse
              key={i}
              cx="250"
              cy={y}
              rx={Math.sqrt(200 * 200 - Math.pow(y - 250, 2)) || 5}
              ry="12"
            />
          ))}
        </g>

        {/* Longitude grid lines */}
        <g
          clipPath="url(#globeClip)"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="0.4"
          opacity="0.2"
        >
          {[180, 210, 240, 270, 300, 320].map((x, i) => (
            <line key={i} x1={x} y1="50" x2={x} y2="450" />
          ))}
        </g>

        {/* Connection dots / job hotspots */}
        {[
          { cx: 185, cy: 155, r: 3 },
          { cx: 310, cy: 135, r: 2.5 },
          { cx: 295, cy: 210, r: 3.5 },
          { cx: 360, cy: 140, r: 2 },
          { cx: 220, cy: 270, r: 2.5 },
          { cx: 388, cy: 262, r: 2 },
        ].map((dot, i) => (
          <g key={i}>
            <circle
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r + 5}
              fill="#7c3aed"
              opacity="0.2"
            />
            <circle cx={dot.cx} cy={dot.cy} r={dot.r} fill="#a78bfa" />
          </g>
        ))}

        {/* Connection lines between hotspots */}
        <g
          clipPath="url(#globeClip)"
          stroke="#7c3aed"
          strokeWidth="0.8"
          opacity="0.4"
          fill="none"
        >
          <path d="M185 155 Q250 100 310 135" />
          <path d="M310 135 Q330 170 295 210" />
          <path d="M295 210 Q270 240 220 270" />
          <path d="M310 135 Q345 140 360 140" />
          <path d="M360 140 Q375 200 388 262" />
        </g>

        {/* Specular highlight */}
        <ellipse
          cx="195"
          cy="180"
          rx="50"
          ry="35"
          fill="white"
          opacity="0.05"
        />

        {/* Globe border shine */}
        <circle
          cx="250"
          cy="250"
          r="200"
          fill="none"
          stroke="url(#atmoGrad)"
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>

      {/* Floating card: top left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute top-[15%] -left-4 card-glass rounded-xl px-3 py-2.5 text-xs shadow-xl"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-white text-[10px] font-bold">
            A
          </div>
          <div>
            <p
              className="text-white font-semibold text-[11px]"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Airbnb Design
            </p>
            <p className="text-slate-400 text-[10px]">
              Senior Product Designer
            </p>
          </div>
        </div>
      </motion.div>

      {/* Floating card: bottom right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-[18%] -right-4 card-glass rounded-xl px-3 py-2.5 text-xs shadow-xl"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <p
            className="text-white font-medium text-[11px]"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            <span className="text-emerald-400 font-bold">47</span> new matches
            today
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-10 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-radial-bottom pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />

      {/* Stars scatter */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width:  1 * 2 + 1,
              height: 1 * 2 + 1,
              top: `${1 * 100}%`,
              left:`${1 * 100}%`,
              opacity: 10 * 0.5 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 badge-pill rounded-full px-4 py-1.5 text-xs font-semibold text-violet-300">
                <Sparkles size={12} className="text-violet-400" />
                AI-Powered Job Matching Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Find Your <span className="gradient-text">Dream Job</span>{" "}
              <br className="hidden lg:block" />
              Today
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed max-w-lg"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              HireLoop uses intelligent matching to connect top talent with
              forward-thinking companies. Less searching, more connecting.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold px-8 rounded-xl glow-purple border-0 h-12"
                endContent={<ArrowRight size={16} />}
              >
                Explore Jobs
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border-[var(--brand-border)] text-slate-300 hover:text-white hover:border-violet-500 rounded-xl h-12 font-medium"
              >
                Post a Job
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 pt-2"
            >
              <div className="flex -space-x-2">
                {["#7c3aed", "#3b82f6", "#06b6d4", "#8b5cf6"].map((c, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-[#0d0d1a]"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <p className="text-slate-400 text-sm">
                <span className="text-white font-semibold">2,400+</span>{" "}
                professionals joined this week
              </p>
            </motion.div>
          </div>

          {/* Right: Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlobeIllustration />
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="card-glass rounded-2xl px-6 py-5 text-center group hover:border-violet-500/40 transition-all duration-300"
            >
              <p
                className="text-3xl font-bold gradient-text"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {stat.value}
              </p>
              <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
