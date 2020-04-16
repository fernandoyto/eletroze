import React, {Component} from 'react';
import { 
  Switch,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Location from './components/Location';
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

          <Route exact path='/localizacao' component={Location} />

          <Route exact path='/contato' component={Contact} />

        </Switch>

        <Footer></Footer>
      </div>
    );
  }
}

export default App;
