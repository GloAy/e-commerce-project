import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { makeStyles } from "@material-ui/styles";
import { Button, Paper, Typography } from "@material-ui/core";

import axios from "axios";

const useStyles = makeStyles({
  paymentinfo: {
    padding: "40px 4%",
    margin: "80px 4% 60px 0",
    width: "60% !important",
    textAlign: "center",
    float: "left",
  },

  header: {
    marginBottom: "20px",
  },
  carBlock: {
    margin: "0 15px 40px",
    padding: 0,
    borderStyle: "none",
    backgroundColor: "#7795f8",
    borderRadius: "4px",
  },

  formBtn: {
    paddingTop: "20px",
    marginTop: "50px",
  },

  cardRow: {
    display: "flex",
    alignItems: "center",
    marginLeft: "15px",
    borderTop: "10px",
  },
  confirmation: {
    textAlign: "center",
  },
});

const PaymentForm = ({ total }) => {
  const [success, setsuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        console.log("this is total", total);
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:3000/api/payment", {
          amount: total,
          id: id,
        });
        if (response.data.success) {
          console.log("Payment was succesful");
          setsuccess(true);
        }
      } catch (error) {
        console.log("error", error.message);
      }
    }
  };

  return (
    <Paper className={classes.paymentinfo}>
      <Typography className={classes.header} component="h1" variant="h5">
        PAYMENT TIME
      </Typography>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset classname={classes.fieldset}>
            <div className={classes.formStyle}>
              <CardElement />
            </div>
          </fieldset>
          <Button
            style={{ backgroundColor: "#12824C" }}
            size="x-large"
            variant="outlined"
            type="submit"
            className="formBtn"
          >
            Pay
          </Button>
        </form>
      ) : (
        <Typography className={classes.confirmation}>
          <h2>Yuppiee! Your candle is on its way... Your total was {total}</h2>
        </Typography>
      )}
    </Paper>
  );
};

export default PaymentForm;
