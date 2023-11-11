import React, { Component } from "react";

export default class Task extends Component {



  render() {
    const {onDeleted, label, onToggleDone, done} = this.props

    return (
      <li className={(done === true ? 'completed' : '')}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onToggleDone} checked={done === true ? 'checked': ""}/>
        <label>
          <span className="description">{label}</span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button 
        className="icon icon-destroy "
        onClick={
          onDeleted
        }
        ></button>
      </div>
      <input type="text" className="edit" />
    </li>
  )
  }
}