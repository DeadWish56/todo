import React from 'react'
import PropTypes from 'prop-types'

import Task from './Task'
import './index.css'

/* eslint-disable react/jsx-props-no-spreading */

function TaskList({ todos, onDeleted, onToggleDone, filter, onEditingToggle, onEditingTask, onToggleTimer }) {
  const elements = todos.map((item) => {
    const { id } = item
    return (
      <Task
        {...item}
        key={id}
        onDeleted={() => {
          onDeleted(id)
        }}
        onToggleDone={() => {
          onToggleDone(id)
        }}
        onEditingToggle={() => {
          onEditingToggle(id)
        }}
        onEditingTask={onEditingTask}
        onToggleTimer={() => {
          onToggleTimer(id)
        }}
      />
    )
  })
  const elementsFiltered = elements.filter((elem) => {
    if (filter === 'active' && elem.props.done === false) {
      return elem
    }
    if (filter === 'all') {
      return elem
    }
    if (filter === 'completed' && elem.props.done === true) {
      return elem
    }
    return null
  })
  return <ul className="todo-list">{elementsFiltered}</ul>
}

TaskList.defaultProps = {
  todos: [],
  onDeleted: () => {},
  onToggleDone: () => {},
  filter: 'all',
  onEditingToggle: () => {},
  onEditingTask: () => {},
}

TaskList.propTypes = {
  onDeleted: PropTypes.func,
  todos: PropTypes.arrayOf(PropTypes.any),
  onToggleDone: PropTypes.func,
  filter: PropTypes.string,
  onEditingToggle: PropTypes.func,
  onEditingTask: PropTypes.func,
}

export default TaskList
