
import React from 'react';
import PropTypes from 'prop-types';

const ArnoldDetail = ({ name, image  }) => (
  <>
    <h1>{name}</h1>
    <h2>{image}</h2>

  </>
);

ArnoldDetail.propTypes = {
  name: PropTypes.string,
  image: <PropTypes className="url"></PropTypes>,
  
};

export default ArnoldDetail;

