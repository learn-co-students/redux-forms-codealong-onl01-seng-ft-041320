import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state)
    //when called whatever is currently stored in `this.state` will be sent off to the reducer via our dispatched action. 
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input type='text' onChange={event => this.handleChange(event)} value={this.state.text} />
          </p>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (formData) => dispatch({type: 'ADD_TODO', payload: formData })
  }
}

// We use `null` because we are not currently concerned with writing a `mapStateToProps()` function as this component doesn't need any state.
export default connect(null, mapDispatchToProps)(CreateTodo);
