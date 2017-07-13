import React, { Component } from 'react';
import Link from 'gatsby-link';
import Search from '../Search/search';

export default class Navigation extends Component {
  render() {
    return (
      <div className="dt w-100 pa3 mw8 bg-blue h3">
        <h1 className="dtc f3 w-20 white lh-title v-mid">CraftBox</h1>
        <Search />
        <div className="dtc v-mid tr pa3">
          <Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/">Catalog</Link>
          <Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/product">Somewhere Else</Link>
        </div>
      </div>
    );
  }
}
