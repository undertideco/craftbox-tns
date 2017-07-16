import React, { Component } from 'react';
import CatalogItem from '../components/CatalogItem/catalog_item';
import Hero from '../components/Hero/hero';
import Database from '../database';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Hero
          imageUrl="http://i.imgur.com/sBT6cuH.jpg"
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

