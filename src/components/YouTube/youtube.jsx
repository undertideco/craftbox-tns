import React, { PropTypes } from 'react';

const YouTube = ({ videoEmbedUrl }) => {
  const style = {
    height: '40%',
    width: '100%',
    left: 0,
    position: 'absolute',
  };

  return (
    <iframe
      src={videoEmbedUrl}
      style={style}
      frameBorder="0"
    ></iframe>
  );
};

YouTube.propTypes = {
  videoEmbedUrl: PropTypes.string.isRequired,
};

export default YouTube;
