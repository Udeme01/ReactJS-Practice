import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello'
        }

        // binding event handlers in class constructors(REACT)...
        // this.bindMeNow = this.bindMeNow.bind(this);
    }
    // bindMeNow() {
    //     this.setState({
    //         message: 'GoodBye'
    //     })
    //     console.log(this)
    // }

    // Binding Event Handlers...
    bindMeNow = () => {
        this.setState({
            message: 'mf GoodBye!'
        });
        console.log(this);
    }

    // render() method below!...
  render() {
    const {message} = this.state;
    return (
      <div>
        <h3>{message}</h3>
        {/* <button type='button' onClick={this.bindMeNow.bind(this)}>Bind Me mf!</button> */}
        {/* <button type='button' onClick={() => this.bindMeNow()}>Bind Me mf!</button> */}
        <button type='button' onClick={this.bindMeNow}>Bind Me mf!</button>
      </div>
    );
  }
}

export default EventBind;
