import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  headerText: {
    display: "flex",
    textAlign: "center",
    marginTop: "15%",
    marginBottom: "5%",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" color="inherit" className={classes.headerText}>
        All I want for Chritmas is Christmas Eggnog Candle
      </Typography>
    </>
  );
};

export default Header;
