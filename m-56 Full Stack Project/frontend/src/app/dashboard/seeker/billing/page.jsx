"use client";

import React from "react";
import { motion } from "framer-motion";
import { Crown, CreditCard } from "lucide-react";

export default function Billing() {
  const currentPlan = "Premium Seeker";
  const used = 7;
  const limit = 15;

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Subscription & Billing</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Current Plan */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-3">
              <Crown className="text-yellow-500" size={32} />
              <div>
                <h2 className="text-2xl font-bold">{currentPlan}</h2>
                <p className="text-success">Active</p>
                <p className="text-primary ">User</p>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex justify-between text-sm mb-2">
                <span>Applications this month</span>
                <span>{used} / {limit}</span>
              </div>
              <progress className="progress progress-primary w-full" value={used} max={limit}></progress>
            </div>

            <button className="btn btn-primary mt-8 w-full">Upgrade Plan</button>
          </div>
        </div>

        {/* Payment History */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="font-semibold text-lg mb-4">Payment History</h3>
            <div className="space-y-4">
              {[
                { date: "Jun 1, 2025", plan: "Premium", amount: "$29" },
                { date: "May 1, 2025", plan: "Premium", amount: "$29" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-base-200 rounded-2xl">
                  <div>
                    <p>{item.date}</p>
                    <p className="text-sm text-base-content/60">{item.plan}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{item.amount}</p>
                    <p className="text-xs text-success">Paid</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}