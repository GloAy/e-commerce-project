import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, AppBar, Toolbar } from "@material-ui/core";

const useStyles = makeStyles({
  footerBar: {
    marginTop: "100px",
  },
  footer: {
    display: "flex",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="inherit" className={classes.footerBar}>
      <Toolbar>
        <Typography variant="body1" color="inherit">
          © 2021 CandlebyMelissa4U{" "}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
