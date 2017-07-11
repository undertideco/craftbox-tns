import React, { Component, PropTypes } from 'react';
import itemStyles from './item.css';

class CatalogItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <li className="item" styles={itemStyles}>
        <img src={item.image} alt="" className="item-image" />
        <div className="item-details">
          <span className="item-title">{item.title}</span>
          <span className="item-price">S${item.price}</span>
        </div>
      </li>
    );
  }
}

CatalogItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CatalogItem;
