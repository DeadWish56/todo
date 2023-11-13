import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import './index.css'

export default class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
    }

    document.addEventListener('mousedown', (e) => {
      if (e.target.className !== 'edit' && this.props.editing === true) {
        this.props.onEditingToggle(this.props.id)
      }
    })
  }

  handleKeyDown = (e) => {
    const { onEditingToggle, id } = this.props
    if (e.code === 'Escape') {
      onEditingToggle(id)
    }
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    const { onEditingTask, id } = this.props
    let { label } = this.state
    e.preventDefault()
    if (label.length > 0 && label[0] !== ' ') {
      onEditingTask(id, this.state.label)
    }
  }

  render() {
    const { onDeleted, onEditingToggle, label, onToggleDone, done, created, editing } = this.props
    const distaceToNow = formatDistanceToNow(new Date(created), { includeSeconds: true, addSuffix: true })
    let className = ''
    if (done) {
      className += ' completed'
    }
    if (editing) {
      className += ' editing'
    }
    return (
      <li className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={onToggleDone} checked={done === true ? 'checked' : ''} />
          <label>
            <span className="description">{label}</span>
            <span className="created">{distaceToNow}</span>
          </label>
          <button className="icon icon-edit" onClick={onEditingToggle}></button>
          <button className="icon icon-destroy " onClick={onDeleted}></button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            onKeyDown={this.handleKeyDown}
            type="text"
            defaultValue={label}
            className="edit"
            onChange={this.onLabelChange}
            ref={(input) => input && input.focus()}
          />
        </form>
      </li>
    )
  }
}

Task.defaultProps = {
  onDeleted: () => {},
  onToggleDone: () => {},
  onEditingToggle: () => {},
  done: false,
  editing: false,
}

Task.propTypes = {
  onDeleted: PropTypes.func,
  label: PropTypes.string,
  onToggleDone: PropTypes.func,
  onEditingToggle: PropTypes.func,
  done: PropTypes.bool,
  editing: PropTypes.bool,
  created: PropTypes.instanceOf(Date),
}
