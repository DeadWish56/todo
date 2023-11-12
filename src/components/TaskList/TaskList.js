import React from "react";
import PropTypes from 'prop-types'

import Task from "./Task/Task";



const TaskList = function ({ todos, onDeleted, onToggleDone, filter, onEditing }) {
    
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item
        return (
            
                <Task {...itemProps}
                key={id}
                onDeleted={() => {onDeleted(id)
                }}
                onToggleDone = {() => {onToggleDone(id)}}
                onEditing = {() => {onEditing(id)}} />                
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
            { elementsFiltered }
        </ul>
    )

}

TaskList.defaultProps = {
    todos: [],
    onDeleted: () => {},
    onToggleDone: () => {},
    filter: 'all'
}

TaskList.propTypes = {
    onDeleted: PropTypes.func,
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggleDone: PropTypes.func,
    filter: PropTypes.string
}

export default TaskList