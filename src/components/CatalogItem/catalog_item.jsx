import React, { Component, PropTypes } from 'react';
import Link from 'gatsby-link';

class CatalogItem extends Component {
  render() {
    const { item } = this.props;
    return (
      // <Link className="fl w-100 w-50-m w-25-l pv3 pa3-m pa4-l" to={`/product?id=${item.id}`}>
      <div className="fl w-100 w-50-m w-25-l pv3 pa3-m pa4-l">
        <div className="aspect-ratio aspect-ratio--1x1">
          <img src={item.image} alt="" />
          <p>{item.title}</p>
          <p>S${item.price}</p>
        </div>
      </div>
      // </Link>
    );
  }
}

CatalogItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CatalogItem;
