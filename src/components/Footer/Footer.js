import React from "react";

import TaskFilter from './TaskFilter/TaskFilter'

const Footer = function (props) {
    return (
        <footer className="footer">
            <span className="todo-count">{props.itemsLeft} items left</span>
            <TaskFilter />
            <button className="clear-completed">Clear completed</button>
      </footer>
    )
}

export default Footer