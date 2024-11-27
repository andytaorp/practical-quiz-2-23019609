import React, { useState } from "react";

export default function Form({ handleAddTask, handleToggleTask }) {
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        // TODO: write code to handle form submission
        e.preventDefault();

        const task = {
            id: Date.now(),
            description: description,
            status: false,
        };

        handleAddTask(task);
        handleToggleTask(false);

        <button type="button" onClick={handleSubmit}>
            Submit
        </button>;
    };

    return (
        // TODO: add a form to add a new task
        <div>
            <form>
                <label for="description-input"> Task Description: </label>
                <input
                    type="text"
                    id="description-input"
                    name="description-input"
                    value={description}
                    onChange={setDescription}
                />
            </form>
        </div>
    );
}
