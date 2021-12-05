import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        //console.log(data);
        setProducts(json);
      });
  }, []);

  return (
    <main>
      <Grid container justifyContent="center" spacing={8}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={12} md={4} lg={3.5}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
