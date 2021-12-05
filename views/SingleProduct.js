import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import "regenerator-runtime/runtime";

const useStyles = makeStyles({
  main: {
    maxWidth: 450,
  },

  img: {
    height: 300,
    marginTop: "100px",
  },

  cardActions: {
    display: "flex",
    justifyContent: "space-evenly",
  },

  buttons: {
    display: "flex",
    justifyContent: "space-evenly",
  },

  addBtn: {
    textDecoration: "none",
  },
});

const SingleProduct = () => {
  const classes = useStyles();

  const { id } = useParams();
  //use params is used when you have a link
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(0);

  //hardcoding orderdetail id
  const orderDetail = { id: 1 };

  async function addToCart(e) {
    e.preventDefault();
    let addproduct = await axios.post(`http://localhost:3000/api/orderitems`, {
      quantity: count,
      productId: id,
      orderDetailId: orderDetail.id,
    });
  }

  useEffect(() => {
    async function fetchMyApi() {
      let singleProduct = await axios.get(
        `http://localhost:3000/api/products/${id}`
      );
      //console.log("this", singleProduct.data);
      singleProduct = singleProduct.data;
      setProduct(singleProduct);
    }
    fetchMyApi();
  }, []);

  return (
    <div className={classes.card}>
      <Card className={classes.main}>
        <CardActionArea>
          <CardMedia
            className={classes.img}
            alt={product.name}
            image={product.imageurl}
          />
        </CardActionArea>
        <CardContent>
          <Typography gutterbottom component="h1" variant="h4">
            {product.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
        <CardActions className={classes.cardActions}>
          <div className={classes.buttons}>
            <Button
              type="button"
              size="small"
              onClick={() => (count >= 1 ? setCount(count - 1) : setCount(0))}
            >
              -
            </Button>
            <Typography>&nbsp;{count}&nbsp;</Typography>
            <Button
              type="button"
              size="small"
              onClick={() => setCount(count + 1)}
            >
              +
            </Button>
          </div>

          <Button onClick={addToCart}>Add To Cart</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default SingleProduct;
