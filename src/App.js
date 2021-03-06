import React from 'react';
import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TinderCards from './components/TinderCards';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am chat page</h1>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
      </Router>
      
      {/* Tinder Cards */}
      {/* Buttons */}

      {/* Chat screen */}
      {/* Individual chat screen */}
    </div>
  );
}

export default App;
