import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    content: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addTodo(this.state);

    e.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='content'>
            <h6>Add Todo</h6>
          </label>
          <input
            type='text'
            className='form-control'
            id='content'
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

export default AddTodo;
