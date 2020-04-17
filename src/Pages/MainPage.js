import React, { Component } from 'react';
import SearchUi from '../components/SearchUi/SearchUi';

export default class MainPage extends Component {

  render() {
    return (
    <main>
        <SearchUi {...this.props}/>
    </main>
    )
  }
}