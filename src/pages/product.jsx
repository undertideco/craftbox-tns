import React, { Component } from 'react';
import Database from '../database';

export default class Product extends Component {
  render() {
    const productID = this.props.location.search.match(/id=(\d)/)[1];
    const product = Database.getById(parseInt(productID));
    return (
      <div>
        <h1>{product.title}</h1>
        <h4 className="price">${product.price}</h4>
        <p>{product.description}</p>
        <img src={product.image} alt="" />

        <ul className="materials">
          {
            product.materials.map(material => (
              <li className="material">
                <span className="title">{material.title}</span>
                <span className="qty">{material.quantity}</span>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

