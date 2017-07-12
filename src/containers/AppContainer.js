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
      currentSize: 0
    };
  }
  componentDidMount() {
    fetch('./products.json')
      .then(response => response.json())
      .then(products => this.setState({ products }));
  }

  selectSize() {
    console.log(this.refs.sizeSelector.value);
  }
  render() {
    const { fields } = this.state;
    const options = fields.map(size =>
      <option key={`option_${size.id}`} value={size.id}>{size.label}</option>
    );
    return (
      <section className="container">
        <select
          ref="sizeSelector"
          value={this.state.currentSize}
          onChange={(e) => { this.selectSize(); }}
        >
          {options}</select>
        <ProductsList products={this.state.products} />
      </section>
    );
  }
}

export default AppContainer
