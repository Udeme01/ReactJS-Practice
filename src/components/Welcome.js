import React, { Component } from 'react'

class Welcome extends Component {
        // event handler(class)
        classHandler() {
            console.log("class Handler!");
        }
    render() {
        return (
            <div>
                {/* <h1>I am Ebony</h1> */}
                <h2>I am {this.props.name}</h2>
                <button type='button' onClick={this.classHandler}>Class</button>
            </div>
        )
    }
}

// export default Welcome

export {Welcome}