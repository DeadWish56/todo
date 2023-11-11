import React, { Component } from "react";

import TaskFilter from './TaskFilter/TaskFilter'

export default class Footer extends Component {
    render() {
        const {itemsLeft, onFilter} = this.props
        return (
            <footer className="footer">
                <span className="todo-count">{itemsLeft} items left</span>
                <TaskFilter onFilter={onFilter}/>
                <button className="clear-completed">Clear completed</button>
          </footer>
        )
    }

}