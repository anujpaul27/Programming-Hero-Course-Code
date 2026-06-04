"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { authClient } from "../lib/auth-client";

const Dashboard = () => {
  const { data, isPending, error } = authClient.useSession();
  const [activeRole, setActiveRole] = useState(data?.user?.role);

  useEffect(() => {
    if (data?.user?.role) {
      setActiveRole(data.user.role);
    }
  }, [data]);

  if (isPending) {
    return (
      <div class="h-screen w-screen flex justify-center items-center">
        <span class="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // Inline SVG Icons
  const Icons = {
    Cog: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 002.573-1.066c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 00.817 1.194 1.724 1.724 0 01.817 1.194c-.94 1.543.827 3.31 2.37 2.37 1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 01-2.573 1.066 1.724 1.724 0 01-.817 1.194 1.724 1.724 0 01-.817 1.194c-.94 1.543.827 3.31 2.37 2.37 1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 01-2.573 1.066 1.724 1.724 0 01-.817 1.194 1.724 1.724 0 01-.817 1.194c-.94 1.543.827 3.31 2.37 2.37a1.724 1.724 0 01-.817 1.194z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    Users: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 01-5.356-1.857M17 20H7m5-2v-2c0-.656-.126-1.284-.356-1.852M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.284.356-1.852m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    Briefcase: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 13V6a2 2 0 00-2-2H5a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5m16 0h-4a2 2 0 01-2-2v-1a2 2 0 00-2-2H9a2 2 0 00-2 2v1a2 2 0 01-2 2H3"
        />
      </svg>
    ),
    ChartBar: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7h8m0 0v8m0-8l-9 9-4-4-6 6"
        />
      </svg>
    ),
    UserGroup: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 01-5.356-1.857M17 20H7m5-2v-2c0-.656-.126-1.284-.356-1.852M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.284.356-1.852m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    Home: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1v-5m10-10l2 2m-2-2v10a1 1 0 01-1 1v-5m-6 0a1 1 0 001-1v5"
        />
      </svg>
    ),
    Bell: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-9-5.197V8.5m.002 3.5L12 15l-1.998-3.5"
        />
      </svg>
    ),
    Search: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 01-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    UserCircle: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7"
        />
      </svg>
    ),
  };

  const getRoleContent = () => {
    switch (activeRole) {
      case "admin":
        return (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  label: "Total Users",
                  value: "12,458",
                  icon: Icons.Users,
                  change: "+12%",
                },
                {
                  label: "Active Jobs",
                  value: "843",
                  icon: Icons.Briefcase,
                  change: "+5%",
                },
                {
                  label: "Applications",
                  value: "3,291",
                  icon: Icons.ChartBar,
                  change: "-2%",
                },
                {
                  label: "Companies",
                  value: "427",
                  icon: Icons.UserGroup,
                  change: "+18%",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-800 rounded-3xl p-6 hover:bg-gray-700 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <stat.icon />
                    <span className="text-emerald-400 text-sm font-medium">
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold text-white mt-6">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gray-800 rounded-3xl p-8">
              <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-gray-900 p-4 rounded-2xl"
                  >
                    <div className="w-10 h-10 bg-rose-500/20 rounded-full flex items-center justify-center">
                      <Icons.Users className="w-5 h-5 text-rose-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white">New user registered</p>
                      <p className="text-sm text-gray-500">2 minutes ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "seeker":
        return (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-white">
              Job Seeker Dashboard
            </h1>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-white">
              <h2 className="text-3xl font-bold">Recommended Jobs for You</h2>
              <p className="mt-2 opacity-90">
                Based on your profile and preferences
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Frontend Developer",
                "Product Designer",
                "Software Engineer",
                "Marketing Manager",
              ].map((job, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800 p-6 rounded-3xl hover:bg-gray-700 transition-all cursor-pointer"
                >
                  <div className="flex justify-between">
                    <h3 className="text-xl font-semibold">{job}</h3>
                    <span className="text-emerald-400 text-sm">New</span>
                  </div>
                  <p className="text-gray-400 mt-2">
                    TechCorp • Remote • $85k - $110k
                  </p>
                  <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition">
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "recruiter":
        return (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-white">
              Recruiter Dashboard
            </h1>
            <div className="flex gap-6 flex-wrap">
              <div className="flex-1 min-w-[300px] bg-gray-800 rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-4">Active Job Posts</h3>
                <p className="text-6xl font-bold text-emerald-400">12</p>
                <p className="text-gray-400">Posted this month</p>
              </div>
              <div className="flex-1 min-w-[300px] bg-gray-800 rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Total Applications
                </h3>
                <p className="text-6xl font-bold text-rose-400">87</p>
                <p className="text-gray-400">Waiting for review</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-3xl p-8">
              <h2 className="text-2xl font-semibold mb-6">
                Recent Applications
              </h2>
              <div className="space-y-4">
                {["Sarah Chen", "Michael Torres", "Priya Sharma"].map(
                  (name, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-gray-900 p-5 rounded-2xl"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full" />
                        <div>
                          <p className="font-medium">{name}</p>
                          <p className="text-sm text-gray-500">
                            Senior React Developer
                          </p>
                        </div>
                      </div>
                      <button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition">
                        Review
                      </button>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-8 lg:w-10/12 mx-auto  ">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeRole}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
        >
          {getRoleContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
