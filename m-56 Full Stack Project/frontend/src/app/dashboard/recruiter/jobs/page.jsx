"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, Edit, Users, Trash2 } from "lucide-react";

const jobs = [
  { id: 1, title: "Senior Frontend Developer", status: "Active", applicants: 45, posted: "Jun 10" },
  { id: 2, title: "Product Designer", status: "Active", applicants: 23, posted: "Jun 8" },
  { id: 3, title: "Backend Engineer", status: "Closed", applicants: 19, posted: "May 28" },
];

export default function ManageJobs() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Manage Jobs</h1>
        <Link href="/dashboard/recruiter/jobs/new" className="btn btn-primary flex items-center gap-2">
          <Plus size={20} /> Post New Job
        </Link>
      </div>

      <div className="card bg-base-100 shadow-xl overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Status</th>
              <th>Applicants</th>
              <th>Posted</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <motion.tr key={job.id} whileHover={{ backgroundColor: "#1f2937" }}>
                <td className="font-medium">{job.title}</td>
                <td>
                  <span className={`badge ${job.status === "Active" ? "badge-success" : "badge-neutral"}`}>
                    {job.status}
                  </span>
                </td>
                <td>{job.applicants}</td>
                <td>{job.posted}</td>
                <td>
                  <div className="flex gap-2">
                    <Link href={`/dashboard/recruiter/jobs/${job.id}/applicants`} className="btn btn-sm btn-ghost">
                      <Users size={18} />
                    </Link>
                    <button className="btn btn-sm btn-ghost"><Edit size={18} /></button>
                    <button className="btn btn-sm btn-ghost text-red-500"><Trash2 size={18} /></button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}