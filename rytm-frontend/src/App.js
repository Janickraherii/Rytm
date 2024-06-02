import React from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import Timer from './Timer';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Task Manager</h1>
                <AddTask />
                <TaskList />
                <Timer />
            </header>
        </div>
    );
}

export default App;
