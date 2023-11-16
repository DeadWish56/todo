import React from 'react'
import PropTypes from 'prop-types'

import './index.css'
import TaskList from '../../TaskList'

function TaskFilter({ onFilter, filter }) {
  return (
    <ul className="filters">
      <li>
        <button
          type="button"
          className={filter === 'all' ? 'selected' : ''}
          onClick={() => {
            onFilter('all')
          }}
        >
          All
        </button>
      </li>
      <li>
        <button
          type="button"
          className={filter === 'active' ? 'selected' : ''}
          onClick={() => {
            onFilter('active')
          }}
        >
          Active
        </button>
      </li>
      <li>
        <button
          type="button"
          className={filter === 'completed' ? 'selected' : ''}
          onClick={() => {
            onFilter('completed')
          }}
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

TaskFilter.defaultProps = {
  onFilter: () => {},
  filter: 'all',
}

TaskFilter.propTypes = {
  onFilter: PropTypes.func,
  filter: PropTypes.string,
}

export default TaskList
