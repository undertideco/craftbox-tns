import React from 'react';
import Link from 'gatsby-link';
import Navigation from '../components/Navigation/navigation';

export default class Template extends React.Component {
  render() {
    return (
      <div className="root-container">
        <Navigation>
          <Link className="f6 fw4 hover-white no-underline white-70 pr2" to="/">Catalog</Link>
          <Link className="f6 fw4 hover-white no-underline white-70 pr2" to="/product">Inspiration</Link>
        </Navigation>
        {this.props.children()}
      </div>
    );
  }
}
