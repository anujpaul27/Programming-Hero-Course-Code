'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BriefcaseIcon, UploadIcon, LinkIcon, UserIcon } from "lucide-react";
import { useParams } from 'next/navigation';

export default function JobApplicationPage() {
  const params = useParams()
  const { id } = params;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resumeLink: "",
    portfolioLink: "",
    coverLetter: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.resumeLink.trim()) newErrors.resumeLink = "Resume link is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = {
      ...formData,
      jobId: id,
      appliedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/application/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to submit application");

      setSuccess(true);
      setFormData({
        fullName: "", email: "", phone: "", resumeLink: "", portfolioLink: "", coverLetter: ""
      });
    } catch (error) {
      console.error(error);
      setErrors({ submit: "Failed to submit application. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 p-6 lg:p-10">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white flex items-center gap-3">
            <BriefcaseIcon className="w-9 h-9 text-blue-400" />
            Apply for Position
          </h1>
          
        </motion.div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 bg-zinc-800 border rounded-2xl text-white ${errors.fullName ? 'border-red-500' : 'border-zinc-700 focus:border-blue-500'}`}
                  placeholder="John Doe"
                />
                <AnimatePresence>
                  {errors.fullName && <motion.p className="text-red-400 text-sm mt-1">{errors.fullName}</motion.p>}
                </AnimatePresence>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 bg-zinc-800 border rounded-2xl text-white ${errors.email ? 'border-red-500' : 'border-zinc-700 focus:border-blue-500'}`}
                  placeholder="you@example.com"
                />
                <AnimatePresence>
                  {errors.email && <motion.p className="text-red-400 text-sm mt-1">{errors.email}</motion.p>}
                </AnimatePresence>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Phone Number (Optional)</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-zinc-800 border border-zinc-700 rounded-2xl text-white focus:border-blue-500"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Resume Link */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Resume Link <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="url"
                  name="resumeLink"
                  value={formData.resumeLink}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 bg-zinc-800 border rounded-2xl text-white ${errors.resumeLink ? 'border-red-500' : 'border-zinc-700 focus:border-blue-500'}`}
                  placeholder="https://drive.google.com/your-resume.pdf"
                />
                <LinkIcon className="absolute right-4 top-4 text-zinc-500" size={20} />
              </div>
              <AnimatePresence>
                {errors.resumeLink && <motion.p className="text-red-400 text-sm mt-1">{errors.resumeLink}</motion.p>}
              </AnimatePresence>
              <p className="text-xs text-zinc-500 mt-1">Link to Google Drive, Dropbox, or any public URL</p>
            </div>

            {/* Portfolio Link */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Portfolio / GitHub Link (Optional)</label>
              <div className="relative">
                <input
                  type="url"
                  name="portfolioLink"
                  value={formData.portfolioLink}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-zinc-800 border border-zinc-700 rounded-2xl text-white focus:border-blue-500"
                  placeholder="https://yourportfolio.com or https://github.com/username"
                />
                <LinkIcon className="absolute right-4 top-4 text-zinc-500" size={20} />
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Cover Letter / Message (Optional)</label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows={6}
                className="w-full px-5 py-4 bg-zinc-800 border border-zinc-700 rounded-3xl text-white focus:border-blue-500 resize-y"
                placeholder="Why are you a good fit for this role?"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl text-lg shadow-xl disabled:opacity-70 flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting Application...
                </>
              ) : (
                "Submit Application"
              )}
            </motion.button>
          </form>

          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="mt-6 text-center py-6 px-8 bg-green-900/50 border border-green-500/30 text-green-400 rounded-2xl font-medium"
              >
                🎉 Application submitted successfully! We'll get back to you soon.
              </motion.div>
            )}
            {errors.submit && (
              <motion.p className="text-red-400 text-center mt-4">{errors.submit}</motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}