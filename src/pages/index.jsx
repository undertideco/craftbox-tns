import React, { Component } from 'react';
import CatalogItem from '../components/CatalogItem/catalog_item';
import Hero from '../components/Hero/hero';
import Database from '../database';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Hero
          imageUrl="https://s3.amazonaws.com/StartupStockPhotos/20140808_StartupStockPhotos/64.jpg"
          title="Your Next DIY Project Starts Here."
          subtitle="Browse our catalog below with kits starting as low as $29"
        />
        <div className="cf pa3 mw9 center">
          {
            Database.getAll().map(item => (
              <CatalogItem item={item} />
            ))
          }
        </div>
      </div>
    );
  }
}

