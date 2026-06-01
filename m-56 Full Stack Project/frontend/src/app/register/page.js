'use client'
import React, { useState } from "react";
import { Input, Label, Spinner } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";

export default function DynamicTypes() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate a database/API call for 2.5 seconds
    await new Promise((resolve) => setTimeout(resolve, 2500));
    
    setIsLoading(false);
    alert("Form submitted successfully!");
    setStep(1); // Reset form
  };

  // Slide animation settings
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeInOut" }
    })
  };

  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <motion.div 
        layout // Smoothly animates size changes of the card
        className="w-96 p-8  rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
      >
        {/* Step Indicator */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-semibold text-indigo-600 tracking-wider uppercase">
            Step {step} of 2
          </span>
          <div className="flex gap-1">
            <div className={`h-1.5 w-6 rounded-full transition-all duration-300 ${step >= 1 ? 'bg-indigo-600' : 'bg-slate-200'}`} />
            <div className={`h-1.5 w-6 rounded-full transition-all duration-300 ${step === 2 ? 'bg-indigo-600' : 'bg-slate-200'}`} />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* AnimatePresence allows elements to animate while they are being removed from the DOM */}
          <AnimatePresence mode="wait" custom={step === 2 ? 1 : -1}>
            
            {step === 1 && (
              <motion.div
                key="step1"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col gap-4"
              >
                <h2 className="text-xl font-bold text-white">Account Details</h2>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="input-type-email">Email</Label>
                  <Input id="input-type-email" placeholder="jane@example.com" type="email" required />
                </div>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="input-type-number">Age</Label>
                  <Input id="input-type-number" min={0} placeholder="30" type="number" required />
                </div>
                
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setStep(2)}
                  className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-xl font-medium shadow-md shadow-indigo-100 transition-colors"
                >
                  Next Step
                </motion.button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                custom={-1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col gap-4"
              >
                <h2 className="text-xl font-bold text-slate-800">Security</h2>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="input-type-password">Password</Label>
                  <Input id="input-type-password" placeholder="••••••••" type="password" required />
                </div>

                <div className="flex gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    disabled={isLoading}
                    className="w-1/3 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition-colors disabled:opacity-50"
                  >
                    Back
                  </button>
                  
                  {/* Dynamic Submit Button with Loader */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileTap={!isLoading ? { scale: 0.97 } : {}}
                    whileHover={!isLoading ? { scale: 1.02 } : {}}
                    className="w-2/3 bg-slate-900 hover:bg-slate-800 text-white p-3 rounded-xl font-medium shadow-lg flex items-center justify-center gap-2 min-h-[48px] disabled:bg-slate-700"
                  >
                    <AnimatePresence mode="wait">
                      {isLoading ? (
                        <motion.div
                          key="loader"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2"
                        >
                          <Spinner color="white" size="sm" />
                          <span>Verifying...</span>
                        </motion.div>
                      ) : (
                        <motion.span
                          key="text"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Submit Profile
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </form>
      </motion.div>
    </div>
  );
}
