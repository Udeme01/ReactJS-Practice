import React, { Component } from 'react';
import FRChildRef from './FRChildRef';

export class FRParentRef extends Component {
    constructor(props) {
      super(props)
    
      this.FRref = React.createRef();
    }

    clickHandler = () => {
        this.FRref.current.focus();
    }
    
  render() {
    return (
      <div>
        <FRChildRef ref={this.FRref}/>
        <button type='button' onClick={this.clickHandler}>FR-Ref to child</button>
      </div>
    );
  }
}

export default FRParentRef;
