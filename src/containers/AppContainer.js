import React, { Component } from 'react';
import ProductsList from '../components/ProductsList';
import list from './options.json';

import '../styles/core.scss';

class AppContainer extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      fields: list,
      currentSize: 'All'
    };
  }
  componentDidMount() {
    fetch('./products.json')
      .then(response => response.json())
      .then(products => this.setState({ products }));
  }

  selectSize(currentSize) {
    this.setState({ currentSize })
  }
  render() {
    const { fields, products, currentSize } = this.state;
    const options = fields.map(size =>
      <option key={`option_${size.id}`} value={size.value}>{size.label}</option>
    );
    return (
      <main className="container">

        <div className="container__heading">
          <h2>Women's Tops</h2>
          <div className="container__heading--select">
            <select
              ref="sizeSelector"
              value={this.state.currentSize}
              onChange={(e) => { this.selectSize(e.target.value); }}
            >
              {options}</select>
          </div>
        </div>


        <ProductsList products={products} filterSize={currentSize} />
      </main>
    );
  }
}

export default AppContainer;

