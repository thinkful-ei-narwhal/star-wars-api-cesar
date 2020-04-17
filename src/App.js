import React, { Component } from 'react';
import './App.css';
import config from './config'
import { Route, Switch, Link } from 'react-router-dom';
import MainPage from './Pages/MainPage'
import NotFound from './Pages/NotFound'
import ResultPage from './Pages/ResultPage'
import UserContext from './components/UserContext';

export default class App extends Component {
  state = {
    names:[]
  }

  handleSubmit = (name) => {
    fetch(`${config.API_ENDPOINT}people/?search=${name}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data.results)
        this.setState({names: data.results});
      });
  };

  render() {
  return (
    <UserContext.Provider
        value={{
          names: this.state.names,
          onSubmit: this.handleSubmit,
        }}
      >

    <div className="App">
      <header className="App-header">
        <Link to="/">
          <h1>STAR WARS</h1>
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/results" component={ResultPage}/>
        <Route component={NotFound} />
      </Switch>
    </div>
    </UserContext.Provider>
  );
  }
}

