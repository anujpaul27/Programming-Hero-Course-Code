'use client';

import React, { useState, useEffect } from 'react';
import { BriefcaseIcon, MapPinIcon, ClockIcon, DollarSignIcon } from "lucide-react";

export default function RecentJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/all`);
        
        if (!res.ok) throw new Error('Failed to load jobs');
        
        const payload = await res.json();
        const data = payload.jobPosts;
        setJobs(data.slice(0, 5)); // Show only latest 5 jobs on dashboard
      } catch (err) {
        console.error(err);
        setError("Failed to load recent jobs");
        
        // Mock data as fallback
        const mockJobs = [
          {
            id: 1,
            title: "Senior Frontend Developer",
            company: "LinkUp Inc.",
            location: "New York • Remote",
            type: "Full-time",
            salary: "120k - 160k",
            posted: "2d ago"
          },
          {
            id: 2,
            title: "Backend Engineer",
            company: "TechFlow",
            location: "San Francisco, CA",
            type: "Full-time",
            salary: "130k - 170k",
            posted: "3d ago"
          },
          {
            id: 3,
            title: "Product Designer",
            company: "PixelCraft",
            location: "Remote",
            type: "Full-time",
            salary: "90k - 125k",
            posted: "1w ago"
          }
        ];
        setJobs(mockJobs);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <BriefcaseIcon className="w-5 h-5 text-blue-400" />
          Recent Job Postings
        </h2>
        <a href="/jobs" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
          View All →
        </a>
      </div>

      {loading ? (
        <div className="py-12 flex justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      ) : error ? (
        <div className="text-red-400 text-center py-8">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full text-zinc-300">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left bg-zinc-900">Job Title</th>
                <th className="text-left bg-zinc-900">Company</th>
                <th className="text-left bg-zinc-900">Location</th>
                <th className="text-left bg-zinc-900">Type</th>
                <th className="text-left bg-zinc-900">Salary</th>
                <th className="text-left bg-zinc-900">Posted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-zinc-800/50 transition-colors">
                  <td className="font-medium text-white py-4">{job.title}</td>
                  <td className="py-4">{job.company}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-1.5">
                      <MapPinIcon size={16} className="text-zinc-500" />
                      {job.location}
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="badge badge-outline badge-sm border-blue-500/30 text-blue-400">
                      {job.type}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-1 text-emerald-400">
                      <DollarSignIcon size={16} />
                      {job.salary}
                    </div>
                  </td>
                  <td className="py-4 text-sm text-zinc-500">{job.posted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {jobs.length === 0 && !loading && (
        <div className="text-center py-12 text-zinc-500">
          No recent jobs available
        </div>
      )}
    </div>
  );
}