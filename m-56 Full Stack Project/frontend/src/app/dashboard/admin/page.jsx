"use client";

import {
  BriefcaseIcon,
  ChartBarIcon,
  HomeIcon,
  SettingsIcon,
  UsersIcon,
  User2Icon,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const stats = [
    {
      label: "Total Users",
      value: "12,458",
      icon: UsersIcon,
      change: "+12%",
      color: "text-emerald-400",
    },
    {
      label: "Active Jobs",
      value: "843",
      icon: BriefcaseIcon,
      change: "+5%",
      color: "text-emerald-400",
    },
    {
      label: "Applications",
      value: "3,291",
      icon: ChartBarIcon,
      change: "-2%",
      color: "text-red-400",
    },
    {
      label: "Companies",
      value: "427",
      icon: User2Icon,
      change: "+18%",
      color: "text-emerald-400",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Navbar */}
      <nav className="bg-zinc-900 border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <label
            htmlFor="my-drawer"
            className="lg:hidden btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </label>
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="font-medium text-sm">Alex Chen</p>
              <p className="text-xs text-zinc-500">Admin</p>
            </div>
            <img
              src="https://i.pravatar.cc/150?u=alex"
              alt="avatar"
              className="w-9 h-9 rounded-full ring-2 ring-zinc-700"
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-4 hover:border-zinc-700 transition-all group"
            >
              <div className="flex justify-between items-start">
                <stat.icon className="w-4 h-4 text-blue-400" />
                <span className={`${stat.color} text-xs font-medium`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold mt-4 mb-1">{stat.value}</h3>
              <p className="text-zinc-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Placeholder for more content */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center text-zinc-500">
            More dashboard sections coming soon...
          </div>
        </div>
      </div>
    </div>
  );
}
