import React, {Component} from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Location from './components/Location';
import Partners from './components/Partners';
import Contact from './components/Contact';

import './App.css';

class App extends Component {
  state = {

  }

  render() {
    return (
      <Router>
        <Navbar></Navbar>

        <Switch>

          <Route path='/' component={Home} />
          
          <Route path='/quem-somos' component={AboutUs} />

          <Route path='/onde-estamos'>
            <Location />
          </Route>

          <Route path='/parceiros'>
            <Partners />
          </Route>

          <Route path='/contato'>
            <Contact />
          </Route>

        </Switch>
      </Router>
    );
  }
}

export default App;
