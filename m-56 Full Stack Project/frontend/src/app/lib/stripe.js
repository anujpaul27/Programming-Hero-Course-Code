import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const priceList = {

    "starter-seeker": "price_1TheWECWl7arjzsl42rXt7pH",     // $10
    "premium-seeker": "price_1ThLISE903nf4X6sAt90JKKL",     // $19
    "recruiter-starter" : "price_1TheZqCWl7arjzslcgOFWIRp",     //$49
    "recruiter-enterprise": "price_1ThebVCWl7arjzsl501JEamU",   //$149
}