import React, { useState } from 'react';
import axios from 'axios';

function AddTask() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/tasks/', { title, description, completed: false })
            .then(response => {
                console.log('Task added!', response.data);
            })
            .catch(error => {
                console.error('There was an error adding the task!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTask;
