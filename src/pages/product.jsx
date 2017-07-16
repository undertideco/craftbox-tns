import React, { Component } from 'react';
import Database from '../database';
import YouTube from '../components/YouTube/youtube';

export default class Product extends Component {
  render() {
    const productID = this.props.location.search.match(/id=(\d)/)[1];
    const product = Database.getById(parseInt(productID));

    const productImageStyle = {
      backgroundImage: `url(${product.image})`,
    };

    return (
      <div className="flex flex-column pa3 mw9 center">
        <section className="flex flex-column flex-row-ns">
          <div className="w-100 w-40-m w-20-l">
            <div className="aspect-ratio aspect-ratio--1x1">
              <img style={productImageStyle} className="bg-center cover aspect-ratio--object" alt="" />
            </div>
          </div>
          <div className="w-100 w-60-ns ph4-ns">
            <h1 className="f3 ln-title">{product.title}</h1>
            <p className="f5 lh-copy">{product.description}</p>
            <div className="flex flex-column flex-row-ns mb2-s items-center-ns">
              <h4 className="db dib-ns mt0 f5 fw6 lh-copy mb0-ns">${product.price}</h4>
              <a className="f6 link dim br3 ph5 pv2 ml3-ns dib-ns white bg-green tc" href="#0">Buy</a>
            </div>
          </div>
        </section>
        <section>
          <h1 className="f4 lh-title">Materials Included In This Kit:</h1>
          <ul className="list pa0 measure">
            {
              product.materials.map(material => (
                <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
                  {material.title} - {material.quantity} {material.unit}
                </li>
              ))
            }
          </ul>
        </section>
        <section className="dt-row db">
          <h1 className="f4 lh-title">Video</h1>
          <YouTube
            videoEmbedUrl={product.video_embed_url}
          />
        </section>
      </div>
    );
  }
}
