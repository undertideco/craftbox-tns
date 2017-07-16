import React, { Component, PropTypes } from 'react';

export default class ImagePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImage: props.imageUrls[0],
    };
  }

  renderImageReel() {
    return this.props.imageUrls.map((image) => {
      const imageStyle = {
	backgroundImage: `url(${image})`,
      };

      return (
	<div className="w3 h3">
	  <div className="aspect-ratio aspect-ratio--1x1">
	    <img style={imageStyle} className="bg-center cover aspect-ratio--object" />
	  </div>
	</div>
      );
    });
  }

  render() {
    const productImageStyle = {
      backgroundImage: `url(${this.state.selectedImage})`,
    };

    return (
      <div className="flex flex-column">
	<div className="mb3">
	  <div className="aspect-ratio aspect-ratio--1x1">
	    <img style={productImageStyle} className="bg-center cover aspect-ratio--object" alt="" />
	  </div>
	</div>
	<div className="flex flex-row">
	  {this.renderImageReel()}
	</div>
      </div>
    );
  }
}

ImagePicker.propTypes = {
  imageUrls: PropTypes.array.isRequired,
};
