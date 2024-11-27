import React from "react";

/**
 * TODO: implement the Task component
 * @function Task
 * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
 */
export default function Task({ task, onToggleTask, onDeleteTask }) {
    return (
        <li
            style={{
                textDecoration: task.status ? "line-through" : "none",
            }}
        >
            <input
                type="checkbox"
                onChange={() => onToggleTask(task.id)}
                checked={task.status}
            />
            {task.description}
            <button type="button" onClick={() => onDeleteTask(task.id)}>
                ✖
            </button>
        </li>
    );
}
