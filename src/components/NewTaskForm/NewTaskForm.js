import React, { Component } from 'react'
import './index.css'

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
      min: '',
      sec: '',
    }
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = (e) => {
    const { onAddTask } = this.props
    const { label, min, sec } = this.state
    e.preventDefault()
    if (label.length > 0 && label[0] !== ' ') {
      onAddTask(label, min, sec)
      this.setState({
        label: '',
        min: '',
        sec: '',
      })
    }
  }

  render() {
    const { label, min, sec } = this.state
    return (
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form" onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            name="label"
            placeholder="What needs to be done?"
            // eslint-disable-next-line
            autoFocus
            onChange={this.onInputChange}
            value={label}
            type="text"
            required
          />
          <input
            className="new-todo-form__timer"
            name="min"
            placeholder="Min"
            type="number"
            value={min}
            onChange={this.onInputChange}
          />
          <input
            className="new-todo-form__timer"
            name="sec"
            placeholder="Sec"
            value={sec}
            type="number"
            max="60"
            required
            onChange={this.onInputChange}
          />
          <button type="submit" aria-label="добавить задачу" />
        </form>
      </header>
    )
  }
}
