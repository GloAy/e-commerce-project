import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  textOne: {
    marginTop: "50px",
  },
  textTwo: {
    marginTop: "20px",
  },
  textThree: {
    marginTop: "20px",
    marginBottom: "60px",
  },
  banner: {
    marginTop: "90px",
    minHeight: "auto",
    width: "100%",
    top: 0,
    left: 0,
    sizes: "(max-width:480px)45vw,45vw",
  },
});

const AboutUs = () => {
  const classes = useStyles();
  return (
    <div>
      <img
        src={"https://candlebymelissa.s3.us-east-2.amazonaws.com/header.jpg"}
        className={classes.banner}
        alt="Christmas Eggnog Candle"
      ></img>
      <Typography variant="h5" className={classes.textOne}>
        All of my candles are handcrafted in Brooklyn, New York in small batches
        hand-crafted with love in New York from start to finish using best
        quality ingredients – 100% soy wax, phthalate-free fragrance and
        essential oils, and clean burning crackling wooden wick
      </Typography>
      <Typography variant="h5" className={classes.textTwo}>
        Decorative vegan candles inspired by natural elements, we feature a
        minimalistic and uniquely elegant look. Natural Kraft paper labels
        portrait hand-drawn botanical designs. The recyled glass jar amplifies
        the candle flame to create a magical light,reminiscent to golden hour,
        for a tasteful look of natural simplicity.
      </Typography>
      <Typography variant="h5" className={classes.textThree}>
        you for making time to visit my shop! Please get in touch with any
        concerns and questions. I would love to hear from you.
      </Typography>
    </div>
  );
};

export default AboutUs;
