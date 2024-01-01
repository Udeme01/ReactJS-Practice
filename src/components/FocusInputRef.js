import React, { Component } from 'react';
import InputRef from './InputRef';

class FocusInputRef extends Component {
  constructor(props) {
    super(props)
    
    // create a Ref in the constructor();
    this.FocusCompRef = React.createRef();
  }

  // onClick of the button, the focusInput() method from the InputRef component gets called;
  clickHandler = () => {
    this.FocusCompRef.current.focusInput();
  }
  
  render() {
    return (
      <div>
        {/* reference or attach the ref created to the input element */}
        <InputRef ref={this.FocusCompRef} />
        <button type='submit' onClick={this.clickHandler}>FocusInputRef</button>
      </div>
    );
  }
}

export default FocusInputRef;