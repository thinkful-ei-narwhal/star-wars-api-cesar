import React, { Component } from 'react';
import UserContext from '../UserContext';
import './Results.css';

export default class Results extends Component {
  static contextType = UserContext;

  render() {
    const ResultsHtml = this.context.names.map((name,index) => {
        return (
          <li key={index}>
            {name.name}
          </li>
        );
      });
  return (
    <section className="formSection">
        <ul>
            {ResultsHtml}
        </ul>
    </section>
  );
  }
}