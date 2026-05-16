import { authClient } from "@/app/lib/auth-client";
import { Spinner } from "@heroui/react";
import React from "react";

const logOutPage = async () => {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        router.push("/login");
      },
    },
  });
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm">
      <Spinner size="lg" label="Loading..." color="primary" />
    </div>
  );
};

export default logOutPage;
