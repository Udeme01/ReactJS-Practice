import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: 'Udeme Emmanuel Edet',
        }
        console.log('LifeCycleA constructor');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }
  render() {
    // const {fullName} = this.state;
    console.log('LifeCycleA render')
    return (
      <div>
        <h1>LifeCycleA</h1>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
