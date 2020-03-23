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
      <div>
        <Navbar></Navbar>

        <Switch>

          <Route exact path='/' component={Home} />
          
          <Route exact path='/quem-somos' component={AboutUs} />

          <Route exact path='/onde-estamos'>
            <Location />
          </Route>

          <Route exact path='/parceiros'>
            <Partners />
          </Route>

          <Route exact path='/contato'>
            <Contact />
          </Route>

        </Switch>
      </div>
    );
  }
}

export default App;
