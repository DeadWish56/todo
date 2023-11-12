import React, { Component } from "react";

export default class NewTaskForm extends Component {
  
    state = {
      label: ''
    }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    const {onAddTask} = this.props
    let {label} = this.state
    e.preventDefault()
    if (label.length > 0 && label[0] !== ' ') {
      onAddTask(this.state.label)
      this.setState({
        label: ''
      })
    }

  }

  render () {
    return (
      <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form"
            onSubmit = {this.onSubmit}>
      <input className="new-todo" 
             placeholder="What needs to be done?" 
             autoFocus
             onChange={this.onLabelChange}
             value = {this.state.label} />
      </form>
    </header>
    )
  }
}