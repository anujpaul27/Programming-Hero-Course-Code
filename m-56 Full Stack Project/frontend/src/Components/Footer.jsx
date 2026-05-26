"use client";
import { IconPlus } from "@heroui/react";
import {     ZapIcon } from "lucide-react";

const footerLinks = {
  Product: ["Find Jobs", "For Companies", "Pricing", "How It Works", "API"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Resources: ["Documentation", "Help Center", "Community", "Changelog", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
};

// const socials = [
//   { Icon: Twitter, href: "#" },
//   { Icon: Linkedin, href: "#" },
//   { Icon: Github, href: "#" },
//   { Icon: Mail, href: "#" },
// ];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--brand-border)] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center glow-purple">
                <ZapIcon size={16} className="text-white" />
              </div>
              <span
                className="font-bold text-lg text-white"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                HireLoop
              </span>
            </a>
            <p
              className="text-slate-500 text-sm leading-relaxed mb-5 max-w-xs"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              AI-powered job matching that connects talent with opportunity — faster and smarter than ever before.
            </p>
            {/* Socials
            <div className="flex items-center gap-2">
              {socials.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-violet-600/20 hover:text-violet-400 flex items-center justify-center text-slate-500 transition-all duration-200"
                >
                  <IconPlus size={14} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p
                className="text-white font-semibold text-sm mb-4"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {section}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--brand-border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
            © 2026 HireLoop, Inc. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm flex items-center gap-1.5">
            Made with
            <span className="text-violet-500">♥</span>
            for job seekers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}