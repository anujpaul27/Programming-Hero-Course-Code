"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, FileText, Calendar, Award, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const stats = [
  { label: "Saved Jobs", value: 12, icon: Briefcase, color: "primary" },
  { label: "Applications", value: 8, icon: FileText, color: "secondary" },
  { label: "Interviews", value: 3, icon: Calendar, color: "accent" },
  { label: "Offers", value: 1, icon: Award, color: "success" },
];

const pieData = [
  { name: "Applied", value: 45, color: "#3b82f6" },
  { name: "Under Review", value: 25, color: "#eab308" },
  { name: "Shortlisted", value: 15, color: "#22c55e" },
  { name: "Rejected", value: 10, color: "#ef4444" },
  { name: "Offered", value: 5, color: "#8b5cf6" },
];

export default function SeekerHome() {
  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold">Good morning, Alex 👋</h1>
        <p className="text-base-content/70 mt-2">
          Here what happening with your job search
        </p>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="card bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <div className="flex justify-between items-start">
                <stat.icon className={`w-10 h-10 text-${stat.color}`} />
                <span className="text-4xl font-bold">{stat.value}</span>
              </div>
              <p className="text-base-content/70 mt-4">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="card bg-base-100 shadow-xl lg:col-span-1">
          <div className="card-body items-center text-center">
            <div className="avatar mb-4">
              <div className="w-28 h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://i.pravatar.cc/300?u=seeker" alt="Profile" />
              </div>
            </div>
            <h2 className="text-2xl font-bold">Alex Rahman</h2>
            <p className="text-base-content/60">Full Stack Developer</p>
            <button className="btn btn-outline btn-sm mt-6">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Application Status Chart */}
        <div className="card bg-base-100 shadow-xl lg:col-span-2">
          <div className="card-body">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <TrendingUp /> Application Status
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={110}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="font-semibold text-lg mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[
              "Your application for Senior Frontend Developer at TechCorp was shortlisted",
              "New job alert: Full Stack Engineer at InnovateLabs",
              "Interview scheduled with PixelStudio on June 18",
            ].map((activity, i) => (
              <div key={i} className="flex gap-4 bg-base-200 p-4 rounded-2xl">
                <div className="w-2 h-2 mt-2 bg-primary rounded-full" />
                <div>
                  <p>{activity}</p>
                  <p className="text-xs text-base-content/60 mt-1">
                    2 hours ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
