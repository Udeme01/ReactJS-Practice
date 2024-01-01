import React, { Component } from 'react';

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: 'Udeme Emmanuel Edet',
        }
        console.log('LifeCycleB constructor');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('LifeCycleB componentDidMount')
    }
  render() {
    // const {fullName} = this.state;
    console.log('LifeCycleB render')
    return (
      <div>
        <h1>LifeCycleB</h1>
      </div>
    );
  }
}

export default LifeCycleB;
