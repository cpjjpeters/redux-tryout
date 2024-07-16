import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Macbook Air",
    description: "Apple Macbook Air",
    price: "$999",
  },
  {
    id: 2,
    name: "Macbook Pro",
    description: "Apple Macbook Pro",
    price: "$1199",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
