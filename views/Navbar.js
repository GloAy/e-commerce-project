import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from "@material-ui/core";



const useStyles = makeStyles({
  root: {
    display: "flex",
    padding: "1em",
  },

  toolBar: {
    display: "flex",
    padding: 0,
    flex: 3,
    margin: 0,
  },
  grow: {
    flex: 1,
  },
  shopmenu: {
    marginRight: "30px",
  },

  shopLink: {
    textDecoration: "none",
    color: "rgba(0, 0, 0, 0.87)",
    textTransform: "uppercase",
  },

  aboutUsLink: {
    textDecoration: "none",
    color: "rgba(0, 0, 0, 0.87)",
    textTransform: "uppercase",
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="relative" className={classes.root} color="inherit">
        <Toolbar className={classes.toolBar}>
          <Link to="/">
            <img
              src={
                "https://candlebymelissa.s3.us-east-2.amazonaws.com/logo.jpg"
              }
              height="100px"
              alt="CandleByMelissa4U Logo"
            ></img>
          </Link>
          <div className={classes.grow}></div>

          <Link className={classes.shopLink} to="/products">
            <Typography className={classes.shopmenu}>Shop</Typography>
          </Link>
          <Link className={classes.aboutUsLink} to="/aboutus">
            <Typography >About Us</Typography>
          </Link>
          <Link  to="/cart">
            <IconButton aria-label="Order details" color="inherit">
              <img
                src={
                  "https://candlebymelissa.s3.us-east-2.amazonaws.com/shoppingcart.png"
                }
                height="50px"
                alt="Shopping Cart Icon"
              ></img>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
