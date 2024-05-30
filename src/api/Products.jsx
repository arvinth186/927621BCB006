import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test';

export const getProducts = async (company, category, top, minPrice, maxPrice) => {
  try {
    const response = await axios.get(`${BASE_URL}/companies/${company}/categories/${category}/products`, {
      params: { top, minPrice, maxPrice },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const generateProductId = (product) => {
  return `${product.name}-${product.company}-${product.category}-${product.price}`.replace(/\s+/g, '-').toLowerCase();
};
