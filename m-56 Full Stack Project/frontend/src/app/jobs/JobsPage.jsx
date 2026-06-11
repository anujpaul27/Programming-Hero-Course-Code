"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  DollarSignIcon,
} from "lucide-react";
import Link from "next/link";

export default function JobsPage({allJobs,err}) {
  const [jobs, setJobs] = useState(allJobs);
  const [filteredJobs, setFilteredJobs] = useState(allJobs);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(err);


  // Filter & Search
  useEffect(() => {
    let result = [...jobs];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (job) =>
          job.title?.toLowerCase().includes(term) ||
          job.company?.toLowerCase().includes(term) ||
          job.location?.toLowerCase().includes(term),
      );
    }

    if (filterType !== "All") {
      result = result.filter((job) => job.type === filterType);
    }

    setFilteredJobs(result);
  }, [searchTerm, filterType, jobs]);

  return (
    <div className="w-11/12 mx-auto min-h-screen bg-zinc-950 p-6 lg:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold text-white flex items-center gap-3">
              <BriefcaseIcon className="w-9 h-9 text-blue-400" />
              Available Jobs
            </h1>
            <p className="text-zinc-400 mt-2">Discover your next opportunity</p>
          </div>

          <div className="mt-6 md:mt-0 flex gap-4">
            <input
              type="text"
              placeholder="Search jobs, companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input input-bordered bg-zinc-900 border-zinc-700 w-full md:w-80 focus:border-blue-500 text-white"
            />

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="select select-bordered bg-zinc-900 border-zinc-700 text-white focus:border-blue-500"
            >
              <option value="All">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
        </div>

        

        {error && !loading && (
          <div className="alert alert-error max-w-md mx-auto">
            <span>{error}</span>
          </div>
        )}

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredJobs.length > 0
              ? filteredJobs.map((job, index) => (
                  <motion.div
                    key={job._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-blue-500/50 hover:shadow-xl transition-all group"
                  >
                    <div className="p-7">
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-blue-400 font-medium mt-1">
                          {job.company}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3 mt-5 text-sm">
                        <div className="flex items-center gap-1.5 text-zinc-400">
                          <MapPinIcon size={16} />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1.5 text-zinc-400">
                          <ClockIcon size={16} />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1.5 text-emerald-400">
                          <DollarSignIcon size={16} />
                          {job.salaryMin}
                        </div>
                      </div>

                      <div className="mt-6 text-zinc-300 line-clamp-3 text-sm">
                        {job.description}
                      </div>

                      {/* Optional: Show Creator */}
                      {job.creator && (
                        <p className="text-xs text-zinc-500 mt-4">
                          Posted by: {job.creator}
                        </p>
                      )}

                      <div className="mt-6 flex gap-3">
                        <Link
                          href={`/jobs/${job._id}`}
                          className="flex-1 text-xs btn btn-sm btn-outline ..."
                        >
                          View Details
                        </Link>
                        <button className="flex-1 btn btn-sm text-xs bg-blue-600 hover:bg-blue-700 text-white">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              : !loading && (
                  <div className="col-span-full text-center py-20 text-zinc-400">
                    No jobs found matching your criteria.
                  </div>
                )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
