import React, { Component } from 'react';
import ReactDOM from 'react-dom'; //es6 imports
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/nav/'
import Home from './pages/home/';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Home />
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