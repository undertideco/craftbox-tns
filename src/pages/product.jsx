import React, { Component } from 'react';
import Database from '../database';
import YouTube from '../components/YouTube/youtube';
import ImagePicker from '../components/ImagePicker/image_picker';

export default class Product extends Component {
  render() {
    const productIDMatches = this.props.location.search.match(/id=(\d)/);
    const productID = productIDMatches !== null ? productIDMatches[1] : null;
    const product = Database.getById(parseInt(productID)) || {
      title: '',
      description: '',
      images: [],
      price: '',
      materials: [],
    };

    return (
      <div className="flex flex-column pa2 pa3-ns mw8 center">
        <section className="flex flex-column flex-row-ns justify-center pb3 bb b--light-silver">
          <div className="w-100 w-40-m w-30-l">
            <ImagePicker
              imageUrls={product.images}
            />
          </div>
          <div className="w-100 w-60-m w-70-l ph4-ns">
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
        <section className="db">
          <h1 className="f4 lh-title">Video</h1>
          <YouTube
            videoEmbedUrl={product.video_embed_url}
          />
        </section>
      </div>
    );
  }
}
