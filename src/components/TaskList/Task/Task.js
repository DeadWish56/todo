import React, { Component } from "react";

export default class Task extends Component {



  render() {
    const {onDeleted, label, onToggleDone, done} = this.props
    let className = ''

    if(done) {
      className = 'completed'
    }

    return (
      <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onToggleDone}/>
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