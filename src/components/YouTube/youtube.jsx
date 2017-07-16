import React, { PropTypes } from 'react';

const YouTube = ({ videoEmbedUrl }) => {
  const style = {
    height: '100%',
    width: '100%',
    left: 0,
    top: 0,
    position: 'absolute',
  };

  const parentStyle = {
    position: 'relative',
    paddingBottom: '56.25%',
    paddingTop: '25px',
    height: 0
  };

  return (
    <div style={parentStyle}>
      <iframe
        src={videoEmbedUrl}
        style={style}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

YouTube.propTypes = {
  videoEmbedUrl: PropTypes.string.isRequired,
};

export default YouTube;
