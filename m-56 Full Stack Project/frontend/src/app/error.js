// app/error.tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="max-w-md text-center card bg-base-100 shadow-xl p-8 border border-base-300">
        {/* Error Icon / Indicator */}
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-error/10 text-error rounded-full">
            <svg xmlns="http://w3.org" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-3xl font-bold text-base-content mb-2">Something went wrong!</h1>
        <p className="text-base-content/70 mb-6">
          An unexpected runtime error occurred. Our team has been notified.
        </p>

        {/* Error Message Collapse Accordion */}
        {error.message && (
          <div className="collapse collapse-arrow bg-base-200 text-left mb-6 text-sm">
            <input type="checkbox" /> 
            <div className="collapse-title font-medium text-xs text-base-content/50">
              View Error Details
            </div>
            <div className="collapse-content overflow-x-auto">
              <code className="text-error bg-transparent p-0 break-all">{error.message}</code>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button 
            onClick={() => reset()} 
            className="btn btn-primary"
          >
            Try Again
          </button>
          <Link href="/" className="btn btn-outline">
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
