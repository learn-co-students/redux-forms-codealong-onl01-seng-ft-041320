import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {
  renderTodos = () => {
    return this.props.todos.map((todo, idx) => <Todo key={idx} text={todo} />)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          {this.renderTodos()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer);