import React, {Component} from 'react';
import { 
  Switch,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Location from './components/Location/Location';
import Contact from './components/Contact/Contact';

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
          
          <Route exact path='/sobre' component={About} />

          <Route exact path='/localizacao' component={Location} />

          <Route exact path='/contato' component={Contact} />

        </Switch>

        <Footer></Footer>
      </div>
    );
  }
}

export default App;
