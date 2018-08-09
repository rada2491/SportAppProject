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
        {/*aside*/}
        <Home />
      </div>
    )
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
