import React from 'react';

import generateNode from '../generate-node';

import './ui-float.css';

export default generateNode({
  spec: {
    outlet: { id: 'v', type: 'float' }
  },

  ui: ({ metadata, onUpdateMetadata }) => {
    const { val } = metadata;

    return <div className='ui-float'>
      <input
        className='ui-float__input'
        type='number'
        step='any'
        defaultValue={ val || 0.0 }
        onChange={
          (e) => { onUpdateMetadata({ val: e.target.value }) }
        }
      />
    </div>;
  },

  generate: (_, { val = 0.0 }) => {
    return `${val}`;
  }
});