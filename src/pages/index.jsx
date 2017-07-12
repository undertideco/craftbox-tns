import React, { Component } from 'react';
import CatalogItem from '../components/CatalogItem';
import indexStyle from './index.css';
import Database from '../database';

export default class Index extends Component {
  render() {
    return (
      <div className="container" styles={indexStyle}>
        <h1>Catalog</h1>
        <ul className="items">
          {
            Database.getAll().map(item => (
              <CatalogItem item={item} />
            ))
          }
        </ul>
      </div>
    );
  }
}

