"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  DollarSignIcon,
  CalendarIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

export default function JobDetailsPage({ job, error }) {
  if (error || !job) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-400">
            {error || "Job Not Found"}
          </h2>
          <p className="text-zinc-400 mt-2">
            The job your looking for dont exist.
          </p>
        </div>
      </div>
    );
  }

  const salaryRange =
    job.salaryMin && job.salaryMax
      ? `$${job.salaryMin} - $${job.salaryMax}`
      : job.salary || "Not specified";

  return (
    <div className="min-h-screen bg-zinc-950 pb-12">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
        >
          ← Back to Jobs
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden"
        >
          {/* Header Image */}
          {job.image && (
            <div className="relative h-80 w-full">
              <img
                src={job.image}
                alt={job.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent" />
            </div>
          )}

          <div className="p-8 lg:p-12">
            {/* Job Title & Company */}
            <div>
              <h1 className="text-4xl font-bold text-white">{job.title}</h1>
              <p className="text-2xl text-blue-400 mt-2">{job.company}</p>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mt-8 text-sm">
              <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-2xl">
                <MapPinIcon size={18} className="text-zinc-400" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-2xl">
                <ClockIcon size={18} className="text-zinc-400" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-2xl">
                <DollarSignIcon size={18} className="text-emerald-400" />
                <span className="text-emerald-400 font-medium">
                  {salaryRange}
                </span>
              </div>
              {job.experience && (
                <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-2xl">
                  <BriefcaseIcon size={18} className="text-zinc-400" />
                  <span>{job.experience}</span>
                </div>
              )}
            </div>

            {/* Posted By */}
            {job.creator && (
              <div className="mt-6 flex items-center gap-2 text-sm text-zinc-400">
                <UserIcon size={16} />
                Posted by: <span className="text-zinc-300">{job.creator}</span>
              </div>
            )}

            {/* Description */}
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <div className="text-zinc-300 leading-relaxed whitespace-pre-line">
                {job.description}
              </div>
            </div>

            {/* Requirements */}
            {job.requirements && (
              <div className="mt-12">
                <h2 className="text-xl font-semibold mb-4">
                  Requirements & Skills
                </h2>
                <div className="flex gap-2 flex-wrap">
                  {job?.requirements?.map((value, index) => (
                    <p key={index} className="badge">
                      {value}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Apply Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-12 w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl text-xl shadow-xl shadow-blue-500/30 hover:shadow-2xl transition-all"
            >
              <Link href={`${job._id}/apply`}>Apply for this Position</Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
