import React from 'react'

function Greet(props) {
    // props destructuring...
    const {name} = props;

    function funcHandler() {
        console.log('func Handler!');
    }

    return (
        <div>
            {/* <h1>Greet Function</h1> */}
            <h2>{name}</h2>
            <button type='button' onClick = {funcHandler}>Function</button>
        </div>
        )
}

export default Greet

// 1. Create a component called Greet.js
// 2. Create a function called Greet.js
// 3. Inside the function, return a div with the text "Hello World"