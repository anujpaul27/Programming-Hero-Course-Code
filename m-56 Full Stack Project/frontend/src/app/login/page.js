"use client";

import React, { useState } from "react";
import { Input, Button, Spinner } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "../lib/auth-client";

export default function LoginForm() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState ("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const { email, password } = Object.fromEntries(formData.entries());

    console.log(email,password);

    // Better-Auth Sign-In call
    await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
      onRequest: () => {
        setIsLoading(true);
      },
      onSuccess: () => {
        setIsLoading(false);
        router.push("/dashboard");
      },
      onError: (ctx) => {
        setIsLoading(false);
        setError(ctx.error.message || "Invalid email or password.");
      },
    });
  };

  // Framer motion variants for fine-tuned orchestration
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-tr from-slate-950 via-zinc-900 to-neutral-950 px-4">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md p-8 rounded-3xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 shadow-2xl"
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-2 mb-8 text-center"
        >
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Welcome Back
          </h1>
          <p className="text-sm text-zinc-400">
            Enter your credentials to access your account
          </p>
        </motion.div>

        {/* Error Alert Display */}
        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.95 }}
              className="mb-4 p-3 bg-danger-500/10 border border-danger-500/30 text-danger-400 rounded-xl flex items-center gap-2 text-sm overflow-hidden"
            >
              <AlertCircle size={18} className="shrink-0" />
              <span>{error}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          {/* Email Field */}
          <motion.div variants={itemVariants}>
            <Input
              name="email"
              type="email"
              label="Email Address"
              placeholder="you@example.com"
              variant="bordered"
              labelPlacement="outside"
              required
              classNames={{
                inputWrapper:
                  "border-zinc-700 hover:border-zinc-500 focus-within:!border-indigo-500 h-12 bg-zinc-900/30",
                label: "text-zinc-300 font-medium",
                input: "text-white placeholder:text-zinc-500",
              }}
              startContent={<Mail className="text-zinc-500" size={18} />}
            />
          </motion.div>

          {/* Password Field */}
          <motion.div variants={itemVariants}>
            <Input
              name="password"
              label="Password"
              placeholder="••••••••"
              variant="bordered"
              labelPlacement="outside"
              type={isVisible ? "text" : "password"}
              required
              classNames={{
                inputWrapper:
                  "border-zinc-700 hover:border-zinc-500 focus-within:!border-indigo-500 h-12 bg-zinc-900/30",
                label: "text-zinc-300 font-medium",
                input: "text-white placeholder:text-zinc-500",
              }}
              startContent={<Lock className="text-zinc-500" size={18} />}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                  aria-label="toggle password visibility"
                >
                  {isVisible ? (
                    <EyeOff
                      className="text-zinc-500 hover:text-zinc-300 transition-colors"
                      size={18}
                    />
                  ) : (
                    <Eye
                      className="text-zinc-500 hover:text-zinc-300 transition-colors"
                      size={18}
                    />
                  )}
                </button>
              }
            />
          </motion.div>

          {/* Forget Password Anchor Link */}
          <motion.div
            variants={itemVariants}
            className="flex justify-end text-xs"
          >
            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-300 hover:underline transition-all"
            >
              Forgot password?
            </a>
          </motion.div>

          {/* Animated Interactive Submit Button */}
          <motion.div variants={itemVariants} className="mt-2">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/20 transition-all active:scale-[0.98]"
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
                    <Spinner color="current" size="sm" />
                    <span>Signing in...</span>
                  </motion.div>
                ) : (
                  <motion.span
                    key="text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Sign In
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </form>

        {/* Signup redirection footer */}
        <motion.p
          variants={itemVariants}
          className="text-center text-xs text-zinc-500 mt-6"
        >
          Do not have an account?{" "}
          <Link
            href="/register"
            className="text-zinc-300 hover:text-white font-medium hover:underline transition-colors"
          >
            Sign up
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
