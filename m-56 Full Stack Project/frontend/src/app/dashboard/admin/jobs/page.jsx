"use client";
import { motion, AnimatePresence } from "framer-motion";

const JobsPage = () => {
  return (
    <div className="space-y-8 lg:w-10/12 mx-auto mt-5 ">
      <h1 className="text-3xl text-center font-bold text-white">
        Find your Dream Job
      </h1>

      <div className="flex flex-col gap-6">
        {[
          "Frontend Developer",
          "Product Designer",
          "Software Engineer",
          "Marketing Manager",
        ].map((job, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 p-4 rounded-3xl hover:bg-gray-700 transition-all cursor-pointer"
          >
            <div className="flex justify-between">
              <h3 className=" font-semibold">{job}</h3>
              <span className="text-emerald-400 text-sm">New</span>
            </div>
            <p className="text-gray-400 mt-2">
              TechCorp • Remote • $85k - $110k
            </p>
            <button className="mt-4 btn btn-primary transition">
              Apply Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
