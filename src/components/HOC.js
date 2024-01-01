import React from "react";

const withCounter = (WrappedComponent, incrementNum) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + incrementNum,
        };
      });
    };

    render() {
      const { count } = this.state;
      return <WrappedComponent count={count} incrementCount={this.incrementCount} {...this.props} />;
    }
  }
  return WithCounter;
};

export default withCounter;

// A Higher Order Component(HOC) is a pattern where a function accepts a component and returns an enhanced component.

// The HOC pattern is used to share common functionality between components without having to repeat the code.
