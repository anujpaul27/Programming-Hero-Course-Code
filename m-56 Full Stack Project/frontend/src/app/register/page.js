"use client";
import React, { useState } from "react";
import {Select, Input, Label, ListBox, Spinner } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { authClient } from "../lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";

export default function DynamicTypes() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const searchParams = useSearchParams()
  const redirectTo = searchParams.get('redirect')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    obj.set = true;
    // Registration user with betterAuth
    const { data, error } = await authClient.signUp.email({
      email: obj.email,
      password: obj.password,
      name: obj.name,
      role: obj.role,
      set: obj.set,
      callbackURL: redirectTo,
    });

    if (error) {
      console.log(error.message);
    } else {
      router.push(redirectTo);
    }
    setStep(1); // Reset form
  };

  // Slide animation settings
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    }),
  };

  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <motion.div
        layout // Smoothly animates size changes of the card
        className="w-96 p-8  rounded-3xl shadow-2xl border border-gray-500 overflow-hidden"
      >
        {/* Step Indicator */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-semibold text-indigo-600 tracking-wider uppercase">
            Step {step} of 2
          </span>
          <div className="flex gap-1">
            <div
              className={`h-1.5 w-6 rounded-full transition-all duration-300 ${step >= 1 ? "bg-indigo-600" : "bg-slate-200"}`}
            />
            <div
              className={`h-1.5 w-6 rounded-full transition-all duration-300 ${step === 2 ? "bg-indigo-600" : "bg-slate-200"}`}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* AnimatePresence allows elements to animate while they are being removed from the DOM */}

          {/* Step 1 Container */}
          <div className={step === 1 ? "block" : "hidden"}>
            <motion.div
              key="step1"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate={step === 1 ? "center" : "exit"}
              exit="exit"
              className="flex flex-col gap-4 text-white"
            >
              <h2 className="text-xl font-bold text-white">Account Details</h2>
              <div className="flex flex-col gap-1">
                <Label htmlFor="input-type-email">Email</Label>
                <Input
                  name="email"
                  id="input-type-email"
                  placeholder="jane@example.com"
                  type="email"
                  required={step === 1}
                  className={"text-white"}
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="input-type-text">Name</Label>
                <Input
                  name="name"
                  id="input-type-text"
                  min={0}
                  placeholder="Enter you name"
                  type="text"
                  required={step === 1}
                  className={"text-white"}
                />
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-xl font-medium"
              >
                Next Step
              </button>
            </motion.div>
          </div>

          {/* Step 2 Container */}
          <div className={step === 2 ? "block" : "hidden"}>
            <motion.div
              key="step2"
              custom={-1}
              variants={slideVariants}
              initial="enter"
              animate={step === 2 ? "center" : "exit"}
              exit="exit"
              className="flex flex-col gap-4"
            >
              <h2 className="text-xl font-bold text-white">Security</h2>
              <div className="flex flex-col gap-1">
                <Label htmlFor="input-type-password">Password</Label>
                <Input
                  name="password"
                  id="input-type-password"
                  placeholder="••••••••"
                  type="password"
                  required={step === 2}
                  className={'rounded-2xl'}
                />
              </div>

              <Select name="role" className="w-full  text-white " placeholder="Select one">
                <Label>Role</Label>
                <Select.Trigger className={'bg-gray-700 text-gray-300'} >
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover className={'bg-gray-700 text-white hover:bg-gray-800 '} >
                  <ListBox>
                    <ListBox.Item id="seeker" textValue="Seeker">
                      Seeker
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="recruter" textValue="Recruter">
                      Recruter
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="admin" textValue="Admin">
                      Admin
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>

              {/* Back and Submit Buttons go here */}
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
          </div>
        </form>
      </motion.div>
    </div>
  );
}
