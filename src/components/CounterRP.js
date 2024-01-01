import React, { Component } from "react";

export class CounterRP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return (
      <div>{this.props.children(this.state.count, this.incrementCount)}</div>
    );
  }
}

export default CounterRP;

// Anything within the component's opening and closing tags will be passed as the children props which is then accessed to render the UI.
