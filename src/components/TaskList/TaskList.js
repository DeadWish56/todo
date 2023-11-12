import React from "react";
import PropTypes from 'prop-types'

import Task from "./Task";



const TaskList = function ({ todos, onDeleted, onToggleDone, filter, onEditingToggle, onEditingTask }) {

    const elements = todos.map((item) => {
        const { id } = item
        return (

            <Task {...item}
                key={id}
                onDeleted={() => {
                    onDeleted(id)
                }}
                onToggleDone={() => { onToggleDone(id) }}
                onEditingToggle={() => { onEditingToggle(id) }}
                onEditingTask={onEditingTask} />
        )
    })
    let elementsFiltered = elements.filter((elem) => {
        if (filter === 'active' && elem.props.done === false) {
            return elem
        }
        if (filter === 'all') {
            return elem
        }
        if (filter === 'completed' && elem.props.done === true) {
            return elem
        }
    })
    return (
        <ul className="todo-list">
            {elementsFiltered}
        </ul>
    )
}

TaskList.defaultProps = {
    todos: [],
    onDeleted: () => { },
    onToggleDone: () => { },
    filter: 'all',
    onEditingToggle: () => { },
    onEditingTask: () => { }
}

TaskList.propTypes = {
    onDeleted: PropTypes.func,
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggleDone: PropTypes.func,
    filter: PropTypes.string,
    onEditingToggle: PropTypes.func,
    onEditingTask: PropTypes.func
}

export default TaskList