"use client";

import { authClient } from "@/app/lib/auth-client";
import { Spinner } from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const LogOutPage = () => {
  const router = useRouter();

  useEffect(() => {
    const performSignOut = async () => {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/login");
          },
        },
      });
    };

    performSignOut();
  }, [router]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm">
      <Spinner size="lg" label="Logging out..." color="primary" />
    </div>
  );
};

export default LogOutPage;
