import React, { Component } from "react";

import TaskFilter from './TaskFilter/TaskFilter'

export default class Footer extends Component {
    render() {
        const {itemsLeft, onFilter, onClearCompleted, filter} = this.props
        return (
            <footer className="footer">
                <span className="todo-count">{itemsLeft} items left</span>
                <TaskFilter onFilter={onFilter}
                filter={filter}  />
                <button className="clear-completed" onClick={onClearCompleted}>Clear completed</button>
          </footer>
        )
    }

}