import React, {Component} from 'react';
import { 
  Switch,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div className="app">
        <div className="main-content">
          <Switch>

            <Route exact path='/' component={Home} />
            
            <Route exact path='/sobre' component={About} />

            <Route exact path='/localizacao' component={Location} />

            <Route exact path='/contato' component={Contact} />

          </Switch>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}

export default App;
