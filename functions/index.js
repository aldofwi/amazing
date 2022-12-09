const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len, no-unused-vars
const stripe = require("stripe")("sk_test_51L5uY2Aa1NOGB95Za3qWjwk61k9J043aqFIfMjElhCfpDGcsSZk2HImdPR3tN8NEFAJhfjDPnoE2kBkQmPKLvkIv004vqreuMD");

// API

// APP CONFIG
const app = express();

// MIDDLEWARES
app.use(cors({origin: true}));
app.use(express.json());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

// API ROUTES (requestParams also works)
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request received BOOM! For this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunite of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// LISTEN COMMANDS
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/amazing-16b7c/us-central1/api
