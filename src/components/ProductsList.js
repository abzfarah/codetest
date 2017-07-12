import React from 'react';

const ProductsList = ({ products }) => {
  // const filteredContacts = products.filter(product => product.size.indexOf(filterSize) !== -1);
  //
  const filteredContacts = products
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

export default ProductsList;
