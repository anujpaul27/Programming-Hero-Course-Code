"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Briefcase, DollarSign, Heart, Plus } from "lucide-react";

const jobs = [
  { id: 1, title: "Senior Frontend Developer", company: "TechCorp", location: "Remote", salary: "120k-150k", type: "Full-time", posted: "2d ago" },
  { id: 2, title: "Full Stack Engineer", company: "InnovateLabs", location: "Dhaka", salary: "80k-110k", type: "Full-time", posted: "1d ago" },
  { id: 3, title: "UI/UX Designer", company: "PixelStudio", location: "Remote", salary: "70k-95k", type: "Contract", posted: "5h ago" },
];

export default function BrowseJobs() {
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Browse Jobs</h1>
        <div className="relative w-96">
          <Search className="absolute left-4 top-3 text-base-content/50" />
          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full pl-11"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <motion.div
            key={job.id}
            whileHover={{ scale: 1.02 }}
            className="card bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title">{job.title}</h2>
                <button className="btn btn-ghost btn-sm"><Heart size={20} /></button>
              </div>
              <p className="text-base-content/70">{job.company}</p>

              <div className="flex gap-4 text-xs mt-4">
                <div className="flex items-center gap-1"><MapPin size={16} /> {job.location}</div>
                <div className="flex items-center gap-1"><Briefcase size={16} /> {job.type}</div>
                <div className="flex items-center gap-1"><DollarSign size={16} /> {job.salary}</div>
              </div>

              <div className="card-actions mt-6 gap-2 ">
                <button onClick={() => handleApply(job)} className="btn btn-primary btn-xs flex-1">
                  Apply Now
                </button>
                <button className="btn btn-outline btn-xs flex-1">Save</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Apply Modal */}
      <AnimatePresence>
        {isModalOpen && selectedJob && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="card bg-base-100 w-full max-w-lg"
            >
              <div className="card-body">
                <h3 className="card-title">Apply for {selectedJob.title}</h3>
                <p className="text-base-content/70">{selectedJob.company}</p>

                <textarea
                  className="textarea textarea-bordered h-32 mt-4"
                  placeholder="Write a short cover message (optional)"
                />

                <div className="card-actions mt-6">
                  <button onClick={() => setIsModalOpen(false)} className="btn btn-ghost">Cancel</button>
                  <button className="btn btn-primary">Submit Application</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}