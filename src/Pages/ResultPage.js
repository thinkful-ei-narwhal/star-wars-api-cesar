import React, { Component } from 'react';
import SearchUi from '../components/SearchUi/SearchUi';
import Results from '../components/Results/Results';

export default class ResultPage extends Component {

  render() {
    return (
    <main>
       <SearchUi {...this.props}/>
       <Results/>
    </main>
    )
  }
}