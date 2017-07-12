import React, { PropTypes } from 'react';
import filterBySize from '../utils';

const ProductsList = ({ products, filterSize }) => {
  const predicate = filterBySize(filterSize)
  const filteredContacts = filterSize === 'All' ? products : products.filter(predicate)

  return (
    <ul className="products container">
      {filteredContacts.map(
        product => (
          <li className="products__item" key={product.index}>
            <img src={`./${product.productImage}`} alt="" />
          </li>
        )
      )}
    </ul>
  );
};

ProductsList.defaultProps = {
  products: PropTypes.Object,
  filterSize: 'All'
};

ProductsList.propTypes = {
  products: PropTypes.Object,
  filterSize: PropTypes.string
};

export default ProductsList;
