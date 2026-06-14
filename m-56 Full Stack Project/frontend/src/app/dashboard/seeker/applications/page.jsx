"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const applications = [
  { id: 1, title: "Senior Frontend Developer", company: "TechCorp", date: "2025-06-10", status: "Shortlisted" },
  { id: 2, title: "Full Stack Engineer", company: "InnovateLabs", date: "2025-06-08", status: "Under Review" },
  { id: 3, title: "UI/UX Designer", company: "PixelStudio", date: "2025-06-05", status: "Rejected" },
];

const statusColors = {
  "Shortlisted": "success",
  "Under Review": "warning",
  "Rejected": "error",
  "Applied": "info",
  "Offered": "primary",
};

export default function MyApplications() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">My Applications</h1>

      <div className="card bg-base-100 shadow-xl overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company</th>
              <th>Date Applied</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <motion.tr key={app.id} whileHover={{ backgroundColor: "#1f2937" }}>
                <td className="font-medium">{app.title}</td>
                <td>{app.company}</td>
                <td>{new Date(app.date).toLocaleDateString()}</td>
                <td>
                  <span className={`badge badge-${statusColors[app.status] || "ghost"}`}>
                    {app.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-ghost">View Details</button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}