import React, { Component } from 'react';

class ErrorBoundariesTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false,
      }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }
    
  render() {
    if(this.state.hasError) {
        return <h1>Something went wrong!</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundariesTwo;


// Error Boundaries are React components that catch javascript error in their child component tree, log these errors, and display a fallback UI.

// A class component becomes an Error Boundary by defining either or both of getDerivedStateFromError and componentDidCatch lifecycle methods.

// The placement of the Error Boundary also matters as it controls if the entire app should have the fallback UI or just the component causing the problem.

// Provide a way to gracefully handle error in application code.