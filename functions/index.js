const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line
const stripe = require("stripe")(
// eslint-disable-next-line
  "sk_test_51KKlamSBgwgl8WP3fNmYUY57fPQkBBgYx1AXYv3fRB0VqyqTRXU5OLcpjdun1ZNCsY6VWOSFBqvHYjrFynMMTD6k00pl5x8KrG"
);

// API

// - App config
const app = express();

// - Middlewares
// eslint-disable-next-line
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) =>
  response.status(200).send("hello world!!!")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request:", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
