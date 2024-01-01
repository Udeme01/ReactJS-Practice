import React, { Component } from "react";
import withCounter from "./HOC";

class ClickCounterHOC extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button type="button" onClick={incrementCount}>
          {this.props.name} Clicked {count} times!
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounterHOC, 5);