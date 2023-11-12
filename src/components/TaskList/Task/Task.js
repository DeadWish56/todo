import React, { Component } from "react";
import PropTypes from "prop-types"

export default class Task extends Component {



  render() {
    const {onDeleted, label, onToggleDone, done} = this.props
    return (
      <li className={(done === true ? 'completed' : '')}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={onToggleDone}  checked={done === true ? 'checked' : ""}/>
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