import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TaskFilter extends Component {
  render() {
    const { onFilter, filter } = this.props

    return (
      <ul className="filters">
        <li>
          <button
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
}

TaskFilter.defaultProps = {
  onFilter: () => {},
  filter: 'all',
}

TaskFilter.propTypes = {
  onFilter: PropTypes.func,
  filter: PropTypes.string,
}
