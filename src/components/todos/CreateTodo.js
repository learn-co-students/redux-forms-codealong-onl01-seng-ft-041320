import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {

  constructor(){
    super()
    this.state = {
      text: '',
    }
  }

  handleChange = e =>{
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e =>{
    e.preventDefault()
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>
            <label>Add ToDo</label>
            <br></br>
            <input 
              type="text" 
              onChange={event => this.handleChange(event)}
              value={this.state.text} 
            />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}


export default connect()(CreateTodo);
