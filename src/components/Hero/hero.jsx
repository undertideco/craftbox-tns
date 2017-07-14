import React, { Component, PropTypes } from 'react';

const Hero = ({ imageUrl, title, subtitle }) => (

  <div className="cover bg-left bg-center-l" style={{ backgroundImage: `url(${imageUrl})` }}>
    <div className="bg-black-50 tc-l ph3 pv6">
      <h1 className="f2 f1-l fw2 white-90 ma0 lh-title">{title}</h1>
      <h2 className="fw1 f3 white-80 mt3 mb4">{subtitle}</h2>
    </div>
  </div>
);

Hero.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

Hero.defaultProps = {
  imageUrl: '',
  title: '',
  subtitle: '',
};

export default Hero;
