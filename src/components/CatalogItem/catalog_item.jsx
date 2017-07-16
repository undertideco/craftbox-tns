import React, { Component, PropTypes } from 'react';
import Link from 'gatsby-link';

class CatalogItem extends Component {
  render() {
    const { item } = this.props;
    const imageStyle = {
      backgroundImage: `url(${item.images[0]})`,
    };

    return (
      <article className="fl w-100 w-25-m w-20-l mv4 pa2-ns">
        <Link className="db link dim" to={`/product?id=${item.id}`}>
          <div className="aspect-ratio aspect-ratio--1x1">
            <img style={imageStyle} className="bg-center cover aspect-ratio--object" />
          </div>
          <dl className="mt2 f6 lh-copy">
            <dt className="clip">Title</dt>
            <dd className="f5 fw5 ml0 black truncate w-100">{item.title}</dd>
            <dt className="clip">Artist</dt>
            <dd className="f5 ml0 gray truncate w-100">${item.price}</dd>
          </dl>
        </Link>
      </article>
    );
  }
}

CatalogItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CatalogItem;
