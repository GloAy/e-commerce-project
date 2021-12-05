import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  CardActionArea,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: "100px",
  },

  media: {
    height: 300,
  },

  productContent: {
    display: "flex",
    justifyContent: "flex-end",
  },

  productLink: {
    textDecoration: "none",
    color: "rgba(0, 0, 0, 0.87)",
  },
  spContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
});

const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.imageurl}
            title={product.name}
          >
            {" "}
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions className={classes.spContainer}>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.size}
          </Typography>
          <Typography variant="body2"  color="textSecondary" component="p">
            ${product.price}
          </Typography>
        </CardActions>

        <Link className={classes.productLink} to={`/products/${product.id}`}>
          <CardActions>
            <Button size="small" color="primary">
              View
            </Button>
          </CardActions>
        </Link>
      </Card>
    </div>
  );
};

export default Product;
