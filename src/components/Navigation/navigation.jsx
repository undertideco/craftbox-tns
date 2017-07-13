import React, { Component } from 'react';
import Link from 'gatsby-link';
import Search from '../Search/search';

export default class Navigation extends Component {
  render() {
    return (
      <div className="dt w-100 pa3 bg-blue h3">
        <h1 className="dtc-ns dt-row f3 w-20 white lh-title v-mid-l">CraftBox</h1>
        <Search />
        <div className="dtc-ns dt-row v-mid-l tl tr-ns">
          <Link className="f6 fw4 hover-white no-underline white-70 pr2" to="/">Catalog</Link>
          <Link className="f6 fw4 hover-white no-underline white-70 pr2" to="/product">Inspiration</Link>
        </div>
      </div>
    );
  }
}
