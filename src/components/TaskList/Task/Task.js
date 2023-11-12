import React, { Component } from "react";
import PropTypes from "prop-types"
import { formatDistanceToNow } from 'date-fns'

export default class Task extends Component {



  render() {
    const {onDeleted, onEditing, label, onToggleDone, done, created, editing} = this.props
    const distaceToNow = formatDistanceToNow(new Date(created), { includeSeconds: true, addSuffix: true })
    return (
      <li className={(editing === true ? "editing" : "") + (done === true ? 'completed' : '')}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={onToggleDone}  checked={done === true ? 'checked' : ""}/>
        <label>
          <span className="description">{label}</span>
          <span className="created">{distaceToNow}</span>
        </label>
        <button className="icon icon-edit" onClick={onEditing}></button>
        <button 
        className="icon icon-destroy "
        onClick={
          onDeleted
        }
        ></button>
      </div>
      <input type="text" className="edit" placeholder="Editing..." />
    </li>
  )
  }
}

Task.defaultProps = {
  onDeleted: () => {},
  onToggleDone: () => {},
  done: false
}

Task.propTypes = {
  onDeleted: PropTypes.func,
  label: PropTypes.string,
  onToggleDone: PropTypes.func,
  done: PropTypes.bool
}