import React, { Component } from "react";
import PropTypes from "prop-types"
import { formatDistanceToNow } from 'date-fns'

export default class Task extends Component {

  state = {
    label: ''
  }

handleKeyDown = (e) => {
  const {onEditingToggle, id} = this.props
  if (e.code === 'Escape') {
    onEditingToggle(id)
  }
}

onLabelChange = (e) => {
  this.setState({
    label: e.target.value
  })
}

onSubmit = (e) => {
  const { onEditingTask, id } = this.props
  console.log(this.props)
  let {label} = this.state
  e.preventDefault()
  if (label.length > 0 && label[0] !== ' ') {
    onEditingTask(id, this.state.label)
    
  }
  console.log('onSubmit')
}

  

  render() {
    const {onDeleted, onEditingToggle, label, onToggleDone, done, created, editing} = this.props
    const distaceToNow = formatDistanceToNow(new Date(created), { includeSeconds: true, addSuffix: true })
    return (
      <li className={(editing === true ? "editing" : "") + (done === true ? 'completed' : '')}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={onToggleDone}  checked={done === true ? 'checked' : ""}/>
        <label>
          <span className="description">{label}</span>
          <span className="created">{distaceToNow}</span>
        </label>
        <button className="icon icon-edit" onClick={onEditingToggle}></button>
        <button 
        className="icon icon-destroy "
        onClick={
          onDeleted
        }
        ></button>
      </div>
      <form onSubmit={this.onSubmit}> 
        <input onKeyDown={this.handleKeyDown} type="text" className="edit" placeholder="Editing..." onChange={this.onLabelChange} />
      </form>
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