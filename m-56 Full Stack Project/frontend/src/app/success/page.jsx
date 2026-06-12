// app/success/page.jsx
import { redirect } from 'next/navigation';
import { stripe } from '../lib/stripe';
import SuccessClient from './SuccessClient';

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    redirect('/');
  }

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['customer_details'],
  });

  if (session.status === 'open') {
    redirect('/');
  }

  return <SuccessClient session={session} />;
}