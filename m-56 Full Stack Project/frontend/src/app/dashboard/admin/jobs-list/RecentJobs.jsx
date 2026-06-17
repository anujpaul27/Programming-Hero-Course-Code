'use client';

import React, { useState, useEffect } from 'react';
import { BriefcaseIcon, MapPinIcon, ClockIcon, DollarSignIcon } from "lucide-react";
import Link from 'next/link';

export default function RecentJobs({jobsData,err}) {
  const [jobs, setJobs] = useState(jobsData);
  const [error, setError] = useState(err);

  
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <BriefcaseIcon className="w-5 h-5 text-blue-400" />
          Recent Job Postings
        </h2>
        <Link href="/jobs" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
          View All →
        </Link>
      </div>

      { error ? (
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
                <tr key={job._id} className="hover:bg-zinc-800/50 transition-colors">
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

      {jobs?.length === 0 && (
        <div className="text-center py-12 text-zinc-500">
          No recent jobs available
        </div>
      )}
    </div>
  );
}