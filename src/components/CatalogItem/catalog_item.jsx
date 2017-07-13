import React, { Component, PropTypes } from 'react';
import Link from 'gatsby-link';

class CatalogItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <article className="fl w-100 w-25-m w-20-l mv4 br2 ba dark-gray b--black-10">
        <Link className="db link dim" to={`/product?id=${item.id}`}>
          <img src={item.image} className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
          <dl className="mt2 f6 lh-copy">
            <dt className="clip">Title</dt>
            <dd className="f5 f4-ns ml0 black truncate w-100">{item.title}</dd>
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
