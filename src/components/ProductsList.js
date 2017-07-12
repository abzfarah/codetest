import React, { PropTypes } from 'react';
import classnames from 'classnames';
import filterBySize, { CSSClassNames } from '../utils';

const CLASS_ROOT = CSSClassNames.PRODUCTS;


const ProductsList = ({ products, filterSize }) => {
  const predicate = filterBySize(filterSize);
  const filteredProducts = filterSize === 'All' ? products : products.filter(predicate);
  const productList = filteredProducts.map((product) => {
    const { isSale, isExclusive } = product;
    const saleClass = classnames(
      CLASS_ROOT,
      {
        sale: isSale,
        exclusive: isExclusive
      }
    );

    return (
      <li className="products__item" key={product.index}>
        <img src={`./${product.productImage}`} alt="" />
        {(isSale || isExclusive)
          && <div className={`${saleClass}`}>{isSale ? 'Sale' : 'Exclusive'}

          </div>
        }
        <div className="products__item--wrapper">
          <span className="products__item--name">Product Name</span>
          <span className="products__item--price">{product.price}</span>
        </div>
      </li>
    );
  });
  return (
    <ul className="products">
      {productList}
    </ul>
  );
};

ProductsList.defaultProps = {
  products: PropTypes.object,
  filterSize: 'All'
};

ProductsList.propTypes = {
  products: PropTypes.any,
  filterSize: PropTypes.string
};

export default ProductsList;
