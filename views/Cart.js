import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Typography,
  TableContainer,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    margin: "150px",
    boxShadow: "2px 2px 2px 1px red",
  },
  cartPage: {
    fontWeight: "bolder",
  },
  checkout: {
    display: "flex",
    marginBottom: "20px",
    marginTop: "20px",
    justifyContent: "center",
  },
  checkoutBtn: {
    textDecoration: "none",
  },
});

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const classes = useStyles();
  let id = 1;

  useEffect(() => {
    async function getMyCart() {
      let cartDetails = await axios.get(
        `http://localhost:3000/api/orderdetails/${id}`
      );

      cartDetails = await cartDetails.data;
      //screen the data we are geting from backend
      //only put items in the cart details which has a quantity number
      cartDetails = cartDetails.filter((item) => item.quantity);
      setCart(cartDetails);
      const total = cartDetails.reduce(
        (total, item) => total + item.quantity * Number(item.Product.price),
        0
      );
      setTotal(total);
    }
    getMyCart();
    console.log("this is total", total);
  }, []);

  return (
    <div className={classes.root}>
      <Typography align="center" ariant="h2" className={classes.cartPage}>
        YOUR BASKET
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell>Your Stuff</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((row) => (
              <TableRow key={row.Product.description}>
                <TableCell>{row.Product.name}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.Product.price}</TableCell>
                <TableCell align="right">
                  {row.quantity * row.Product.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table>
          <TableCell align="right">TOTAL: {total}</TableCell>
        </Table>
      </TableContainer>
      <Link className={classes.checkoutBtn} to={`/checkout/${total}`}>
        <CardActionArea>
          <CardActions style={{ justifyContent: "center" }}>
            <Button
              className={classes.checkout}
              style={{ backgroundColor: "#12824C" }}
              size="large"
              variant="outlined"
            >
              Checkout
            </Button>
          </CardActions>
        </CardActionArea>
      </Link>
    </div>
  );
};

export default Cart;
