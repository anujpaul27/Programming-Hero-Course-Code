"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, Briefcase, Heart, FileText, CreditCard, Settings, 
  LogOut, User 
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { href: "/dashboard/seeker", label: "Home", icon: Home },
  { href: "/dashboard/seeker/jobs", label: "Browse Jobs", icon: Briefcase },
  { href: "/dashboard/seeker/saved", label: "Saved Jobs", icon: Heart },
  { href: "/dashboard/seeker/applications", label: "My Applications", icon: FileText },
  { href: "/dashboard/seeker/billing", label: "Billing", icon: CreditCard },
  { href: "/dashboard/seeker/settings", label: "Settings", icon: Settings },
];

export default function SeekerLayout({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-base-200 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? "w-72" : "w-20"} bg-base-100 border-r border-base-300 transition-all duration-300`}>
        <div className="p-6 flex items-center gap-3 border-b border-base-300">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <User className="text-white" />
          </div>
          {sidebarOpen && <h2 className="font-bold text-xl">SeekerHub</h2>}
        </div>

        <nav className="p-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-all ${isActive ? "bg-primary text-white" : "hover:bg-base-200"}`}
              >
                <item.icon size={20} />
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-6 left-4 right-4">
          <button className="flex items-center gap-3 text-red-500 hover:bg-base-200 w-full px-4 py-3 rounded-xl">
            <LogOut size={20} />
            {sidebarOpen && "Logout"}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <header className="bg-base-100 border-b border-base-300 px-8 py-5 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="btn btn-ghost">
            ☰
          </button>
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-9 h-9 rounded-full">
                <img src="https://i.pravatar.cc/150?u=seeker" alt="Profile" />
              </div>
            </div>
            <div>
              <p className="font-medium">Alex Rahman</p>
              <p className="text-xs text-base-content/60">Premium Seeker</p>
            </div>
          </div>
        </header>

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}