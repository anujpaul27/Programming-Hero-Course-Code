// app/success/SuccessClient.jsx
"use client";

import Link from "next/link";

export default function SuccessClient({ session }) {
  const customerName = session?.customer_details?.name || "Customer";
  const customerEmail = session?.customer_details?.email;
  // Stripe amounts are in cents, so we divide by 100
  const totalAmount = session?.amount_total
    ? (session.amount_total / 100).toFixed(2)
    : "0.00";
  const currency = session?.currency?.toUpperCase() || "USD";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-2xl text-center border border-transparent dark:border-gray-700">
        {/* Success Icon */}
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30">
          <svg
            className="h-10 w-10 text-green-600 dark:text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Heading */}
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            Payment Successful!
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Thank you for your purchase, {customerName}.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="border-t border-b border-gray-200 dark:border-gray-700 py-4 my-6 text-left space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">
              Receipt sent to:
            </span>
            <span className="font-medium text-gray-900 dark:text-gray-200 break-all">
              {customerEmail}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">
              Total Paid:
            </span>
            <span className="font-bold text-gray-900 dark:text-white">
              {totalAmount} {currency}
            </span>
          </div>
          {session?.id && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">
                Order ID:
              </span>
              <span
                className="font-mono text-xs text-gray-400 dark:text-gray-500 max-w-5xl truncate"
                title={session.id}
              >
                {session.id}
              </span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div>
          <Link
            href="/"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
