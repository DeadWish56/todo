import React, { Component } from "react";

export default class TaskFilter extends Component {
  render() {
    const { onFilter } = this.props
    return (
        <ul className="filters">
        <li>
          <button className="selected"
                  onClick={ () => {
                    onFilter('all')
                  }}
                  >All</button>
        </li>
        <li>
          <button
                  onClick={ () => {
                    onFilter('active')
                  }}>Active</button>
        </li>
        <li>
          <button
                  onClick={ () => {
                    onFilter('completed')
                  }}>Completed</button>
        </li>
      </ul>
    )
  }
}