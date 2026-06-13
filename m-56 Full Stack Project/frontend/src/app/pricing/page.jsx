"use client";
import React, { useState } from "react";
import { Check, X, Sparkles, HelpCircle, Briefcase, Users } from "lucide-react";
import { Button } from "@heroui/react";

export default function PricingPage() {
  // State to toggle between 'seeker' and 'recruiter'
  const [role, setRole] = useState("seeker");

  const pricingData = {
    seeker: [
      {
        name: "Starter Seeker",
        id: 'starter-seeker',
        price: "$10",
        description: "Perfect for testing out the HireLoop platform.",
        features: [
          { text: "Apply up to 3 jobs maximum", included: true },
          { text: "Basic profile visibility", included: true },
          { text: "Standard notifications", included: true },
          { text: "Direct messaging to HR/Recruiters", included: false },
          { text: "AI Resume feedback tool", included: false },
        ],
        buttonText: "Current Plan",
        buttonStyle:
          "bg-zinc-800 text-zinc-400 border border-zinc-700 cursor-not-allowed",
        popular: false,
      },
      {
        name: "Premium Seeker",
        id: 'premium-seeker',
        price: "$19",
        period: "/month",
        description:
          "Unlock infinite opportunities and stand out to top employers.",
        features: [
          { text: "Apply to unlimited jobs", included: true },
          { text: "Featured 'Premium' badge on profile", included: true },
          { text: "Priority application tracking", included: true },
          { text: "AI Resume feedback tool", included: true },
          { text: "Direct messaging to HR/Recruiters", included: true },
        ],
        buttonText: "Upgrade to Premium",
        buttonStyle:
          "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20",
        popular: true,
      },
    ],
    recruiter: [
      {
        name: "Starter Recruiter",
        id: 'recruiter-starter',
        price: "$49",
        period: "/month",
        description: "Ideal for small teams or startups looking to hire.",
        features: [
          { text: "Post up to 3 active job slots", included: true },
          { text: "Basic applicant management pipeline", included: true },
          { text: "Standard resume keyword search", included: true },
          { text: "Smart AI candidate matching", included: false },
          { text: "Premium badge on job posts", included: false },
        ],
        buttonText: "Get Started",
        buttonStyle:
          "bg-zinc-800 text-zinc-200 border border-zinc-600 hover:bg-zinc-700",
        popular: false,
      },
      {
        name: "Enterprise Recruiter",
        id: 'recruiter-enterprise',
        price: "$149",
        period: "/month",
        description: "Scale your workforce with high-volume pipelines.",
        features: [
          { text: "Post unlimited active job slots", included: true },
          { text: "Advanced applicant tracking pipeline", included: true },
          { text: "Smart AI candidate matching", included: true },
          { text: "Premium badge on job posts", included: true },
          { text: "Dedicated account manager support", included: true },
        ],
        buttonText: "Go Enterprise",
        buttonStyle:
          "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-500/20",
        popular: true,
      },
    ],
  };

  const faqs = [
    {
      q: "What happens when a job seeker hits the 3-job application limit?",
      a: "On the free tier, seekers are limited to 3 lifetime applications. Once used up, they must transition onto the Premium Seeker tier to submit more applications.",
    },
    {
      q: "Can I switch roles between Seeker and Recruiter plans?",
      a: "Your membership plan is tied directly to your HireLoop account role type. Recruiter privileges require a business profile creation.",
    },
    {
      q: "Can I cancel my billing subscription anytime?",
      a: "Yes. You can manage and cancel your monthly subscription natively through your dashboard billing hub whenever you prefer.",
    },
  ];

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8 selection:bg-blue-500 selection:text-white">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-clip-text text-transparent  from-zinc-100 to-zinc-400">
          Flexible Plans for HireLoop
        </h1>
        <p className="mt-4 text-lg text-zinc-400">
          Choose the right track tailored for your active job hunt or talent
          recruitment workflow.
        </p>
      </div>

      {/* Role Toggle Switch */}
      <div className="flex justify-center mb-16">
        <div className="bg-zinc-900 border border-zinc-800 p-1.5 rounded-xl flex items-center gap-2 relative">
          <button
            onClick={() => setRole("seeker")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              role === "seeker"
                ? "bg-blue-600 text-white shadow-md"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Briefcase className="w-4 h-4" /> Job Seeker
          </button>

          <button
            onClick={() => setRole("recruiter")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              role === "recruiter"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Users className="w-4 h-4" /> Recruiter
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-2 lg:gap-12 items-stretch mb-24">
        {pricingData[role].map((plan, index) => (
          <div
            key={index}
            className={`relative flex flex-col justify-between bg-zinc-900/60 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
              plan.popular
                ? role === "seeker"
                  ? "border-blue-500 ring-1 ring-blue-500/30 scale-105 shadow-xl shadow-blue-950/20"
                  : "border-emerald-500 ring-1 ring-emerald-500/30 scale-105 shadow-xl shadow-emerald-950/20"
                : "border-zinc-800 hover:border-zinc-700 hover:shadow-xl"
            }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <span
                className={`absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold tracking-wide uppercase px-4 py-1 rounded-full flex items-center gap-1 shadow-sm ${
                  role === "seeker" ? "bg-blue-600" : "bg-emerald-600"
                }`}
              >
                <Sparkles className="w-3 h-3" /> Most Popular
              </span>
            )}

            <div>
              {/* Plan Name & Pricing */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-zinc-100">
                  {plan.name}
                </h3>
                <p className="text-zinc-400 mt-2 text-sm  leading-relaxed">
                  {plan.description}
                </p>
                <div className="mt-4 flex items-baseline text-zinc-100">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="ml-1 text-lg font-medium text-zinc-500">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 border-t border-zinc-800/80 pt-6 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className=" mt-0.5">
                      {feature.included ? (
                        <Check
                          className={`h-4 w-4 ${role === "seeker" ? "text-blue-400" : "text-emerald-400"}`}
                        />
                      ) : (
                        <X className="h-4 w-4 text-zinc-600" />
                      )}
                    </div>
                    <p
                      className={`ml-3 text-sm ${feature.included ? "text-zinc-300" : "text-zinc-600 line-through"}`}
                    >
                      {feature.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <form action="/api/checkout_sessions" method="POST">
              <input type="hidden" name='pricing-id' value={plan.id} />
              <Button
                className={"btn btn-primary text-center "}
                type="submit"
                role="link"
              >
                Checkout
              </Button>
            </form>
          </div>
        ))}
      </div>

      {/* Mini FAQ Section */}
      <div className="max-w-3xl mx-auto border-t border-zinc-900 pt-16">
        <h2 className="text-2xl font-bold text-zinc-200 text-center mb-8 flex items-center justify-center gap-2">
          <HelpCircle className="text-zinc-400 w-5 h-5" /> Frequently Asked
          Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-900/40 border border-zinc-900 p-6 rounded-xl"
            >
              <h4 className="text-base font-semibold text-zinc-200">{faq.q}</h4>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
