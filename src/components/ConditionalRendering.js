import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  // if/else conditional rendering...
  render() {
    if (this.state.isLoggedIn) {
      return <div>Welcome Udeme!</div>;
    } else {
      return <div>Welcome Guest!</div>;
    }
  }

  //   Element conditional rendering...
  render() {
    let message;
    if (this.state.isLoggedIn) {
      message = <h1>Welcome Emma!</h1>;
    } else {
      message = <h1>Welcome Guest!</h1>;
    }
    return <div>{message}</div>;
  }

  //     conditional ternary operator rendering...
  render() {
    return this.state.isLoggedIn ? "Welcome Udy" : "Welcome Null";
  }

  // short circuit conditional rendering...
  render() {
    return this.state.isLoggedIn && <h2>WELCOME HOME!</h2>;
  }
}

export default ConditionalRendering;
