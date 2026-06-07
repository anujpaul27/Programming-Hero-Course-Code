import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserGroupIcon,
  BriefcaseIcon,
  ChartBarIcon,
  UsersIcon,
  Cog6ToothIcon,
  HomeIcon,
  BellIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const roles = [
  { id: "admin", label: "Admin", icon: Cog6ToothIcon, color: "rose" },
  { id: "seeker", label: "Job Seeker", icon: UserCircleIcon, color: "blue" },
  {
    id: "recruiter",
    label: "Recruiter",
    icon: BriefcaseIcon,
    color: "emerald",
  },
];

const Dashboard = () => {
  const [activeRole, setActiveRole] = useState("admin");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Mock user
  const user = {
    name: "Alex Chen",
    email: "alex@linkup.com",
    avatar: "https://i.pravatar.cc/150?u=alex",
    role: activeRole,
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
                  icon: UsersIcon,
                  change: "+12%",
                },
                {
                  label: "Active Jobs",
                  value: "843",
                  icon: BriefcaseIcon,
                  change: "+5%",
                },
                {
                  label: "Applications",
                  value: "3,291",
                  icon: ChartBarIcon,
                  change: "-2%",
                },
                {
                  label: "Companies",
                  value: "427",
                  icon: UserGroupIcon,
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
                    <stat.icon className="w-10 h-10 text-rose-400" />
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
              <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-gray-900 p-4 rounded-2xl"
                  >
                    <div className="w-10 h-10 bg-rose-500/20 rounded-full flex items-center justify-center">
                      <UsersIcon className="w-5 h-5 text-rose-400" />
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
                  <button className="mt-6 btn btn-primary rounded-full px-8">
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
                      <button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200">
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
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden">
      {/* Sidebar */}
      <motion.div
        initial={{ width: 280 }}
        animate={{ width: sidebarOpen ? 280 : 80 }}
        className="bg-gray-900 border-r border-gray-800 flex flex-col"
      >
        <div className="p-6 flex items-center gap-3 border-b border-gray-800">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center font-bold text-xl">
            L
          </div>
          <motion.span
            animate={{ opacity: sidebarOpen ? 1 : 0 }}
            className="text-2xl font-bold text-pink-400"
          >
            LinkUp
          </motion.span>
        </div>

        <div className="p-4">
          <div className="flex flex-col gap-1">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all ${
                  activeRole === role.id
                    ? `bg-${role.color}-600 text-white`
                    : "hover:bg-gray-800 text-gray-400 hover:text-white"
                }`}
              >
                <role.icon className="w-6 h-6" />
                <motion.span
                  animate={{ opacity: sidebarOpen ? 1 : 0 }}
                  className="font-medium"
                >
                  {role.label}
                </motion.span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto p-6 border-t border-gray-800">
          <button className="flex items-center gap-3 text-gray-400 hover:text-white w-full py-3 px-4 rounded-2xl hover:bg-gray-800">
            <Cog6ToothIcon className="w-6 h-6" />
            <span className={sidebarOpen ? "block" : "hidden"}>Settings</span>
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Top Navbar */}
        <nav className="bg-gray-900 border-b border-gray-800 px-8 py-4 flex items-center justify-between sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-800 rounded-xl"
            >
              <HomeIcon className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-semibold capitalize">
              {activeRole} Dashboard
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 border border-gray-700 pl-10 py-2.5 rounded-full w-80 focus:outline-none focus:border-pink-500"
              />
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-3.5 top-3 text-gray-500" />
            </div>

            <button className="relative p-3 hover:bg-gray-800 rounded-xl">
              <BellIcon className="w-6 h-6" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full"></span>
            </button>

            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/150?u=alex"
                alt="avatar"
                className="w-9 h-9 rounded-2xl object-cover border border-gray-700"
              />
              <div className="hidden md:block">
                <p className="font-medium">{user.name}</p>
                <p className="text-xs text-gray-500 -mt-1 capitalize">
                  {user.role}
                </p>
              </div>
            </div>
          </div>
        </nav>

        {/* Dashboard Content */}
        <div className="p-8">
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
      </div>
    </div>
  );
};

export default Dashboard;
