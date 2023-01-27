import stripe from "stripe";

export default defineEventHandler(async (event) => {
  const DOMAIN = "http://localhost:3001";

  const body = await readBody(event);
  const config = useRuntimeConfig();

  const stripeOb = new stripe(config.publishableKey, {
    apiVersion: "2022-11-15",
  });

  const { price, quantity} = body
  const session = await stripeOb.checkout.sessions.create({
    line_items: [
      {
        price,
        quantity
      },
    ],
    mode: "payment",
    success_url: `${DOMAIN}/success`,
    cancel_url: `${DOMAIN}/cancel`,
  });

  console.log("Session", session);

  if (!session) {
    return sendError(event, createError({
      statusCode: 404,
      statusMessage: "Session failed"
    }))
  }
  sendRedirect(event, session.url, 303);

  return {
    session,
  };
});
