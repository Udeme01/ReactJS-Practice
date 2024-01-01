import React, { Component } from 'react';

class RefDemo extends Component {
    constructor(props) {
      super(props)
    // create a Ref in the constructor();
      this.demoRef = React.createRef();
    }

    componentDidMount() {
        this.demoRef.current.focus();
    }


    clickHandler = () => {
        alert(this.demoRef.current.value)
    }
    
  render() {
    return (
      <div>
        {/* reference or attach the ref created to the input element */}
        <input type='text' ref={this.demoRef}/>
        <button type='button' onClick={this.clickHandler}>RefDemo</button>
      </div>
    );
  }
}

export default RefDemo;