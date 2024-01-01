import React, { Component } from 'react'

class Car extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'red',
            brand: 'Ford',
            model: 'Mustang',
            year: 1964
        }
    }

    changeColor = () => {
        this.setState({
            color: 'black'
        })
    }

    render() {
        // props & state destructuring...
        const {color, brand, model, year} = this.state;
        return(
            <div>
                <h1>This is my {color} car, It's a {brand}, {model} of year {year}</h1>
                <button type='button' onClick = {this.changeColor}>change car color</button>
            </div>
        )
    }
}

export default Car