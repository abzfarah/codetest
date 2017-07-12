import React from 'react';


function filterBySize(filterSize) {
  return function (element) {

    debugger
    return element.size.indexOf(filterSize) != -1;
  };
}


const ProductsList = ({ products, filterSize }) => {

  const test = filterBySize(filterSize)

  const filteredContacts = filterSize === 'All' ? products : products.filter(test)


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


/*

 const filteredContacts = (products, filterSize) => {
 return products.filter(product => product.size.indexOf(filterSize) !== -1);
 }
 */
