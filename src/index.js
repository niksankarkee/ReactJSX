// Import the React and ReactDOM libraries
import React from 'react';
import { render } from 'react-dom';


// Create a react component
const App = () => {
    return (
        <h1>Hello From React</h1>
    );
};


// Take the react component and show it on the screen
render(<App />, document.querySelector('#root'));