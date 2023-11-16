import React, { Component } from 'react'
import './index.css'

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
    }
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    const { onAddTask } = this.props
    const { label } = this.state
    e.preventDefault()
    if (label.length > 0 && label[0] !== ' ') {
      onAddTask(label)
      this.setState({
        label: '',
      })
    }
  }

  render() {
    const { label } = this.state
    return (
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form" onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            ref={(input) => input && input.focus()}
            onChange={this.onLabelChange}
            value={label}
          />
        </form>
      </header>
    )
  }
}
