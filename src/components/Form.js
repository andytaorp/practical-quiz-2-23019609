import React, { useState } from "react";

export default function Form({ onAddTask }) {
    const [description, setDescription] = useState("");

    function handleDescription(e) {
        setDescription(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        // TODO: write code to handle form submission
        const task = {
            id: Date.now(),
            description: description,
            status: false,
        };

        onAddTask(task);
    }

    return (
        // TODO: add a form to add a new task
        <div>
            <form onSubmit={onSubmit}>
                {/* <label for="description-input"> Task Description: </label>
                <br /> */}
                {/* text input field for description */}
                <input
                    type="text"
                    id="description-input"
                    name="description-input"
                    value={description}
                    onChange={handleDescription}
                    placeholder="New Task"
                />
            </form>
            <button type="submit" onClick={onSubmit}>
                Add Task
            </button>
        </div>
    );
}
