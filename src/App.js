import React, { Component } from 'react'
import PropTypes from 'prop-types'

import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'
import Footer from './components/Footer'

export default class App extends Component {
  maxID = 0

  state = {
    todoData: [
      this.createNewTask('Drink coffee'),
      this.createNewTask('Make Awesome App'),
      this.createNewTask('Hava a nice day'),
    ],
    filter: 'all',
  }

  onEditingToggle = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const oldItem = todoData[idx]
      const newItem = { ...oldItem, editing: !oldItem.editing }
      let newArr = todoData.toSpliced(idx, 1, newItem)
      return {
        todoData: newArr,
      }
    })
  }

  todoFilter = (status) => {
    this.setState(() => {
      return {
        filter: status,
      }
    })
  }

  deleteTask = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      let newArr = todoData.toSpliced(idx, 1)

      return {
        todoData: newArr,
      }
    })
  }

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      let newArr = todoData.filter((elem) => {
        return elem.done !== true
      })
      return {
        todoData: newArr,
      }
    })
  }

  createNewTask(label) {
    return {
      label,
      id: this.maxID++,
      done: false,
      editing: false,
      created: new Date(),
    }
  }

  editingTask = (id, value) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const findItem = todoData[idx]
      findItem.label = value
      findItem.editing = false
      const newArr = todoData.toSpliced(idx, 1, findItem)
      return {
        todoData: newArr,
      }
    })
  }

  addTask = (text) => {
    const newTask = this.createNewTask(text)

    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, newTask],
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const oldItem = todoData[idx]
      const newItem = { ...oldItem, done: !oldItem.done }
      let newArr = todoData.toSpliced(idx, 1, newItem)

      return {
        todoData: newArr,
      }
    })
  }

  render() {
    const { todoData, filter } = this.state
    const itemsLeft = todoData.length - todoData.filter((el) => el.done).length
    return (
      <section className="todoapp">
        <NewTaskForm onAddTask={this.addTask} />
        <section className="main">
          <TaskList
            todos={todoData}
            filter={filter}
            onDeleted={this.deleteTask}
            onToggleDone={this.onToggleDone}
            onEditingToggle={this.onEditingToggle}
            onEditingTask={this.editingTask}
          />

          <Footer
            itemsLeft={itemsLeft}
            onFilter={this.todoFilter}
            filter={this.state.filter}
            onClearCompleted={this.clearCompleted}
          />
        </section>
      </section>
    )
  }
}

App.defaultProps = {
  todoData: [],
  filter: 'all',
}

App.propTypes = {
  todoData: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string,
}
