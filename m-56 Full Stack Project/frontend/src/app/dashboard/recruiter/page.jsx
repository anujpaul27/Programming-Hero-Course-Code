"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Clock, Award, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";

const stats = [
  { label: "Total Job Posts", value: 14, icon: Briefcase, color: "primary" },
  { label: "Total Applicants", value: 87, icon: Users, color: "secondary" },
  { label: "Active Jobs", value: 7, icon: Clock, color: "accent" },
  { label: "Jobs Closed", value: 7, icon: Award, color: "success" },
];

const barData = [
  { name: "UI Designer", applicants: 23 },
  { name: "Frontend Dev", applicants: 45 },
  { name: "Backend Eng", applicants: 19 },
  { name: "Product Mgr", applicants: 12 },
];

export default function RecruiterHome() {
  return (
    <div className="space-y-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-bold">Welcome back, Sarah 👋</h1>
        <p className="text-base-content/70 mt-2">Track your hiring progress</p>
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
              <div className="flex justify-between">
                <stat.icon className={`w-10 h-10 text-${stat.color}`} />
                <span className="text-4xl font-bold">{stat.value}</span>
              </div>
              <p className="text-base-content/70 mt-4">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Company Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <div className="w-24 h-24 rounded-2xl bg-base-200 flex items-center justify-center mb-4 overflow-hidden">
              <img src="https://logo.clearbit.com/innovatelabs.com" alt="Company" className="w-16 h-16" />
            </div>
            <h2 className="text-2xl font-bold">InnovateLabs</h2>
            <p className="text-base-content/60">Tech • 45 employees</p>
            <button className="btn btn-outline btn-sm mt-6">Edit Company</button>
          </div>
        </div>

        {/* Applicants Bar Chart */}
        <div className="card bg-base-100 shadow-xl lg:col-span-2">
          <div className="card-body">
            <h3 className="font-semibold text-lg flex items-center gap-2 mb-6">
              <TrendingUp /> Applicants per Job (Last 30 Days)
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="applicants" fill="#3b82f6" radius={8} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="font-semibold text-lg mb-6">Recent Applications</h3>
          <div className="space-y-4">
            {[
              "Rahim Khan applied for Senior Frontend Developer",
              "Nadia Islam applied for Product Designer",
              "Siam Ahmed applied for Backend Engineer",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-4 bg-base-200 p-5 rounded-2xl"
              >
                <div className="avatar">
                  <div className="w-10 h-10 rounded-full">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="" />
                  </div>
                </div>
                <div className="flex-1">
                  <p>{item}</p>
                  <p className="text-xs text-base-content/60">3 hours ago</p>
                </div>
                <button className="btn btn-sm btn-ghost">Review</button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}