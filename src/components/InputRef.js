import React, { Component } from 'react';

class InputRef extends Component {
    constructor(props) {
      super(props)
    // create a Ref in the constructor();
      this.inputRef = React.createRef();
    }

    // create a method to call focus on the input element...
    focusInput() {
      this.inputRef.current.focus();
    }

    // The focusInput() methos can also be used here;
    // clickHandler = () => {
    //   this.focusInput();
    // }
    
  render() {
    return (
      <div>
        {/* reference or attach the ref created to the input element */}
        <input type='text' ref={this.inputRef} />
        <button type='button' onClick={this.clickHandler}>InputRef</button>
      </div>
    );
  }
}

export default InputRef;