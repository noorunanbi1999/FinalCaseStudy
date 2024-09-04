import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResultsPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query');
  const products = require('./products.json'); // Adjust the path as needed

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <li key={product.id}>{product.title} - ${product.price}</li>
          ))
        ) : (
          <p>No products found</p>
        )}
      </ul>
    </div>
  );
};

export default SearchResultsPage;