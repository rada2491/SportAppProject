import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/nav/'
import Aside from './components/main/Aside/'

/* pages */
import Home from './pages/home/'
import Details from './components/main/Table/'


const API = 'http://api.football-data.org/v1/soccerseasons';

var myHeaders = new Headers({
   'Content-Type': 'application/json',
   'X-Auth-Token': '176d0f15e52c4479976af3e3a372afcb'
});

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         items: [],
         isLoaded: false,
      }

   }

   componentDidMount() {
      fetch(API, {
         method: 'GET',
         headers: myHeaders
      })
         .then(res => res.json())
         .then(date => {
            this.setState({
               isLoaded: true,
               items: date,
            })
         });
   }
   render() {

      const { isLoaded, items } = this.state;
      if (isLoaded) {
         
      }
      return (
         <BrowserRouter>
            <div className="App">
               <Header />
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-md-3">
                        <Aside item={this.state.items} />
                     </div>
                     <div className="col-md-9">
                        <main>
                           <Route exact path='/' component={Home} />
                           <Route path='/details' component={Details} />
                        </main>
                     </div>
                  </div>
               </div>
            </div>
         </BrowserRouter>
      )
   }
}

export default App;