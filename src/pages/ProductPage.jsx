import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { generateProductId } from '../api/Products';

const ProductPage = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((prod) => generateProductId(prod) === productId);

  if (!product) return <Typography variant="h5">Product not found</Typography>;

  return (
    <Container>
      <Typography variant="h3">{product.name}</Typography>
      <Typography variant="h5">{product.company}</Typography>
      <Typography variant="h5">{product.category}</Typography>
      <Typography variant="h5">${product.price}</Typography>
      <Typography variant="h5">Rating: {product.rating}</Typography>
      <Typography variant="h5">Discount: {product.discount}%</Typography>
      <Typography variant="h5">{product.availability ? 'In Stock' : 'Out of Stock'}</Typography>
    </Container>
  );
};

export default ProductPage;
