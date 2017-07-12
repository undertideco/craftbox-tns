import React, { Component, PropTypes } from 'react';
import Link from 'gatsby-link';
import itemStyles from './item.css';

class CatalogItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <Link to={`/product?id=${item.id}`}>
        <li className="item" styles={itemStyles}>
          <img src={item.image} alt="" className="item-image" />
          <div className="item-details">
            <span className="item-title">{item.title}</span>
            <span className="item-price">S${item.price}</span>
          </div>
        </li>
      </Link>
    );
  }
}

CatalogItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CatalogItem;
