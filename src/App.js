import React, { Component } from "react";

import NewTaskForm from './components/NewTaskForm/NewTaskForm'
import TaskList from "./components/TaskList/TaskList";
import Footer from './components/Footer/Footer'
import AddNewTask from "./components/TaskList/AddNewTask/AddNewTask";



export default class App extends Component {

    maxID = 0

    state = {
        todoData: [
            this.createNewTask('Drink coffee'),
            this.createNewTask('Make Awesome App'),
            this.createNewTask('Hava a nice day'),
        ]
    }

    deleteTask = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id)
            let newArr = todoData.toSpliced(idx, 1)

            return {
                todoData: newArr
            }
        })
    }

    createNewTask(label) {
        return {
            label,
            id: this.maxID++,
            done: false
        }
    }

    addTask = (text) => {
        const newTask = this.createNewTask(text)

        this.setState(({todoData}) => {
            return {
                todoData: [...todoData, newTask]
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id)
            const oldItem = todoData[idx]
            const newItem = {...oldItem, done: !oldItem.done}
            let newArr = todoData.toSpliced(idx, 1, newItem)

            return {
                todoData: newArr
            }
        })
    }

    render () {
        const { todoData } = this.state
        const itemsLeft = todoData.length - todoData
            .filter((el)=> el.done).length

        return (
            <section className="todoapp">
            <NewTaskForm />
            <section className="main">
                <TaskList todos={todoData}
                onDeleted = {this.deleteTask}
                onToggleDone = {this.onToggleDone}/>
                <AddNewTask 
                onAddTask = {this.addTask}/>
                <Footer itemsLeft = {itemsLeft}/>
            </section>
          </section>
        )  
    }
 
}