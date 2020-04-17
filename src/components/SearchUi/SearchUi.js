import React, { Component } from 'react';
import ValidationError from '../ValidationError';
import UserContext from '../UserContext';
import './SearchUi.css';

export default class SearchUi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: '',
        touched: false,
      },
    };
  }
  
  static contextType = UserContext;

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return 'Name is required';
    }
  }

  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }
  render() {
    const nameError = this.validateName();
  return (
    <section className="formSection">
    <form onSubmit={(e) => {
    e.preventDefault();
    this.context.onSubmit(this.state.name.value);
    this.props.history.push('/results')
    }}>
        <label htmlFor="name">Name:</label>
        <input type="text"  id="name"  name="name"
          onChange={(e) => this.updateName(e.target.value)}
        />
        <button type="submit" disabled={this.validateName()}> 
            <span>submit</span>
        </button>
        {this.state.name.touched && <ValidationError message={nameError} />}
    </form>
    </section>
  );
  }
}