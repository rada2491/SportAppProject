import React, { Component } from 'react';
import ReactDOM from 'react-dom'; //es6 imports
import 'bootstrap/dist/css/bootstrap.min.css';

import Navig from './components/header/nav/'
import Header from './components/header/';
import Example from './components/main/Carousel/';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navig />
                <Header name="Carlos Bonilla Robles" />
                <Example />
            </div>
        )
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));

/*
<header className="App-header">
    <h1 className="App-title">Sport App test</h1>
</header>
<p className="App-intro">Test....</p>
*/