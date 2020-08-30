import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     text: '',
  //   };
  // }

  state = {
    text: ''
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo here:</label>
            <br />
            <input type='text' 
              onChange={this.handleChange}
              value={this.state.text}
            /> &nbsp;

            <input type='submit' />
          </p>
        </form>
        {this.state.text}
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
}

export default connect(null, mapDispatchToProps)(CreateTodo);
//SEE README FOR INFO ABOUT ALTERNATE EXPORT STATEMENT:
//export default connect()(CreateTodo);
