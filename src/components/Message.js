import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
      count: 0,
    };
  }

  subscribeMessage = () => {
    this.setState({
      message: "Thanks For Subscribing!",
    });
  };

  //   increment = () => {
  //     this.setState(
  //       {
  //         count: this.state.count + 1,
  //       },
  //       () => {
  //         console.log(this.state.count);
  //       }
  //     );
  //     console.log(this.state.count);
  //   };

//   incrememntFive = () => {
//     this.setState(
//       (prevState) => ({
//         count: prevState.count + 5,
//       }),
//       () => {
//         console.log(this.state.count);
//       }
//     );
//   };

incrememntFive = () => {
    this.setState((prevState) => ({
        count: prevState.count + 1
    }), () => {console.log(this.state.count)})
}

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button type="button" onClick={this.subscribeMessage}>
          SUBSCRIBE
        </button>

        <h2>Count - {this.state.count}</h2>
        <button type="button" onClick={this.incrememntFive}>
          Increment
        </button>
      </div>
    );
  }
}

export default Message;
