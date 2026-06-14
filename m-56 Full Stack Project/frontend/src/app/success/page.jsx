// app/success/page.jsx
import { redirect } from "next/navigation";
import { priceList, stripe } from "../lib/stripe";
import SuccessClient from "./SuccessClient";
import { auth } from "../lib/auth";
import { headers } from "next/headers";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    redirect("/");
  }

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["customer_details"],
  });

  if (session?.status === "open") {
    redirect("/");
  }

  if (session?.status === "complete") {
    const submissionInfo = {
      email: session?.customer_details.email,
      pricingId: session?.metadata.planId
    };

    // TODO: save to the DB who can parchase premium 

    await auth.api.updateUser({
      body: {
        memberStatus: session?.metadata.planId,
      },
      headers: await headers()
    })    
    
  }

  return <SuccessClient session={session} />;
}
