"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Save } from "lucide-react";

export default function Settings() {
  const [form, setForm] = useState({
    name: "Alex Rahman",
    email: "alex@example.com",
    headline: "Full Stack Developer",
    bio: "Passionate about building great user experiences.",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Settings</h1>

      <div className="card bg-base-100 shadow-xl max-w-2xl">
        <div className="card-body">
          <div className="avatar mb-6">
            <div className="w-28 h-28 rounded-full ring ring-primary">
              <img src="https://i.pravatar.cc/300?u=seeker" alt="Profile" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label">Full Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="input input-bordered w-full" />
            </div>
            <div>
              <label className="label">Email</label>
              <input name="email" value={form.email} onChange={handleChange} className="input input-bordered w-full" />
            </div>
          </div>

          <div>
            <label className="label">Headline</label>
            <input name="headline" value={form.headline} onChange={handleChange} className="input input-bordered w-full" />
          </div>

          <div>
            <label className="label">Bio</label>
            <textarea name="bio" value={form.bio} onChange={handleChange} rows={4} className="textarea textarea-bordered w-full" />
          </div>

          <div className="mt-6">
            <label className="label">Upload Resume (PDF)</label>
            <div className="border border-dashed border-base-300 rounded-2xl p-8 text-center">
              <Upload className="mx-auto mb-3" />
              <p>Drag & drop or click to upload</p>
            </div>
          </div>

          <button className="btn btn-primary mt-8 w-full flex items-center gap-2">
            <Save size={20} /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}