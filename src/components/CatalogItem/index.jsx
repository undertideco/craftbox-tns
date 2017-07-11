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
          <ul className="item-materials">
            <span>Materials:</span>
            {
              item.materials.map(material => (
                <li>
                  <span className="material-title">{material.title}</span>
                  <span className="material-quantity">{material.quantity}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </li>
    );
  }
}

CatalogItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CatalogItem;
