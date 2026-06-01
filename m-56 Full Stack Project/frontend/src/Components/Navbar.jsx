"use client";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Zap, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Find Jobs", href: "#jobs" },
  { label: "For Companies", href: "#companies" },
  { label: "How it Works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className=" lg:w-10/12 md:w-10/11 w-full  mx-auto mt-3 rounded-full  top-0 left-0 right-0 z-50 border border-gray-600"
    >
      <div className="mx-auto max-w-7xl px-6 ">
        <div className="card-glass rounded-2xl px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center glow-purple">
              <Zap size={16} className="text-white" />
            </div>
            <span
              className="font-display font-700 text-lg text-white tracking-tight"
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
            >
              HireLoop
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-300 hover:text-white font-medium"
            >
              <Link href="/register">Sign In</Link>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold px-5 rounded-xl glow-purple border-0"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 card-glass rounded-2xl px-6 py-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-sm text-slate-300 hover:text-white border-b border-[var(--brand-border)] last:border-0"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 mt-4">
              <Button variant="ghost" size="sm" className="text-slate-300 flex-1">
                Sign In
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-violet-600 to-purple-700 text-white flex-1 rounded-xl border-0"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}