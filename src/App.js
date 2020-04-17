import React, { Component } from 'react';
import './App.css';
import SearchUi from './components/SearchUi';
// import Results from './components/Results';
import { Route, Switch, Link } from 'react-router-dom';

export default class App extends Component {
  state = {
    name:[]
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <h1>Start WARS</h1>
        </Link>
      </header>
      <main>
      <Switch>
        <Route path="/" component={SearchUi} />
        {/* <Route exact path="/?name=:nameId" component={Results} /> */}
      </Switch>
      </main>
    </div>
  );
  }
}

