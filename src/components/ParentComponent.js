import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parentName: 'Parent'
        }

        // I needed to bind the greet() method becos of the usage of 'this' keyword in the method...
        this.greet = this.greet.bind(this);
    }

    // Define your 'method' in the Parent Component...
    greet(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    // render() method below...
  render() {
    return (
      <div>
        {/* In your 'child tag', pass in your 'method' as a 'props'... */}
        <ChildComponent greetHandler = {this.greet} />
      </div>
    );
  }
}

export default ParentComponent;
