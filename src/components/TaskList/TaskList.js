import React from "react";

import Task from "./Task/Task";



const TaskList = function ({ todos, onDeleted, onToggleDone, filter }) {
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item
        return (
            
                <Task {...itemProps}
                key={id}
                onDeleted={() => {
                    onDeleted(id)
                }}
                onToggleDone = {() => {onToggleDone(id)}} />                
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

export default TaskList