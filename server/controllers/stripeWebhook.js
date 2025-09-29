import stripe from "stripe";
import Booking from "../models/Booking.js";

// API to handle Stripe Webhooks
// POST /api/stripe
export const stripeWebhooks = async (request, response) => {
  const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);
  const sig = request.headers["stripe-signature"];

  let event;
  try {
    event = stripeInstance.webhooks.constructEvent(
      request.body, // must be raw buffer
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    console.log("✅ Event constructed:", event.type);
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }

  // ✅ Only run if event was constructed
  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object;
    const paymentIntentId = paymentIntent.id;

    const session = await stripeInstance.checkout.sessions.list({
      payment_intent: paymentIntentId,
    });

    if (session.data.length > 0) {
      const { bookingId } = session.data[0].metadata;
      await Booking.findByIdAndUpdate(bookingId, {
        isPaid: true,
        paymentMethod: "Stripe",
      });
    }
  } else {
    console.log("Unhandled event type:", event.type);
  }

  response.json({ received: true });
};