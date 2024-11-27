import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";

function App() {
    const [tasks, setTasks] = useState([]);

    const onAddTask = (newTask) => {
        // TODO: write code to add a new task
        setTasks((prev) => [...prev, newTask]);
    };

    const onToggleTask = (id) => {
        // TODO: write code to toggle a task's status
        const updateTask = tasks.map((task) =>
            task.id === id ? { ...task, status: !task.status } : task
        );

        setTasks(updateTask);
    };

    const onDeleteTask = (id) => {
        // TODO: write code to delete a task
        setTasks((prev) => prev.filter((task, index) => task.id !== id));
    };

    return (
        <div className="app">
            <h1>Task Tracker</h1>
            {/*TODO: add a form to add a new task*/}
            <Form onAddTask={onAddTask} />
            {/*TODO: add a list of tasks*/}
            <TaskList
                tasks={tasks}
                onToggleTask={onToggleTask}
                onDeleteTask={onDeleteTask}
            />
        </div>
    );
}

export default App;
