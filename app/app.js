'use strict'
console.log('¡¡¡****************** 01 Hello World *********************');

import React, {Component } from 'react';//https://github.com/facebook/react/issues/2607#issuecomment-225911048
import ReactDOM from 'react-dom';

class Hello extends Component {
    render () {
        return (
            <div>
                01 Hello React!
            </div>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('container'));