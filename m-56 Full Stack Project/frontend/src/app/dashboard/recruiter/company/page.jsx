"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Edit3, Building2, Plus, Upload, Loader2 } from "lucide-react";

export default function MyCompany() {
  // Simulate data state (In real app, fetch this data in useEffect from GET API)
  const [company, setCompany] = useState(null); 
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // loading state
  const [formData, setFormData] = useState({
    name: "",
    industry: "",
    location: "",
    employees: "",
    website: "",
    description: "",
    logo: "" // image link save area 
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ImageBB upload image for online image link
  const uploadImageToImgBB = async (file) => {
    const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
    if (!apiKey) {
      console.error("ImageBB API key is missing in environmental variables!");
      return null;
    }

    const bodyData = new FormData();
    bodyData.append("image", file);

    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: "POST",
        body: bodyData,
      });
      const result = await response.json();
      
      if (result.success) {
        return result.data.url; 
      } else {
        throw new Error(result.error.message || "Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading image to ImageBB:", error);
      alert("Image upload problem, please try again.");
      return null;
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsSubmitting(true);
    const uploadedUrl = await uploadImageToImgBB(file);
    setIsSubmitting(false);

    if (uploadedUrl) {
      setFormData((prev) => ({ ...prev, logo: uploadedUrl }));
    }
  };

  // Open Registration Form for New Company
  const handleStartRegistration = () => {
    setFormData({
      name: "",
      industry: "",
      location: "",
      employees: "",
      website: "",
      description: "",
      logo: ""
    });
    setIsEditing(true);
  };

  // Open Edit Mode for Existing Company
  const openEditMode = () => {
    if (!company) return;
    setFormData({
      name: company.name || "",
      industry: company.industry || "",
      location: company.location || "",
      employees: company.employees || "",
      website: company.website || "",
      description: company.description || "",
      logo: company.logo || ""
    });
    setIsEditing(true);
  };

  // Create New Company (POST API Call)
  const handleCreateCompany = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(formData);

    try {
      const response = await fetch("/api/company", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, status: "Pending" }),
      });

      const result = await response.json();

      if (response.ok) {
        setCompany({ ...formData, status: "Pending" });
        setIsEditing(false);
        alert("Company registration submitted! Status: Pending (Admin Approval)");
      } else {
        alert(result.message || "Registration failed!");
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("internal server error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Update Company (PUT/PATCH API Call)
  const handleUpdateCompany = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/company", {
        method: "PUT", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setCompany({ ...company, ...formData });
        setIsEditing(false);
        alert("Company information updated successfully!");
      } else {
        alert(result.message || "Update failed!");
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("Update Problem, please try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ====================== STEP 1: RENDER FORM (IF EDITING/REGISTING) ======================
  if (isEditing) {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Company</h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <h2 className="text-2xl font-bold mb-6">
              {company ? "Edit Company" : "Register New Company"}
            </h2>

            <form onSubmit={company ? handleUpdateCompany : handleCreateCompany} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label font-medium">Company Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label className="label font-medium">Industry</label>
                  <input
                    type="text"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label font-medium">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label className="label font-medium">Employee Count</label>
                  <input
                    type="text"
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="e.g. 45"
                  />
                </div>
              </div>

              <div>
                <label className="label font-medium">Website URL</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="https://example.com"
                />
              </div>

              {/* 📷 ImageBB File Upload Field */}
              <div>
                <label className="label font-medium">Company Logo</label>
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                    disabled={isSubmitting}
                  />
                  {formData.logo && (
                    <div className="w-14 h-14 border rounded-xl overflow-hidden bg-base-200 flex items-center justify-center">
                      <img src={formData.logo} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="label font-medium">Company Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  className="textarea textarea-bordered w-full"
                  required
                />
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="btn btn-ghost flex-1"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin" size={18} /> Processing...
                    </span>
                  ) : (
                    company ? "Update Company" : "Register Company"
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  // ====================== STEP 2: RENDER EMPTY STATE (IF NO COMPANY EXISTS) ======================
  if (!company) {
    return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Company</h1>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center py-16">
            <div className="mx-auto w-24 h-24 bg-base-200 rounded-3xl flex items-center justify-center mb-6">
              <Building2 size={48} className="text-base-content/50" />
            </div>

            <h2 className="text-3xl font-semibold mb-3">No Company Registered Yet</h2>
            <p className="text-base-content/70 mb-8 max-w-md mx-auto">
              Register your company to start posting jobs and receiving applications.
            </p>

            <button
              onClick={handleStartRegistration}
              className="btn btn-primary btn-lg gap-3"
            >
              <Plus size={24} />
              Register Company
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ====================== STEP 3: MAIN VIEW (IF COMPANY DETAILS EXIST) ======================
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">My Company</h1>
        <button onClick={openEditMode} className="btn btn-outline flex items-center gap-2">
          <Edit3 size={18} /> Edit Company
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="card bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-6">
                <div className="w-28 h-28 bg-base-200 rounded-3xl flex items-center justify-center overflow-hidden border border-base-300">
                  <img
                    src={company.logo || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=150&auto=format&fit=crop"}
                    alt="Company Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{company.name}</h2>
                  <span className={`badge badge-lg mt-2 font-medium ${company.status === "Approved" ? "badge-success text-white" : "badge-warning"}`}>
                    {company.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div>
                <p className="font-semibold text-sm opacity-60">Industry</p>
                <p className="text-lg text-base-content font-medium">{company.industry}</p>
              </div>
              <div>
                <p className="font-semibold text-sm opacity-60">Location</p>
                <p className="text-lg text-base-content font-medium">{company.location}</p>
              </div>
              <div>
                <p className="font-semibold text-sm opacity-60">Employees</p>
                <p className="text-lg text-base-content font-medium">
                  {company.employees ? `${company.employees}+ employees` : "Not provided"}
                </p>
              </div>
              <div>
                <p className="font-semibold text-sm opacity-60">Website</p>
                {company.website ? (
                  <a href={company.website} target="_blank" rel="noopener noreferrer" className="link link-primary text-lg font-medium block truncate">
                    {company.website}
                  </a>
                ) : (
                  <p className="text-lg text-base-content/50 italic">Not provided</p>
                )}
              </div>
            </div>

            <div className="mt-10 border-t border-base-200 pt-6">
              <p className="font-semibold text-sm opacity-60 mb-2">About the Company</p>
              <p className="text-base-content leading-relaxed whitespace-pre-line">
                {company.description}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}