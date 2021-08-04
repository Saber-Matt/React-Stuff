import React from 'react';
import { PropTypes } from 'prop-types';
//import ArnoldItem from ''

function ArnoldList({ arnoldApi }) {
  const arnoldList = arnoldApi.map(({ _id, name, image }) => (
    <li key = {_id}>
      <ArnoldItem id={_id} name={name} image={image} />
    </li>));
  
  return (
    <ul>
      {arnoldList}
    </ul>
  );
}

ArnoldList.propTypes = {
  arnoldApi: PropTypes.array.isRequired
};

export default ArnoldList;
