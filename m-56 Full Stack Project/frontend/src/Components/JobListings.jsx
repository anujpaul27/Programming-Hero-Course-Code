"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button, Chip } from "@heroui/react";
import { MapPin, Clock, DollarSign, ArrowUpRight, Bookmark, Search } from "lucide-react";

const categories = ["All", "Design", "Engineering", "Product", "Marketing", "Data"];

const jobs = [
  {
    company: "Stripe",
    logo: "S",
    logoColor: "from-indigo-600 to-purple-700",
    role: "Senior Product Designer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$140k–$180k",
    tags: ["Figma", "Design Systems", "B2B"],
    category: "Design",
    badge: "Hot",
    badgeColor: "text-orange-400 bg-orange-400/10",
    posted: "2h ago",
  },
  {
    company: "Vercel",
    logo: "V",
    logoColor: "from-slate-700 to-slate-900",
    role: "Staff Engineer, Frontend",
    location: "Remote",
    type: "Full-time",
    salary: "$200k–$260k",
    tags: ["React", "Next.js", "TypeScript"],
    category: "Engineering",
    badge: "Featured",
    badgeColor: "text-violet-400 bg-violet-400/10",
    posted: "5h ago",
  },
  {
    company: "Linear",
    logo: "L",
    logoColor: "from-violet-700 to-indigo-700",
    role: "Product Manager",
    location: "New York, NY",
    type: "Full-time",
    salary: "$160k–$200k",
    tags: ["Roadmapping", "Agile", "SaaS"],
    category: "Product",
    badge: null,
    posted: "1d ago",
  },
  {
    company: "Figma",
    logo: "F",
    logoColor: "from-pink-600 to-rose-600",
    role: "Brand Designer",
    location: "Remote",
    type: "Contract",
    salary: "$90k–$120k",
    tags: ["Branding", "Motion", "Figma"],
    category: "Design",
    badge: "New",
    badgeColor: "text-emerald-400 bg-emerald-400/10",
    posted: "3h ago",
  },
  {
    company: "OpenAI",
    logo: "O",
    logoColor: "from-teal-700 to-emerald-700",
    role: "ML Research Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$250k–$350k",
    tags: ["PyTorch", "LLMs", "Python"],
    category: "Engineering",
    badge: "Hot",
    badgeColor: "text-orange-400 bg-orange-400/10",
    posted: "12h ago",
  },
  {
    company: "Notion",
    logo: "N",
    logoColor: "from-slate-600 to-slate-800",
    role: "Growth Marketing Lead",
    location: "Remote",
    type: "Full-time",
    salary: "$130k–$170k",
    tags: ["SEO", "PLG", "Analytics"],
    category: "Marketing",
    badge: null,
    posted: "2d ago",
  },
];

function JobCard({ job, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const [saved, setSaved] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="card-glass rounded-2xl p-5 group hover:border-violet-500/30 transition-all duration-300"
      whileHover={{ y: -3 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div
            className={`w-11 h-11 rounded-xl bg-gradient-to-br ${job.logoColor} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {job.logo}
          </div>
          <div>
            <p className="text-slate-400 text-xs">{job.company}</p>
            <h3
              className="text-white font-semibold text-sm mt-0.5"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {job.role}
            </h3>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5">
          {job.badge && (
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${job.badgeColor}`}>
              {job.badge}
            </span>
          )}
          <button
            onClick={() => setSaved(!saved)}
            className={`p-1.5 rounded-lg transition-colors ${
              saved ? "text-violet-400 bg-violet-400/10" : "text-slate-600 hover:text-slate-300"
            }`}
          >
            <Bookmark size={14} fill={saved ? "currentColor" : "none"} />
          </button>
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-3 mb-4 text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <MapPin size={11} className="text-violet-400" />
          {job.location}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={11} className="text-blue-400" />
          {job.type}
        </span>
        <span className="flex items-center gap-1">
          <DollarSign size={11} className="text-emerald-400" />
          {job.salary}
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-400 border border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-[var(--brand-border)]">
        <span className="text-xs text-slate-600">{job.posted}</span>
        <Button
          size="sm"
          className="bg-white/5 hover:bg-violet-600 text-slate-300 hover:text-white rounded-lg text-xs font-medium border-0 transition-all duration-200 h-7"
          endContent={<ArrowUpRight size={12} />}
        >
          Apply
        </Button>
      </div>
    </motion.div>
  );
}

export default function JobListingsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? jobs : jobs.filter((j) => j.category === active);

  return (
    <section id="jobs" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white mb-3"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Featured <span className="gradient-text">Openings</span>
            </h2>
            <p className="text-slate-400">
              Curated roles from top-tier companies looking for talent like you.
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-xs w-full">
            <Search
              size={14}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
              type="text"
              placeholder="Search roles..."
              className="w-full bg-white/5 border border-[var(--brand-border)] rounded-xl pl-9 pr-4 py-2.5 text-sm text-slate-300 placeholder-slate-600 outline-none focus:border-violet-500/60 transition-colors"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            />
          </div>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-violet-600 text-white shadow-lg"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Job cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((job, i) => (
            <JobCard key={`${job.company}-${job.role}`} job={job} index={i} />
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-10">
          <Button
            variant="bordered"
            size="lg"
            className="border-[var(--brand-border)] text-slate-400 hover:text-white hover:border-violet-500 rounded-xl font-medium"
          >
            View All Jobs
          </Button>
        </div>
      </div>
    </section>
  );
}