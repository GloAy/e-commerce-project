import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  shoppingcartimg: {
    minHeight: "auto",
    width: "100%",
    top: 0,
    left: 0,
    sizes: "(max-width:480px)45vw,45vw",
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <div>
      <img
        src={"https://candlebymelissa.s3.us-east-2.amazonaws.com/image+3.jpeg"}
        className={classes.shoppingcartimg}
        alt="Christmas Eggnog Candle"
      ></img>
    </div>
  );
};

export default Banner;
