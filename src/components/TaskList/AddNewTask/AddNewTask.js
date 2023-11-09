import React, {Component} from "react";

export default class AddNewTask extends Component {
    render() {
        return (
            <button className="addNewTask"
            onClick = {() => {this.props.onAddTask('hello world')}}>Добавить задачу</button>
        )
    }
}