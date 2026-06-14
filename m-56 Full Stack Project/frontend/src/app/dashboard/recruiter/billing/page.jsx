"use client";

import React from "react";

export default function Billing() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Subscription & Billing</h1>
      <div className="card bg-base-100 shadow-xl p-8">
        <h2 className="text-2xl font-bold">Growth Plan</h2>
        <p className="text-success">Active • 7 / 10 Active Jobs Used</p>
        <progress className="progress progress-primary w-full mt-4" value={70} max="100"></progress>
        <button className="btn btn-primary mt-8">Upgrade to Enterprise</button>
      </div>
    </div>
  );
}