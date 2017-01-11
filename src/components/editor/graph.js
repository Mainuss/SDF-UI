import React, { Component } from 'react';
import { connect } from 'react-redux';

import { moveNode } from '../../actions/graph';

import Node from './node';

class Graph extends Component {
  render() {
    return <div>
      {
        this.props.nodes.valueSeq().map(node => {
          return <Node
            key={ node.get('id') }
            x={ node.get('x') }
            y={ node.get('y') }
            type={ node.get('type') }
            onMove={ (pos) => this.props.moveNode(node.get('id'), pos) }
          />
        })
      }
    </div>;
  }
};

const mapDispatchToProps = (dispatch) => ({
  moveNode: (id, pos) => dispatch(moveNode(id, pos))
});

export default connect(null, mapDispatchToProps)(Graph);
