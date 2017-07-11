import React, { Component } from 'react';
import CatalogItem from '../components/CatalogItem';
import indexStyle from './index.css';
import catalogData from '../../data/catalog.json';

export default class Index extends Component {
  render() {
    return (
      <div className="container" styles={indexStyle}>
        <h1>Catalog</h1>
        <ul className="items">
          {
            catalogData.map(item => (
              <CatalogItem item={item} />
            ))
          }
        </ul>
      </div>
    );
  }
}

