import React, { Component } from 'react';

export default class SearchUi extends Component {
  render() {
  return (
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"/>
        <button type="submit">
            <span>submit</span>
        </button>
    </form>
  );
  }
}