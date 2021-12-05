import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import { useParams } from "react-router-dom";

const PUBLIC_KEY =
  "pk_test_51K1DJCA0dIY4chyDMtCWfTnj6QYhZ6FihHm3edmKs2ai03MlRvxlTDc2DubPq6M915ruQa9OZJrpsvZCLNkGoEpD00ORo1V0pl";

const stripeSetUp = loadStripe(PUBLIC_KEY);

const Checkout = () => {
  const params = useParams();
  const { total } = params;
  return (
    <Elements stripe={stripeSetUp}>
      <PaymentForm total={total} />
    </Elements>
  );
};

export default Checkout;
