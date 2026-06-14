"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Edit3, Upload } from "lucide-react";

export default function MyCompany() {
  const [company, setCompany] = useState({
    name: "InnovateLabs",
    industry: "Software Development",
    location: "Dhaka, Bangladesh",
    employees: "45",
    website: "https://innovatelabs.com",
    description: "Building innovative digital solutions for the future.",
    status: "Approved"
  });

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">My Company</h1>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-6">
              <div className="w-28 h-28 bg-base-200 rounded-2xl flex items-center justify-center">
                <img src="https://logo.clearbit.com/innovatelabs.com" alt="Logo" className="w-20 h-20" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{company.name}</h2>
                <span className="badge badge-success badge-lg mt-2">{company.status}</span>
              </div>
            </div>
            <button className="btn btn-outline flex items-center gap-2">
              <Edit3 size={18} /> Edit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div>
              <p className="font-medium">Industry</p>
              <p className="text-base-content/70">{company.industry}</p>
            </div>
            <div>
              <p className="font-medium">Location</p>
              <p className="text-base-content/70">{company.location}</p>
            </div>
            <div>
              <p className="font-medium">Employees</p>
              <p className="text-base-content/70">{company.employees}+</p>
            </div>
            <div>
              <p className="font-medium">Website</p>
              <a href={company.website} className="link link-primary">{company.website}</a>
            </div>
          </div>

          <div className="mt-8">
            <p className="font-medium mb-2">About Company</p>
            <p className="text-base-content/70 leading-relaxed">{company.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}