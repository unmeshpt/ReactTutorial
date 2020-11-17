import React from 'react'

import Home from './Home'
import About from './About'
import Contact from './Demonew'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


class App extends React.Component {
  constructor() {
    super();

  }

  render() {

    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    )

  }



}


export default App;
