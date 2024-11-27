import React from "react";

/**
 * TODO: implement the Task component
 * @function Task
 * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
 */
export default function Task(task, { handleToggleTask, handleDeleteTask }) {
    return (
        <li
            style={{
                textDecoration: task.status ? "line-through" : "none",
            }}
        >
            <input
                type="checkbox"
                onChange={() => handleToggleTask(task.id)}
                handleToggleTask={() => handleToggleTask(task.id)}
            />
            {task.description}
            <button type="button" onClick={() => handleDeleteTask(task.id)}>
                ✖
            </button>
        </li>
    );
}
