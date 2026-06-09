'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BriefcaseIcon, 
  MapPinIcon, 
  ClockIcon, 
  DollarSignIcon, 
  CalendarIcon 
} from "lucide-react";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/all`);
        
        if (!res.ok) throw new Error('Failed to fetch jobs');
        
        const payload = await res.json();
        const data = payload.jobPosts;
        setJobs(data);
        setFilteredJobs(data);
      } catch (err) {
        console.error(err);
        setError("Could not load jobs. Please try again later.");
        
        // Fallback mock data if API fails
        const mockJobs = [
          {
            id: 1,
            title: "Senior Frontend Developer",
            company: "LinkUp Inc.",
            location: "New York, NY (Remote)",
            type: "Full-time",
            salary: "120,000 - 160,000",
            experience: "Mid-Senior Level",
            posted: "2 days ago",
            description: "Looking for a passionate React/Next.js developer..."
          },
          {
            id: 2,
            title: "Backend Engineer",
            company: "TechFlow Solutions",
            location: "San Francisco, CA",
            type: "Full-time",
            salary: "130,000 - 170,000",
            experience: "Senior Level",
            posted: "1 week ago",
            description: "Node.js + PostgreSQL expert needed..."
          }
        ];
        setJobs(mockJobs);
        setFilteredJobs(mockJobs);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filter & Search
  useEffect(() => {
    let result = [...jobs];

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(job =>
        job.title?.toLowerCase().includes(term) ||
        job.company?.toLowerCase().includes(term) ||
        job.location?.toLowerCase().includes(term)
      );
    }

    // Type filter
    if (filterType !== 'All') {
      result = result.filter(job => job.type === filterType);
    }

    setFilteredJobs(result);
  }, [searchTerm, filterType, jobs]);

  return (
    <div className=" w-11/12 mx-auto min-h-screen bg-zinc-950 p-6 lg:p-10">
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

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="animate-spin w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="alert alert-error max-w-md mx-auto">
            <span>{error}</span>
          </div>
        )}

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 hover:border-blue-500/50 hover:shadow-xl transition-all group"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-blue-400 font-medium mt-1">{job.company}</p>
                    </div>
                    <span className="text-xs px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full border border-zinc-700">
                      {job.posted}
                    </span>
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
                      ${job.salary}
                    </div>
                  </div>

                  <div className="mt-6 text-zinc-300 line-clamp-3 text-sm">
                    {job.description}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button className="flex-1 text-xs btn btn-sm  btn-outline border-zinc-700 hover:bg-zinc-800 text-white">
                      View Details
                    </button>
                    <button className="flex-1 btn  btn-sm text-xs bg-blue-600 hover:bg-blue-700 text-white">
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              !loading && (
                <div className="col-span-full text-center py-20 text-zinc-400">
                  No jobs found matching your criteria.
                </div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}