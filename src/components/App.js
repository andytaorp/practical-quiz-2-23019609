import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";

function App() {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (newTask) => {
        // TODO: write code to add a new task
        setTasks((prev) => [...prev, newTask]);
    };

    const handleToggleTask = (id) => {
        // TODO: write code to toggle a task's status
        tasks.map(function (task, index) {
            if (task.id === id) {
                task.status = !task.status;
            }
        });
    };

    const handleDeleteTask = (id) => {
        // TODO: write code to delete a task
        setTasks((prev) => prev.filter((task, index) => task.id !== id));
    };

    return (
        <div className="app">
            <h1>Task Tracker</h1>
            {/*TODO: add a form to add a new task*/}
            <Form
                handleAddTask={handleAddTask}
                handleToggleTask={handleToggleTask}
            />
            {/*TODO: add a list of tasks*/}
            <TaskList
                handleDeleteTask={handleDeleteTask}
                handleToggleTask={handleToggleTask}
            />
        </div>
    );
}

export default App;
