import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/app/lib/stripe';
import { getUserServer } from '@/Components/share/getUser';


export async function POST() {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')
    const user = await getUserServer()

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      customer_email: user.email,
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price: 'price_1ThLISE903nf4X6sAt90JKKL',
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}