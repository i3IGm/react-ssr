import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {routes.map((route, i) => (
              <Route exact key={i} {...route}/>
            ))}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
