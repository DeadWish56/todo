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
      const { editing, onEditingToggle, id } = this.props
      if (e.target.className !== 'edit' && editing === true) {
        onEditingToggle(id)
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
    const { label } = this.state
    e.preventDefault()
    if (label.length > 0 && label[0] !== ' ') {
      onEditingTask(id, label)
    }
  }

  render() {
    const { onDeleted, onEditingToggle, label, time, onToggleDone, done, created, editing, onToggleTimer, timerTick } =
      this.props
    const distaceToNow = formatDistanceToNow(new Date(created), { includeSeconds: true, addSuffix: true })
    const min = Math.floor(time / 60)
    const sec = time % 60
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
          <label htmlFor="task" aria-label="task description">
            <span className="title">{label}</span>
            <span className="description">
              <button
                type="button"
                aria-label="запустить таймер"
                className="icon icon-play"
                onClick={timerTick === false ? onToggleTimer : null}
              />
              <button
                type="button"
                aria-label="остановить таймер"
                className="icon icon-pause"
                onClick={timerTick !== false ? onToggleTimer : null}
              />
              {min}:{sec < 10 ? `0${sec}` : sec}
            </span>
            <span className="created">{distaceToNow}</span>
          </label>
          <button type="button" aria-label="edit task" className="icon icon-edit" onClick={onEditingToggle} />
          <button type="button" aria-label="deleting task" className="icon icon-destroy " onClick={onDeleted} />
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            id="task"
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
  label: PropTypes.string.isRequired,
  onToggleDone: PropTypes.func,
  onEditingToggle: PropTypes.func,
  done: PropTypes.bool,
  editing: PropTypes.bool,
  created: PropTypes.instanceOf(Date).isRequired,
}
