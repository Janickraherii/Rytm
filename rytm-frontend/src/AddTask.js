import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './AddTask.css'; // Import du fichier CSS pour les styles spécifiques

function AddTask({ onAddTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = { id: Date.now(), title, description, status: 'todo', completed: false };
        axios.post('/api/tasks/', newTask)
            .then(response => {
                console.log('Task added!', response.data);
                onAddTask(newTask);
                setTitle('');
                setDescription('');
            })
            .catch(error => {
                console.error('There was an error adding the task!', error);
            });
    };

    return (
        <form className="add-task-form" onSubmit={handleSubmit}>
            <div className="form-column">
                <label className="input-label">
                    Titre :
                    <input
                        type="text"
                        className="input-field"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-column">
                <label className="input-label">
                    Plus de détails : 
                    <textarea
                        className="input-field"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-column">
                <button className="submit-button" type="submit">
                    <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                </button>
            </div>
        </form>
    );
}

export default AddTask;
