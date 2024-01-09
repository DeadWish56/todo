import React, { Component } from 'react'

import NewTaskForm from '../NewTaskForm'
import TaskList from '../TaskList'
import Footer from '../Footer'
import './index.css'

/* eslint-disable no-plusplus */

export default class App extends Component {
  constructor(props) {
    super(props)
    this.maxID = 0
    this.interval = null

    this.state = {
      todoData: [this.createNewTask('Drink coffee', 10, 0)],
      filter: 'all',
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.updateTime()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  onEditingToggle = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const oldItem = todoData[idx]
      const newItem = { ...oldItem, editing: !oldItem.editing }
      const newArr = todoData.toSpliced(idx, 1, newItem)
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
      const newArr = todoData.toSpliced(idx, 1)

      return {
        todoData: newArr,
      }
    })
  }

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((elem) => {
        return elem.done !== true
      })
      return {
        todoData: newArr,
      }
    })
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

  onToggleTimer = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const oldItem = todoData[idx]
      const newItem = { ...oldItem, timerTick: !oldItem.timerTick }
      const newArr = todoData.toSpliced(idx, 1, newItem)
      return {
        todoData: newArr,
      }
    })
  }

  updateTime = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.map((item) => {
        if (item.time === 0 || item.done === true) {
          return item
        }
        if (item.timerTick) {
          item.time -= 1 // eslint-disable-line no-param-reassign
        }
        return item
      })
      return {
        todoData: newArr,
      }
    })
  }

  addTask = (text, min, sec) => {
    const newTask = this.createNewTask(text, min, sec)

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
      const newArr = todoData.toSpliced(idx, 1, newItem)

      return {
        todoData: newArr,
      }
    })
  }

  createNewTask(label, min, sec) {
    return {
      label,
      /* eslint no-plusplus: "error" */
      id: this.maxID++,
      done: false,
      editing: false,
      created: new Date(),
      time: Number(sec) + min * 60,
      timerTick: false,
    }
  }

  render() {
    const { todoData, filter } = this.state
    const itemsLeft = todoData.length - todoData.filter((el) => el.done).length
    return (
      <section className="todoapp">
        <React.StrictMode>
          <NewTaskForm onAddTask={this.addTask} />
          <section className="main">
            <TaskList
              todos={todoData}
              filter={filter}
              onDeleted={this.deleteTask}
              onToggleDone={this.onToggleDone}
              onEditingToggle={this.onEditingToggle}
              onEditingTask={this.editingTask}
              onToggleTimer={this.onToggleTimer}
            />

            <Footer
              itemsLeft={itemsLeft}
              onFilter={this.todoFilter}
              filter={filter}
              onClearCompleted={this.clearCompleted}
            />
          </section>
        </React.StrictMode>
      </section>
    )
  }
}
