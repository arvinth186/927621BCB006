import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { generateProductId } from '../api/Products';

const ProductList = ({ products }) => {
  return (
    <Container>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={generateProductId(product)} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="body2">{product.company}</Typography>
                <Typography variant="body2">{product.category}</Typography>
                <Typography variant="body2">${product.price}</Typography>
                <Typography variant="body2">Rating: {product.rating}</Typography>
                <Typography variant="body2">Discount: {product.discount}%</Typography>
                <Typography variant="body2">{product.availability ? 'In Stock' : 'Out of Stock'}</Typography>
                <Link to={`/products/${generateProductId(product)}`}>View Details</Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
