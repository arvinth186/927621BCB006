import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './Components/ProductList';
import ProductPage from './pages/ProductPage';
import ProductFilter from './Components/ProductFilter';
import { getProducts } from './api/Products';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    company: 'AMZ',
    category: 'Laptop',
    top: 10,
    minPrice: 1,
    maxPrice: 10000,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts(
          filters.company,
          filters.category,
          filters.top,
          filters.minPrice,
          filters.maxPrice
        );
        setProducts(response);
        setError(null);
      } catch (error) {
        setError('Failed to fetch products. Please try again later.');
      }
    };
    fetchProducts();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <Router>
      <ProductFilter onFilter={handleFilterChange} />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/products/:productId" element={<ProductPage products={products} />} />
      </Routes>
    </Router>
  );
};

export default App;
