import React from "react";

import NewTaskForm from './components/NewTaskForm/NewTaskForm'
import TaskList from "./components/TaskList/TaskList";
import Footer from './components/Footer/Footer'

const App = function () {

    const todoData = [
        {label: 'Drink coffee', id: 1},
        {label: 'Make Awesome App', id: 2},
        {label: 'Hava a nice day', id: 3}
    ]

    return (
        <section className="todoapp">
        <NewTaskForm />
        <section className="main">
            <TaskList todos={todoData}
            onDeleted = {(id) => {console.log('del', id)}} />
            <Footer />
        </section>
      </section>
    ) 
    
}

export default App