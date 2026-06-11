"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BriefcaseIcon,
  MapPinIcon,
  DollarSignIcon,
  UploadIcon,
} from "lucide-react";

export default function PostJobPage({ creator, creatorId }) {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    salaryMin: "",
    salaryMax: "",
    experience: "Mid Level",
    description: "",
    requirements: "",
    image: "", // ImageBB URL will be stored here
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrors({ image: "Please select a valid image file" });
      return;
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setErrors((prev) => ({ ...prev, image: "" }));
  };

  const uploadToImageBB = async (file) => {
    setIsUploading(true);
    const formDataImg = new FormData();
    formDataImg.append("image", file);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formDataImg,
        }
      );

      const data = await response.json();
      if (data.status === 200) {
        return data.data.url;
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error("ImageBB Error:", error);
      throw new Error("Failed to upload image");
    } finally {
      setIsUploading(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Job title is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.description.trim()) newErrors.description = "Job description is required";
    if (!formData.requirements.trim()) newErrors.requirements = "Requirements are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    let imageUrl = "";

    if (imageFile) {
      try {
        imageUrl = await uploadToImageBB(imageFile);
        console.log(imageUrl);
      } catch (err) {
        setErrors({ submit: "Image upload failed. Please try again." });
        setIsSubmitting(false);
        return;
      }
    }

    console.log(imageUrl);
    const payload = {
      ...formData,
      image: imageUrl,
      creator,
      creatorId,
    };

    console.log(payload);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to post job");

      const data = await response.json();
      console.log(data.jobPost);

      setSuccess(true);

      // Reset form
      // setFormData({
      //   title: "", company: "", location: "", type: "Full-time",
      //   salaryMin: "", salaryMax: "", experience: "Mid Level",
      //   description: "", requirements: "", image: ""
      // });
      setImagePreview(null);
      setImageFile(null);
      setErrors({});
    } catch (error) {
      console.error("Error:", error);
      setErrors({ submit: "Failed to submit job post. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 p-4 lg:p-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white flex items-center gap-3">
            <BriefcaseIcon className="w-9 h-9 text-blue-400" />
            Post a New Job
          </h1>
          <p className="text-zinc-400 mt-2">Create an attractive job posting for your company</p>
        </motion.div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* ==================== IMAGE UPLOAD ==================== */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Company / Job Image <span className="text-zinc-500">(Optional)</span>
              </label>
              <div className="border-2 border-dashed border-zinc-700 rounded-3xl p-8 hover:border-blue-500 transition-all text-center">
                {imagePreview ? (
                  <div className="relative inline-block">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-56 h-56 object-cover rounded-2xl shadow-lg"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImagePreview(null);
                        setImageFile(null);
                      }}
                      className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <>
                    <UploadIcon className="w-12 h-12 mx-auto text-zinc-500 mb-3" />
                    <p className="text-zinc-400 mb-2">Click to upload company logo or job image</p>
                  </>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="job-image"
                />
                <label
                  htmlFor="job-image"
                  className="mt-4 cursor-pointer btn btn-outline btn-sm border-zinc-600 hover:bg-zinc-800 px-6"
                >
                  Choose Image
                </label>
              </div>
              <AnimatePresence>
                {errors.image && (
                  <motion.p className="text-red-400 text-sm mt-2 text-center">
                    {errors.image}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* ==================== ORIGINAL FORM FIELDS ==================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-zinc-300 mb-2">Job Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 bg-zinc-800 border rounded-2xl focus:outline-none focus:ring-2 transition-all text-white placeholder:text-zinc-500
                    ${errors.title ? "border-red-500" : "border-zinc-700 focus:border-blue-500"}`}
                  placeholder="Senior Frontend Engineer"
                />
                <AnimatePresence>
                  {errors.title && <motion.p className="text-red-400 text-sm mt-1.5">{errors.title}</motion.p>}
                </AnimatePresence>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 bg-zinc-800 border rounded-2xl focus:outline-none focus:ring-2 transition-all text-white placeholder:text-zinc-500
                    ${errors.company ? "border-red-500" : "border-zinc-700 focus:border-blue-500"}`}
                  placeholder="LinkUp Inc."
                />
                <AnimatePresence>
                  {errors.company && <motion.p className="text-red-400 text-sm mt-1.5">{errors.company}</motion.p>}
                </AnimatePresence>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Location</label>
                <div className="relative">
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={`w-full px-5 py-3 bg-zinc-800 border rounded-2xl focus:outline-none focus:ring-2 transition-all text-white placeholder:text-zinc-500
                      ${errors.location ? "border-red-500" : "border-zinc-700 focus:border-blue-500"}`}
                    placeholder="New York, NY or Remote"
                  />
                  <MapPinIcon className="absolute right-4 top-4 text-zinc-500" size={20} />
                </div>
                <AnimatePresence>
                  {errors.location && <motion.p className="text-red-400 text-sm mt-1.5">{errors.location}</motion.p>}
                </AnimatePresence>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Job Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-zinc-800 border border-zinc-700 rounded-2xl focus:outline-none focus:border-blue-500 text-white"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Experience Level</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-zinc-800 border border-zinc-700 rounded-2xl focus:outline-none focus:border-blue-500 text-white"
                >
                  <option value="Entry Level">Entry Level</option>
                  <option value="Mid Level">Mid Level</option>
                  <option value="Senior Level">Senior Level</option>
                  <option value="Lead">Lead</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-zinc-300 mb-2">Salary Range (USD)</label>
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <DollarSignIcon className="absolute left-4 top-4 text-zinc-500" size={20} />
                    <input
                      type="text"
                      name="salaryMin"
                      value={formData.salaryMin}
                      onChange={handleChange}
                      className="w-full pl-12 pr-5 py-3 bg-zinc-800 border border-zinc-700 rounded-2xl focus:outline-none focus:border-blue-500 text-white"
                      placeholder="80,000"
                    />
                  </div>
                  <span className="text-zinc-500 self-center">to</span>
                  <div className="flex-1 relative">
                    <DollarSignIcon className="absolute left-4 top-4 text-zinc-500" size={20} />
                    <input
                      type="text"
                      name="salaryMax"
                      value={formData.salaryMax}
                      onChange={handleChange}
                      className="w-full pl-12 pr-5 py-3 bg-zinc-800 border border-zinc-700 rounded-2xl focus:outline-none focus:border-blue-500 text-white"
                      placeholder="120,000"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Job Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className={`w-full px-5 py-4 bg-zinc-800 border rounded-3xl focus:outline-none focus:ring-2 transition-all text-white placeholder:text-zinc-500 resize-y
                  ${errors.description ? "border-red-500" : "border-zinc-700 focus:border-blue-500"}`}
                placeholder="We are looking for a talented developer who..."
              />
              <AnimatePresence>
                {errors.description && <motion.p className="text-red-400 text-sm mt-1.5">{errors.description}</motion.p>}
              </AnimatePresence>
            </div>

            {/* Requirements */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Requirements & Skills</label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows={5}
                className={`w-full px-5 py-4 bg-zinc-800 border rounded-3xl focus:outline-none focus:ring-2 transition-all text-white placeholder:text-zinc-500
                  ${errors.requirements ? "border-red-500" : "border-zinc-700 focus:border-blue-500"}`}
                placeholder="• React, Next.js, TypeScript&#10;• 3+ years experience..."
              />
              <AnimatePresence>
                {errors.requirements && <motion.p className="text-red-400 text-sm mt-1.5">{errors.requirements}</motion.p>}
              </AnimatePresence>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting || isUploading}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all disabled:opacity-70 flex items-center justify-center gap-3"
            >
              {isSubmitting || isUploading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {isUploading ? "Uploading Image..." : "Posting Job..."}
                </>
              ) : (
                "Post Job Now"
              )}
            </motion.button>
          </form>

          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="mt-6 text-center py-4 px-6 bg-green-900/50 border border-green-500/30 text-green-400 rounded-2xl font-medium"
              >
                🎉 Job posted successfully!
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