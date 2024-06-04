import React from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import Timer from './Timer';
import CurrentTime from './CurrentTime';
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Task Manager</h1>
                <AddTask />
                <TaskList />
                <Timer />
                <CurrentTime /> {/* Intègre le composant ici */}
            </header>
        </div>
    );
}

export default App;
