"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PostNewJob() {
  const [form, setForm] = useState({
    title: "",
    type: "Full-time",
    location: "",
    salaryMin: "",
    salaryMax: "",
    deadline: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Job posted successfully! (Demo)");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Post New Job</h1>

      <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl">
        <div className="card-body space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label">Job Title</label>
              <input type="text" className="input input-bordered w-full" required />
            </div>
            <div>
              <label className="label">Job Type</label>
              <select className="select select-bordered w-full">
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Remote</option>
                <option>Contract</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="label">Location</label>
              <input type="text" placeholder="Dhaka or Remote" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="label">Salary Min</label>
              <input type="text" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="label">Salary Max</label>
              <input type="text" className="input input-bordered w-full" />
            </div>
          </div>

          <div>
            <label className="label">Job Description</label>
            <textarea className="textarea textarea-bordered w-full h-48" placeholder="Responsibilities and requirements..." required></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-lg w-full">
            Publish Job
          </button>
        </div>
      </form>
    </div>
  );
}