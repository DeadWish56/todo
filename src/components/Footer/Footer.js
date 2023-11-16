import React from 'react'
import PropTypes from 'prop-types'

import TaskFilter from './TaskFilter'
import './index.css'

function Footer({ itemsLeft, onFilter, onClearCompleted, filter }) {
  return (
    <footer className="footer">
      <span className="todo-count">{itemsLeft} items left</span>
      <TaskFilter onFilter={onFilter} filter={filter} />
      <button type="button" className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.defaultProps = {
  itemsLeft: 0,
  onFilter: () => {},
  onClearCompleted: () => {},
  filter: 'all',
}

Footer.propTypes = {
  itemsLeft: PropTypes.number,
  onFilter: PropTypes.func,
  onClearCompleted: PropTypes.func,
  filter: PropTypes.string,
}

export default Footer
