"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, MapPin, DollarSign, Trash2 } from "lucide-react";

const savedJobs = [
  { id: 1, title: "Senior Frontend Developer", company: "TechCorp", location: "Remote", salary: "120k-150k", saved: "3 days ago" },
  { id: 2, title: "Product Designer", company: "CreativeHub", location: "Dhaka", salary: "65k-90k", saved: "1 week ago" },
];

export default function SavedJobs() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Saved Jobs</h1>

      <div className="space-y-4">
        {savedJobs.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card bg-base-100 shadow-xl flex-row p-6 items-center"
          >
            <div className="flex-1">
              <h2 className="font-semibold text-lg">{job.title}</h2>
              <p className="text-base-content/70">{job.company}</p>
              <div className="flex gap-6 text-sm mt-3">
                <span className="flex items-center gap-1"><MapPin size={16} />{job.location}</span>
                <span className="flex items-center gap-1"><DollarSign size={16} />{job.salary}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="btn btn-primary">Apply Now</button>
              <button className="btn btn-ghost text-red-500"><Trash2 size={20} /></button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}